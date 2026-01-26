import { Check, FileText } from "lucide-react";
import { Tabs } from "@/components/admin/tabs";
import { PageHeader } from "@/components/admin/page-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "next/link";

export default async function Page() {
    return (
        <>
            <div className="mb-8">
                <Breadcrumbs
                    items={[{ label: "Admin Portal" }]}
                    background="light"
                    className="mb-6"
                />
                <PageHeader
                    title="Admin Portal Overview"
                    badges={
                        <>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold">
                                <FileText />
                                12 Active Classes
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold">
                                <Check />
                                20 students Enrolled
                            </span>
                        </>
                    }
                    actionButton={
                        <Link
                            href="/admin/classes/create"
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold shadow-sm transition"
                        >
                            Add New Class
                        </Link>
                    }
                />
                <Tabs />
            </div>
            <div>Admin overview</div>
        </>
    );
}
