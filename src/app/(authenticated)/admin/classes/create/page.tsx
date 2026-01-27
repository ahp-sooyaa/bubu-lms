import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { db } from "@/db/drizzle";
import { userTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { CreateForm } from "@/components/admin/class/create-form";

export default async function Page() {
    const teachers = await db
        .select()
        .from(userTable)
        .where(eq(userTable.role, "teacher"));

    return (
        <>
            <div className="mb-8">
                <Breadcrumbs
                    items={[
                        { label: "Admin", href: "/admin" },
                        { label: "Classes", href: "/admin/classes" },
                        { label: "Create Class" },
                    ]}
                    background="light"
                />
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-700 shadow-soft relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                            Create New Class
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Configure the details for the new class offering
                            below. All fields marked with an asterisk (*) are
                            required.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <CreateForm teachers={teachers} />
                    </div>
                </div>
                <div className="lg:col-span-1 space-y-6">
                    <div
                        className="flex  gap-4 bg-white dark:bg-surface-dark rounded-2xl p-6 border
                    border-gray-100 dark:border-gray-700 shadow-soft sticky
                    top-32"
                    >
                        <Link
                            href="/admin/classes"
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "flex-1",
                            )}
                        >
                            Cancel
                        </Link>
                        <Button
                            type="submit"
                            form="classCreationForm"
                            className="flex-1"
                        >
                            Create Class
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
