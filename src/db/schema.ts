import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/timestamp-columns";

export const statusEnum = pgEnum("status", ["pending", "approved", "rejected"]);

export const paymentReceipt = pgTable("payment_receipt", {
    id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
    email: text().notNull(),
    receiptUrl: text("receipt_url").notNull(),
    bank: text().notNull(),
    amount: integer().notNull(),
    status: statusEnum().default("pending").notNull(),
    reviewedBy: text("reviewed_by"),
    ...timestamps,
});

export const waitList = pgTable("wait_list", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    email: text().notNull(),
    ...timestamps,
});
