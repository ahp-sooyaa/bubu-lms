"use server";

import { z } from "zod";
import { db } from "@/db/drizzle";
import {
    classApplicationTable,
    classTable,
    enrollmentTable,
    paymentReceiptTable,
    userTable,
} from "@/db/schema";
import { put } from "@vercel/blob";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { POST } from "@/app/api/send/route";

const schema = z.object({
    id: z.string(),
    email: z.email(),
    receipt: z.file(),
    bank: z.string(),
    amount: z.number().positive(),
    status: z.enum(["pending", "approved", "rejected"]),
    reviewedBy: z.string(),
});

const createPaymentReceiptSchema = schema.omit({
    id: true,
    status: true,
    reviewedBy: true,
});

export async function createPaymentReceipt(
    paymentAmount: number,
    formData: FormData,
) {
    // Extract form data
    const { email, bank, amount } = createPaymentReceiptSchema.parse({
        email: formData.get("email"),
        receipt: formData.get("receipt"),
        bank: formData.get("bank"),
        amount: paymentAmount,
    });

    const imageFile = formData.get("receipt") as File;
    const blob = await put(imageFile.name, imageFile, {
        access: "public",
        addRandomSuffix: true,
    });
    const receiptUrl = blob.url; // Placeholder for actual upload logic

    await db.insert(paymentReceiptTable).values({
        email: email,
        receiptUrl: receiptUrl,
        bank: bank,
        amount: amount,
    });
}

const approveSchema = schema.pick({
    id: true,
});

export async function approvePaymentReceipt(id: string) {
    // Validate id
    approveSchema.parse({ id });

    // Auth check
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // Get admin user
    const user = await db
        .select({ id: userTable.id })
        .from(userTable)
        .where(eq(userTable.clerkId, userId));
    if (!user.length) throw new Error("Admin user not found");

    // Update payment receipt status
    const updated = await db
        .update(paymentReceiptTable)
        .set({ status: "verified", reviewedBy: user[0].id })
        .where(eq(paymentReceiptTable.id, Number(id)))
        .returning({ relatedApplicationId: paymentReceiptTable.applicationId });

    // Update related class application status
    const classApplication = await db
        .update(classApplicationTable)
        .set({ status: "accepted" })
        .where(
            eq(
                classApplicationTable.id,
                Number(updated[0].relatedApplicationId),
            ),
        )
        .returning();

    // add user to class's student list
    await db.insert(enrollmentTable).values({
        classId: classApplication[0].classId,
        userId: classApplication[0].userId,
        enrolledAt: String(new Date()),
    });

    // send notification email to user with class details (TODO)
    // Get class and user details for email
    const classDetails = await db
        .select()
        .from(classTable)
        .where(eq(classTable.id, Number(classApplication[0].classId)))
        .limit(1);

    const userDetails = await db
        .select()
        .from(userTable)
        .where(eq(userTable.id, Number(classApplication[0].userId)))
        .limit(1);

    if (classDetails[0] && userDetails[0]) {
        await POST({
            email: userDetails[0].email,
            userName: userDetails[0].name,
            classId: classDetails[0].id,
        });
    }
}
