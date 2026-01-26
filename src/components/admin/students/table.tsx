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
    const filteredStudents = await db
        .select()
        .from(userTable)
        .where(
            query
                ? and(
                      eq(userTable.role, "student"),
                      ilike(userTable.name, `%${query}%`),
                  )
                : eq(userTable.role, "student"),
        )
        .orderBy(asc(userTable.id))
        .limit(itemsPerPage)
        .offset(offset);

    const client = await clerkClient();
    const clerkUsers = await Promise.all(
        filteredStudents.map(async (student) => {
            try {
                return await client.users.getUser(student.clerkId);
            } catch (error) {
                // Return null if user not found
                return null;
            }
        }),
    );

    // Map Clerk data to your students
    const studentsWithClerkData = filteredStudents.map((student, index) => {
        const clerkUser = clerkUsers[index];
        if (!clerkUser) {
            return {
                ...student,
                name: "Unknown User",
                email: "N/A",
                lastSignIn: null,
            };
        }
        return {
            ...student,
            name: `${clerkUser.firstName} ${clerkUser.lastName}`.trim(),
            email: clerkUser.emailAddresses[0]?.emailAddress,
            lastSignIn: clerkUser.lastSignInAt,
        };
    });

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
                    {studentsWithClerkData.length > 0 ? (
                        studentsWithClerkData.map((student) => (
                            <tr
                                key={student.id}
                                className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition duration-150"
                            >
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {student.name}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {student.email}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {student.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-green-100 text-green-500">
                                        <CircleCheckBig size={12} />{" "}
                                        {student.status
                                            .charAt(0)
                                            .toUpperCase() +
                                            student.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500 whitespace-nowrap">
                                        {student.lastSignIn ?? "Never"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {new Date(
                                            student.createdAt,
                                        ).toLocaleDateString("en-US", {})}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <Link
                                            href={`/admin/students/${student.id}`}
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
                                No students found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
