import { CircleCheckBig, Eye } from "lucide-react";
import { userTable } from "@/db/schema";
import Link from "next/link";
import { db } from "@/db/drizzle";
import { and, asc, eq, ilike } from "drizzle-orm";
import { clerkClient } from "@clerk/nextjs/server";

interface TableProps {
    query: string;
    currentPage: number;
}

export default async function Table({ query, currentPage }: TableProps) {
    const itemsPerPage = 2;
    const offset = (currentPage - 1) * itemsPerPage;
    const filteredTeachers = await db
        .select()
        .from(userTable)
        .where(
            query
                ? and(
                      eq(userTable.role, "teacher"),
                      ilike(userTable.name, `%${query}%`),
                  )
                : eq(userTable.role, "teacher"),
        )
        .orderBy(asc(userTable.id))
        .limit(itemsPerPage)
        .offset(offset);

    const client = await clerkClient();
    const clerkUsers = await Promise.all(
        filteredTeachers.map((teacher) =>
            client.users.getUser(teacher.clerkId),
        ),
    );

    // Map Clerk data to your teachers
    const teachersWithClerkData = filteredTeachers.map((teacher, index) => ({
        ...teacher,
        name: `${clerkUsers[index].firstName} ${clerkUsers[index].lastName}`.trim(),
        email: clerkUsers[index].emailAddresses[0]?.emailAddress,
        lastSignIn: clerkUsers[index].lastSignInAt,
    }));

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-700 text-xs uppercase text-gray-500 font-bold bg-gray-50/50 dark:bg-gray-800/50">
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Role</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">LastSignIn</th>
                        <th className="px-6 py-4">CreatedAt</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {teachersWithClerkData.length > 0 ? (
                        teachersWithClerkData.map((teacher) => (
                            <tr
                                key={teacher.id}
                                className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition duration-150"
                            >
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {teacher.name}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {teacher.email}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {teacher.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-green-100 text-green-500">
                                        <CircleCheckBig size={12} />{" "}
                                        {teacher.status
                                            .charAt(0)
                                            .toUpperCase() +
                                            teacher.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500 whitespace-nowrap">
                                        {teacher.lastSignIn ?? "Never"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {new Date(
                                            teacher.createdAt,
                                        ).toLocaleDateString("en-US", {})}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <Link
                                            href={`/admin/teachers/${teacher.id}`}
                                            className="p-2 text-gray-400 hover:text-primary transition rounded-lg hover:bg-primary/5"
                                            title="View Receipt"
                                        >
                                            <Eye />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={8}
                                className="px-6 py-4 text-center text-sm text-gray-500"
                            >
                                No teachers found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
