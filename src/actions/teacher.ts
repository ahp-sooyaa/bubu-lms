"use server";

import { z } from "zod";
import { clerkClient } from "@clerk/nextjs/server";
import { userTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    status: z.enum(["active", "suspended", "archived"]),
    role: z.enum(["student", "teacher", "admin"]),
});

export async function createTeacher(formData: FormData) {
    console.log("Creating teacher...", formData);
    const rawFormData = Object.fromEntries(formData.entries());

    const validatedData = schema.parse(rawFormData);

    console.log("Validated data:", validatedData);
    try {
        const client = await clerkClient();
        const clerkUser = await client.users.createUser({
            emailAddress: [validatedData.email],
            password: validatedData.password,
            firstName: validatedData.name,
            lastName: "lastname",
        });

        await db.insert(userTable).values({
            clerkId: clerkUser.id,
            name: validatedData.name,
            email: validatedData.email,
            role: validatedData.role,
            status: validatedData.status,
        });

        revalidatePath("/admin/teachers");
        redirect("/admin/teachers");
    } catch (error: any) {
        console.error(
            "Clerk error details:",
            JSON.stringify(error.errors, null, 2),
        );
        throw error;
    }
}
