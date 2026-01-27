"use server";

import { z } from "zod";
import { classTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = z.object({
    id: z.number(),
    title: z.string().trim().min(1, "Title is required"),
    description: z.string().trim().min(1, "Description is required"),
    teacherId: z.coerce.number().min(1, "Teacher is required"),
    capacity: z.coerce.number().positive("Capacity must be a positive number"),
    type: z.enum(["online", "in-person"], {
        message: "Please select a class type",
    }),
    liveSessionUrl: z.string().optional(),
    startTime: z.string().trim().min(1, "Start time is required"),
    durationMinutes: z.string().trim().min(1, "Duration is required"),
    startDate: z.string().trim().min(1, "Start date is required"),
    endDate: z.string().trim().min(1, "End date is required"),
    status: z.enum(["upcoming", "ongoing", "completed", "canceled"], {
        message: "Please select a status",
    }),
    fee: z.coerce.number().positive("Fee must be zero or greater"),
    location: z.string().trim().optional(),
    platform: z.string().trim().optional(),
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

export async function createClass(prevState: any, formData: FormData) {
    console.log("Form Data:", formData);
    const rawFormData = Object.fromEntries(formData.entries());

    // Validate the form data
    const result = createClassSchema.safeParse(rawFormData);

    if (!result.success) {
        // Return validation errors
        return {
            errors: result.error.flatten().fieldErrors,
            message: "Validation failed. Please check the form fields.",
        };
    }

    const validatedData = result.data;
    const code = `CLASS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const location =
        validatedData.type === "in-person"
            ? rawFormData.location?.toString() || null
            : null;
    const platform =
        validatedData.type === "online"
            ? rawFormData.platform?.toString() || null
            : null;

    try {
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
    } catch (error) {
        return {
            errors: {},
            message: "Failed to create class. Please try again.",
        };
    }
}
