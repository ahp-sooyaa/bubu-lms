import Link from "next/link";
import { classTable, userTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    ChartLine,
    CircleCheck,
    CircleX,
    Clock,
    Copy,
    Download,
    ExternalLink,
    GraduationCap,
    Hash,
    History,
    Hourglass,
    Info,
    Landmark,
    LayoutGrid,
    Mail,
    MapPin,
    Minus,
    Pencil,
    Plus,
    ReceiptText,
    RefreshCcw,
    Trash,
    UserPlus,
    UserRoundMinus,
    Users,
} from "lucide-react";
import { approvePaymentReceipt } from "@/actions/payment-receipt";

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
    const approvePaymentReceiptWithId = approvePaymentReceipt.bind(null, id);

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
                                Payment Receipts
                            </a>
                        </li>
                        <li>
                            <span className="text-gray-300">/</span>
                        </li>
                        <li>
                            <span className="text-gray-900 dark:text-white font-semibold">
                                Detail #TRX-8829
                            </span>
                        </li>
                    </ol>
                </nav>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                            Payment Receipt Detail
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Reviewing transaction{" "}
                            <span className="font-mono text-gray-700 dark:text-gray-300 font-medium">
                                #TRX-8829
                            </span>
                        </p>
                    </div>
                    <Link
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm group"
                        href="/admin/payment-receipts"
                    >
                        <ArrowLeft size={16} />
                        Back to Payment Receipts
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                            Current Status
                        </h3>
                        <div className="flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                                <Hourglass size={24} />
                            </span>
                            <div>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">
                                    Pending Review
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Requires verification
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
                            Student Information
                        </h3>
                        <div className="flex items-start gap-4 mb-6">
                            <div className="relative flex-shrink-0">
                                <img
                                    alt="Michael Johnson"
                                    className="w-16 h-16 rounded-2xl object-cover ring-4 ring-gray-50 dark:ring-gray-800"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA46pCgugKWT_Fy_SiQjD-COV64D7rNE5pOink6QsCwHSwCeI5L15vU3idqLiS8jH3fT0JcN7iZnn0BQ7M1eaYl5BCETAcbJ91md8nCMuZnH0VxQWAo0ZdwLYiWBb-dB-BWF-ozjiSNU-vII6vQXh91s-H4Dwm9gzBosO9sjGV80bk6YXgIyM4X3qFjHBymPBbZXehexzDqkiWk9U6MY06Ajn7TFbTmP11TViqzSlLhLu2fKp9ZV-I7lS_2-WTXrH8ICccNGOLCoUk"
                                />
                                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-1">
                                    <span className="material-icons text-blue-500 text-sm">
                                        verified
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    Michael Johnson
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                                    m.johnson@example.com
                                </p>
                                <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                                    <span className="material-icons text-[14px]">
                                        calendar_today
                                    </span>{" "}
                                    Registered Oct 20, 2023
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-100 dark:border-gray-700 pt-4 space-y-3">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    Class Enrolled
                                </p>
                                <div className="flex items-center gap-2">
                                    <GraduationCap size={14} />
                                    <p className="font-bold text-gray-800 dark:text-gray-200">
                                        HSK Level 4 (Standard)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                            Payment Summary
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Total Amount
                                </span>
                                <span className="text-2xl font-bold text-primary dark:text-white">
                                    $200.00
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">
                                    Submission Date
                                </span>
                                <span className="font-medium text-gray-900 dark:text-white">
                                    Oct 25, 2023
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">
                                    Payment Method
                                </span>
                                <span className="font-medium text-gray-900 dark:text-white flex items-center gap-1">
                                    <Landmark size={16} /> Bank Transfer
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">
                                    Transaction ID
                                </span>
                                <span className="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                                    TRX-8829-HSK
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-200 dark:border-gray-700 sticky top-24">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                            Admin Actions
                        </h3>
                        <div className="mb-6">
                            <label
                                className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                                htmlFor="admin_notes"
                            >
                                Admin Notes (Optional)
                            </label>
                            <textarea
                                className="w-full rounded-xl border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring focus:ring-primary/20 text-sm placeholder-gray-400"
                                id="admin_notes"
                                placeholder="Add internal notes about this transaction..."
                                rows={3}
                            ></textarea>
                        </div>
                        <div className="space-y-3">
                            <form action={approvePaymentReceiptWithId}>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 px-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-md shadow-primary/30 transition flex items-center justify-center gap-2 group"
                                >
                                    <CircleCheck size={20} />
                                    Confirm Payment
                                </button>
                            </form>
                            <p className="text-xs text-center text-gray-400 dark:text-gray-500 px-2">
                                Clicking confirm will automatically create the
                                student account and send a welcome email.
                            </p>
                            <div className="pt-2">
                                <button className="w-full py-3 px-4 bg-white dark:bg-transparent border-2 border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl font-bold transition flex items-center justify-center gap-2">
                                    <CircleX size={20} />
                                    Reject Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8">
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full min-h-[600px]">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-white dark:bg-surface-dark z-10 relative">
                            <div className="flex items-center gap-3">
                                <ReceiptText size={20} />
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                    Bank Transfer Receipt Screenshot
                                </h2>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                                    title="Zoom In"
                                >
                                    <Plus size={16} />
                                </button>
                                <button
                                    className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                                    title="Zoom Out"
                                >
                                    <Minus size={16} />
                                </button>
                                <button
                                    className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                                    title="Open in New Tab"
                                >
                                    <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                        <div className="flex-grow bg-gray-100 dark:bg-black/40 relative overflow-auto flex items-center justify-center p-8">
                            <div className="relative shadow-2xl">
                                <img
                                    alt="Bank Transfer Receipt"
                                    className="max-w-full rounded-lg border border-gray-200 dark:border-gray-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiMOoa8egAvEOqDIKyBzJjlfeln9ckfQW_90S3FgjOtvgikmLq_Fbezb4fJl5h9BGZD3aLgffmwUMQCZp-9TApDQLObaM1pvKp51p1doT_0CBaYkT9FALrf7rSBuN56j0MWXkeLZslwUilfO5Kt1qHcjqgLozmt_KQtiy8GqcvyCqOuZroIOOO_RADwVV8Ja7BSJ4AZTKmstMwvlx8g-EeMDqV_U2DBFWPGoKFMJUT2nm4S31MOf8I6-HBfrEssl5A8ihX8bFWwEA"
                                    style={{ maxHeight: "80vh" }}
                                />
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                            <span>Uploaded: Oct 25, 2023 at 14:30 PM</span>
                            <span>
                                File: receipt_screenshot_2291.jpg (1.2 MB)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
