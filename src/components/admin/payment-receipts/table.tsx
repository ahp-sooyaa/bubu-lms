import { CircleCheckBig, Eye } from "lucide-react";
import { classApplicationTable, paymentReceiptTable } from "@/db/schema";
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
    const filteredPaymentReceipts = await db
        .select({
            id: paymentReceiptTable.id,
            email: paymentReceiptTable.email,
            receiptUrl: paymentReceiptTable.receiptUrl,
            bank: paymentReceiptTable.bank,
            amount: paymentReceiptTable.amount,
            status: paymentReceiptTable.status,
            created_at: paymentReceiptTable.createdAt,
            reviewedBy: paymentReceiptTable.reviewedBy,
            // Include teacher data
            applicationId: classApplicationTable.id,
        })
        .from(paymentReceiptTable)
        .leftJoin(
            classApplicationTable,
            eq(paymentReceiptTable.applicationId, classApplicationTable.id),
        )
        .where(ilike(paymentReceiptTable.email, `%${query}%`))
        .orderBy(asc(paymentReceiptTable.id))
        .limit(itemsPerPage)
        .offset(offset);

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-700 text-xs uppercase text-gray-500 font-bold bg-gray-50/50 dark:bg-gray-800/50">
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Receipt Url</th>
                        <th className="px-6 py-4">Bank</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4">Reviewed By</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Created At</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {filteredPaymentReceipts.length > 0 ? (
                        filteredPaymentReceipts.map((cls) => (
                            <tr
                                key={cls.id}
                                className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition duration-150"
                            >
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500 ">
                                        {cls.email}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {cls.receiptUrl}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {cls.bank}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {cls.amount}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">
                                        {cls.reviewedBy}
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
                                            cls.created_at,
                                        ).toLocaleDateString("en-US", {})}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <Link
                                            href={`/admin/payment-receipts/${cls.id}`}
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
                                No payment receipts found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
