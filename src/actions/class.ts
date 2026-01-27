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
    liveSessionUrl: z.string().optional(),
    startTime: z.string().min(1, "Start time is required"),
    durationMinutes: z.string(),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string(),
    status: z.enum(["upcoming", "ongoing", "completed", "canceled"]),
    fee: z.coerce.number().nonnegative(),
    location: z.string().optional(),
    platform: z.string().optional(),
});

const createClassSchema = schema
    .omit({
        id: true,
        liveSessionUrl: true,
    })
    .refine(
        (data) => {
            if (data.type === "in-person") {
                return data.location && data.location.trim().length > 0;
            }
            return true;
        },
        {
            message: "Location is required for in-person classes",
            path: ["location"],
        },
    )
    .refine(
        (data) => {
            if (data.type === "online") {
                return data.platform && data.platform.trim().length > 0;
            }
            return true;
        },
        {
            message: "Platform is required for online classes",
            path: ["platform"],
        },
    );

export async function createClass(formData: FormData) {
    console.log("Form Data:", formData);
    const rawFormData = Object.fromEntries(formData.entries());

    const validatedData = createClassSchema.parse(rawFormData);
    const code = `CLASS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const location =
        validatedData.type === "in-person"
            ? rawFormData.location?.toString() || null
            : null;
    const platform =
        validatedData.type === "online"
            ? rawFormData.platform?.toString() || null
            : null;

    await db.insert(classTable).values({
        code: code,
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
        fee: validatedData.fee,
        location: location,
        platform: platform,
    });

    revalidatePath("/admin/classes");
    redirect("/admin/classes");
}
