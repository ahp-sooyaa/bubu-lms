"use server";

import { z } from "zod";
import { db } from "@/db/drizzle";
import { paymentReceipt } from "@/db/schema";
import { put } from "@vercel/blob";

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

    await db.insert(paymentReceipt).values({
        email: email,
        receiptUrl: receiptUrl,
        bank: bank,
        amount: amount,
    });
}
