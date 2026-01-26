import { CircleCheckBig, Eye } from "lucide-react";
import { classTable, userTable } from "@/db/schema";
import Link from "next/link";
import { db } from "@/db/drizzle";
import { asc, eq, ilike } from "drizzle-orm";

interface TableProps {
    query: string;
    currentPage: number;
}

export default async function Table({ query, currentPage }: TableProps) {
    const itemsPerPage = 2;
    const offset = (currentPage - 1) * itemsPerPage;
    // const filteredClasses = await db
    //     .select()
    //     .from(classTable)
    //     .where(ilike(classTable.title, `%${query}%`))
    //     .orderBy(asc(classTable.id))
    //     .limit(itemsPerPage)
    //     .offset(offset);
    const filteredClasses = await db
        .select({
            id: classTable.id,
            title: classTable.title,
            description: classTable.description,
            capacity: classTable.capacity,
            type: classTable.type,
            status: classTable.status,
            createdAt: classTable.createdAt,
            teacherId: classTable.teacherId,
            // Include teacher data
            teacherName: userTable.name,
        })
        .from(classTable)
        .leftJoin(userTable, eq(classTable.teacherId, userTable.id))
        .where(ilike(classTable.title, `%${query}%`))
        .orderBy(asc(classTable.id))
        .limit(itemsPerPage)
        .offset(offset);

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-700 text-xs uppercase text-gray-500 font-bold bg-gray-50/50 dark:bg-gray-800/50">
                        <th className="px-6 py-4">Title</th>
                        <th className="px-6 py-4">Description</th>
                        <th className="px-6 py-4">Instructor</th>
                        <th className="px-6 py-4">Capacity</th>
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {filteredClasses.length > 0 ? (
                        filteredClasses.map((cls) => (
                            <tr
                                key={cls.id}
                                className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition duration-150"
                            >
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500 ">
                                        {cls.title}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {cls.description}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {cls.teacherName}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {cls.capacity}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500 whitespace-nowrap">
                                        {cls.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-green-100 text-green-500">
                                        <CircleCheckBig size={12} />{" "}
                                        {cls.status.charAt(0).toUpperCase() +
                                            cls.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {new Date(
                                            cls.createdAt,
                                        ).toLocaleDateString("en-US", {})}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <Link
                                            href={`/admin/classes/${cls.id}`}
                                            className="p-2 text-gray-400 hover:text-primary transition rounded-lg hover:bg-primary/5"
                                            title="View Class"
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
                                No classes found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
