import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/timestamp-columns";

export const userStatus = pgEnum("status", ["active", "suspended", "archived"]);
export const userRole = pgEnum("role", ["student", "teacher", "admin"]);

export const userTable = pgTable("user", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    clerkId: text("clerk_id").notNull().unique(),
    name: text().notNull(),
    email: text().notNull().unique(),
    role: userRole().default("student").notNull(),
    status: userStatus().default("active").notNull(),
    ...timestamps,
});

export const classStatus = pgEnum("class_status", [
    "upcoming",
    "ongoing",
    "completed",
    "canceled",
]);

// TODO: Check table columns
export const classTable = pgTable("class", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    code: text().notNull().unique(),
    type: text().notNull(),
    title: text().notNull(),
    description: text().notNull(),
    capacity: integer().notNull(),
    startTime: text("start_time").notNull(),
    durationMinutes: text("duration_minutes").notNull(),
    startDate: text("start_date").notNull(),
    endDate: text("end_date").notNull(),
    location: text(),
    platform: text(),
    fee: integer().notNull(),
    liveSessionUrl: text("live_session_url"),
    status: classStatus().default("upcoming").notNull(),
    teacherId: integer("teacher_id").references(() => userTable.id),
    ...timestamps,
});

export const applicationStatus = pgEnum("application_status", [
    "submitted",
    "waitlisted",
    "accepted",
    "rejected",
]);

export const classApplicationTable = pgTable("class_application", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    classId: integer("class_id").references(() => classTable.id),
    userId: integer("user_id").references(() => userTable.id),
    email: text().notNull(),
    status: applicationStatus().default("submitted").notNull(),
    ...timestamps,
});

export const paymentStatus = pgEnum("payment_status", [
    "pending",
    "verified",
    "rejected",
]);

export const paymentReceiptTable = pgTable("payment_receipt", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    applicationId: integer("application_id").references(
        () => classApplicationTable.id,
    ),
    email: text().notNull(),
    receiptUrl: text("receipt_url").notNull(),
    bank: text().notNull(),
    amount: integer().notNull(),
    status: paymentStatus().default("pending").notNull(),
    reviewedBy: integer("reviewed_by").references(() => userTable.id),
    ...timestamps,
});

export const enrollmentStatus = pgEnum("enrollment_status", [
    "active",
    "completed",
    "dropped",
]);

export const enrollmentTable = pgTable("enrollment", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    classId: integer("class_id").references(() => classTable.id),
    userId: integer("user_id").references(() => userTable.id),
    status: enrollmentStatus().default("active").notNull(),
    enrolledAt: text("enrolled_at").notNull(),
    ...timestamps,
});
