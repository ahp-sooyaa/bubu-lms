import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { db } from "@/db/drizzle";
import { userTable } from "@/db/schema";

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req);

        if (evt.type === "user.created") {
            // Do something with payload
            // For this guide, log payload to console
            const user = evt.data;

            if (user != null) {
                await db.insert(userTable).values({
                    clerkId: user.id,
                    name: `${user.first_name} ${user.last_name}`.trim(),
                    email: user.email_addresses[0]?.email_address || "",
                    role: "student",
                    status: "active",
                });
            }
        }

        return new Response("Webhook received", { status: 200 });
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return new Response("Error verifying webhook", { status: 400 });
    }
}
