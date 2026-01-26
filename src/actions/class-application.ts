"use server";

import { db } from "@/db/drizzle";
import {
    classApplicationTable,
    paymentReceiptTable,
    userTable,
} from "@/db/schema";

import { z } from "zod";
import { put } from "@vercel/blob";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

const classApplicationSchema = z.object({
    userId: z.coerce.number(),
    classId: z.coerce.number(),
    email: z.email(),
    amount: z.number().positive(),
    bank: z.string(),
    receipt: z.file(),
});

export async function createClassApplication(
    boundClassId: number,
    boundAmount: number,
    formData: FormData,
) {
    const { userId } = await auth();
    if (!userId) throw new Error("Not authenticated");

    const [user] = await db
        .select()
        .from(userTable)
        .where(eq(userTable.clerkId, userId))
        .limit(1);
    if (!user) throw new Error("User not found");

    const { email, classId, bank, amount, receipt } =
        classApplicationSchema.parse({
            userId: user.id,
            classId: boundClassId,
            email: formData.get("email"),
            amount: boundAmount,
            bank: formData.get("bank"),
            receipt: formData.get("receipt"),
        });

    const status = "submitted";

    const applicationId = await db
        .insert(classApplicationTable)
        .values({
            userId: user.id,
            classId: classId,
            email: email,
            status: status,
        })
        .returning({ insertedId: classApplicationTable.id });

    const imageFile = receipt as File;
    const blob = await put(imageFile.name, imageFile, {
        access: "public",
        addRandomSuffix: true,
    });
    const receiptUrl = blob.url;

    await db.insert(paymentReceiptTable).values({
        applicationId: applicationId[0].insertedId,
        email,
        receiptUrl,
        bank,
        amount,
    });
}

const classWaitlistSchema = z.object({
    email: z.email(),
});

export async function createWaitlistApplication(
    classId: number,
    formData: FormData,
) {
    const status = "waitlisted";

    const { userId } = await auth();
    if (!userId) throw new Error("Not authenticated");
    console.log("User ID:", userId);
    console.log("Clerk ID:", userTable.clerkId);
    const [user] = await db
        .select()
        .from(userTable)
        .where(eq(userTable.clerkId, userId))
        .limit(1);
    if (!user) throw new Error("User not found");

    const { email } = classWaitlistSchema.parse({
        email: formData.get("email"),
    });

    await db.insert(classApplicationTable).values({
        userId: user.id,
        classId: classId,
        email: email,
        status: status,
    });
}
