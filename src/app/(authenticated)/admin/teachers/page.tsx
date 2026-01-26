import { Check, CirclePlus, FileText } from "lucide-react";
import { db } from "@/db/drizzle";
import { userTable } from "@/db/schema";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/admin/page-header";
import { Tabs } from "@/components/admin/tabs";
import Link from "next/link";
import Pagination from "@/components/pagination";
import { and, count, eq, ilike } from "drizzle-orm";
import Search from "@/components/admin/class/search";
import Table from "@/components/admin/teacher/table";

export default async function Page(props: {
    searchParams?: Promise<{ query?: string; page?: string }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
    const totalTeachersCount = await db
        .select({ count: count() })
        .from(userTable)
        .where(eq(userTable.role, "teacher"));
    const activeTeachersCount = await db
        .select({ count: count() })
        .from(userTable)
        .where(
            and(eq(userTable.status, "active"), eq(userTable.role, "teacher")),
        );
    const filteredTeachersCount = await db
        .select({ count: count() })
        .from(userTable)
        .where(
            query
                ? and(
                      eq(userTable.role, "teacher"),
                      ilike(userTable.name, `%${query}%`),
                  )
                : eq(userTable.role, "teacher"),
        );

    return (
        <>
            <div className="mb-8">
                <Breadcrumbs
                    items={[
                        { label: "Admin Portal", href: "/admin" },
                        { label: "Teachers" },
                    ]}
                    background="light"
                    className="mb-6"
                />
                <PageHeader
                    title="Teachers Management"
                    badges={
                        <>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold">
                                <FileText size={15} />
                                {activeTeachersCount[0].count} Active Classes
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold">
                                <Check size={15} />
                                {totalTeachersCount[0].count} Total
                            </span>
                        </>
                    }
                    actionButton={
                        <Link
                            href="/admin/teachers/create"
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold shadow-sm transition flex gap-2 items-center"
                        >
                            <CirclePlus size={20} />
                            Add New Teacher
                        </Link>
                    }
                />

                <Tabs />
            </div>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        Teachers{" "}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                        <div className="relative grow sm:grow-0">
                            <Search placeholder="Search...." />
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <Table query={query} currentPage={currentPage} />
                    {filteredTeachersCount[0].count > 0 && (
                        <Pagination
                            filteredContentCount={
                                filteredTeachersCount[0].count
                            }
                            currentPage={currentPage}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
