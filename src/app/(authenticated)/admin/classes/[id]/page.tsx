import Link from "next/link";
import { classTable, enrollmentTable, userTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import {
    ArrowRight,
    Calendar,
    ChartLine,
    CircleCheck,
    Clock,
    Copy,
    Download,
    GraduationCap,
    Hash,
    History,
    Info,
    LayoutGrid,
    Mail,
    MapPin,
    Pencil,
    RefreshCcw,
    Trash,
    UserPlus,
    UserRoundMinus,
    Users,
} from "lucide-react";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const classes = await db
        .select()
        .from(classTable)
        .where(eq(classTable.id, Number(id)));
    const assignedTeacher = await db
        .select()
        .from(userTable)
        .where(eq(userTable.id, Number(classes[0].teacherId)));
    console.log(assignedTeacher);

    const enrolledStudents = await db
        .select({
            enrollmentId: enrollmentTable.id,
            createdAt: enrollmentTable.createdAt,
            id: userTable.id,
            name: userTable.name,
            email: userTable.email,
            role: userTable.role,
            status: userTable.status,
        })
        .from(enrollmentTable)
        .innerJoin(userTable, eq(enrollmentTable.userId, userTable.id))
        .where(eq(enrollmentTable.classId, Number(id)));
    console.log("enrolledStudents", enrolledStudents);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <nav aria-label="Breadcrumb" className="flex mb-4">
                    <ol className="flex items-center space-x-2 text-sm font-medium">
                        <li>
                            <a
                                className="text-gray-500 hover:text-primary transition-colors"
                                href="#"
                            >
                                Admin Portal
                            </a>
                        </li>
                        <li>
                            <span className="text-gray-300">/</span>
                        </li>
                        <li>
                            <a
                                className="text-gray-500 hover:text-primary transition-colors"
                                href="#"
                            >
                                Class Management
                            </a>
                        </li>
                        <li>
                            <span className="text-gray-300">/</span>
                        </li>
                        <li>
                            <span className="text-gray-900 dark:text-white font-semibold">
                                Advanced HSK Prep
                            </span>
                        </li>
                    </ol>
                </nav>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 ring-1 ring-black/5 shadow-sm">
                                <span className="font-bold text-sm">HSK</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
                                Advanced HSK Prep
                            </h1>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pl-1">
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold border border-green-200 dark:border-green-800/50">
                                <CircleCheck /> Active
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-medium">
                                <Hash /> ID: CLS-2024-001
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-medium">
                                <Clock /> Mon, Wed 14:00 - 15:30
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 rounded-xl font-bold text-red-500 border border-red-200 hover:bg-red-50 dark:border-red-900/30 dark:hover:bg-red-900/10 transition flex items-center gap-2">
                            <Trash /> Delete Class
                        </button>
                        <Link
                            href={`/admin/classes/${id}/edit`}
                            className="bg-primary hover:bg-[#165B48] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/20 transition flex items-center gap-2 group"
                        >
                            <Pencil /> Edit Class
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <Info /> Class Details
                            </h2>
                        </div>
                        <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-8">
                            <p>
                                This intensive preparation course aims for HSK
                                Level 5 proficiency. The curriculum focuses
                                heavily on advanced grammar structures,
                                vocabulary expansion (aiming for 2500 words),
                                and complex reading comprehension of newspapers
                                and magazines. Students will also practice
                                listening to news broadcasts and films.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                    Schedule
                                </p>
                                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                                    <Calendar />
                                    <span>Mondays &amp; Wednesdays</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1 text-sm pl-8">
                                    <span>14:00 - 15:30</span>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                    Location
                                </p>
                                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                                    <MapPin />
                                    <span>Building A, Room 301</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1 text-sm pl-8">
                                    <span>Main Campus</span>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                    Term Duration
                                </p>
                                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                                    <Calendar />
                                    <span>Feb 12, 2024 - Jun 15, 2024</span>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                    Class Type
                                </p>
                                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                                    <LayoutGrid />
                                    <span>Language Proficiency (HSK)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 sm:p-8 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Users /> Enrolled Students
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    24 students currently active in this class
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center gap-2">
                                    <Download /> Export
                                </button>
                                <button className="bg-primary hover:bg-[#165B48] text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 transition flex items-center gap-2">
                                    <UserPlus /> Add Student
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800/50 text-xs uppercase text-gray-500 font-bold border-b border-gray-100 dark:border-gray-700">
                                        <th className="px-6 py-4">
                                            Student Name
                                        </th>
                                        <th className="px-6 py-4">
                                            Student ID
                                        </th>
                                        <th className="px-6 py-4">
                                            Enrollment Date
                                        </th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {enrolledStudents.map((student) => (
                                        <tr
                                            key={student.id}
                                            className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                                                        {student.name
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </div>
                                                    <span className="font-bold text-gray-900 dark:text-white text-sm">
                                                        {student.name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {student.id}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {student.createdAt.toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    className="text-red-400 hover:text-red-600 transition"
                                                    title="Remove Student"
                                                >
                                                    <UserRoundMinus />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t border-gray-100 dark:border-gray-700 text-center">
                            <button className="text-sm font-bold text-primary hover:text-primary-light transition">
                                View All Students
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700 p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <ChartLine /> Enrollment Stats
                        </h3>
                        <div className="mb-6">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    24
                                </span>
                                <span className="text-sm text-gray-500 font-medium mb-1">
                                    of 30 seats filled
                                </span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                <div className="bg-primary h-3 rounded-full"></div>
                            </div>
                            <div className="mt-2 text-right">
                                <span className="text-xs font-bold text-primary">
                                    80% Full
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="text-center">
                                <p className="text-xs text-gray-500 uppercase font-bold">
                                    Pending
                                </p>
                                <p className="text-xl font-bold text-orange-500">
                                    2
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-gray-500 uppercase font-bold">
                                    Waitlist
                                </p>
                                <p className="text-xl font-bold text-gray-400">
                                    0
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700 p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -mr-4 -mt-4 transition group-hover:bg-primary/10"></div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 relative z-10">
                            <GraduationCap /> Assigned Teacher
                        </h3>
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="relative mb-4">
                                <img
                                    alt="Wang Laoshi"
                                    className="w-24 h-24 rounded-full object-cover ring-4 ring-gray-50 dark:ring-gray-800"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDungRkfbjGTafZN5NEYUQlT_rfF3dSNb9UlqA2SqT4T_GTalg5PTK6E2GpGnw44V1qnKlgkckM6Y4msMNrfn48HwSzFRqXQWt-k2_FZDJhiq8jG0Xii7qd08LWdWm2hOlfZPTQkvpC94tPs3m83_Uz_Lz3HfK9Ly26YGKbzmY7-uGDXIl2AnqHAcprv6npHHHT5bM6IdjFMzha-LB_a6KcbVqjCXrYzDR3lvqckkl14BL3-R-jMbA0XQyGXYnZjCyiKt1EpDHJk-M"
                                />
                                <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                {assignedTeacher[0].name}
                            </h4>
                            <p className="text-sm text-gray-500 mb-6">
                                {assignedTeacher[0].role}
                            </p>
                            <div className="w-full flex gap-2">
                                <button className="flex-1 py-2 px-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                    Profile
                                </button>
                                <button className="flex-1 py-2 px-3 rounded-xl bg-gray-900 dark:bg-gray-700 text-white text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-600 transition">
                                    Message
                                </button>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 w-full">
                                <button className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary-light text-sm font-bold transition">
                                    <RefreshCcw /> Assign Different Teacher
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700 p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                            Quick Actions
                        </h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition group border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition">
                                        <Mail />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                        Email Class
                                    </span>
                                </div>
                                <ArrowRight />
                            </button>
                            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition group border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-100 transition">
                                        <Copy />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                        Duplicate Class
                                    </span>
                                </div>
                                <ArrowRight />
                            </button>
                            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition group border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-100 transition">
                                        <History />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                        View History
                                    </span>
                                </div>
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
