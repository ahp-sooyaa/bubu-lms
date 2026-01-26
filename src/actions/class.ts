"use server";

import { z } from "zod";
import { classTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    teacherId: z.coerce.number(),
    capacity: z.coerce.number().positive(),
    type: z.enum(["online", "in-person"]),
    liveSessionUrl: z.string(),
    startTime: z.string(),
    durationMinutes: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    status: z.enum(["upcoming", "ongoing", "completed", "canceled"]),
});

const createClassSchema = schema.omit({ id: true, liveSessionUrl: true });

export async function createClass(formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries());

    const validatedData = createClassSchema.parse(rawFormData);

    await db.insert(classTable).values({
        title: validatedData.title,
        description: validatedData.description,
        teacherId: validatedData.teacherId,
        capacity: validatedData.capacity,
        type: validatedData.type,
        startTime: validatedData.startTime,
        durationMinutes: validatedData.durationMinutes,
        startDate: validatedData.startDate,
        endDate: validatedData.endDate,
        status: validatedData.status,
    });

    revalidatePath("/admin/classes");
    redirect("/admin/classes");
}
