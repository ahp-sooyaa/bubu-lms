"use server";

import { db } from "@/db/drizzle";
import { waitList } from "@/db/schema";
import { z } from "zod";

const waitListSchema = z.object({
    email: z.email(),
});

export async function waitListAction(formData: FormData) {
    // Simulate an async operation, e.g., saving to a database
    const { email } = waitListSchema.parse({
        email: formData.get("email"),
    });

    await db.insert(waitList).values({
        email,
    });
}
