import { ReactNode } from "react";
import { Download } from "lucide-react";

interface PageHeaderProps {
    title: string;
    badges?: ReactNode;
    actionButton?: ReactNode;
}

export function PageHeader({ title, badges, actionButton }: PageHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                    {title}
                </h1>
                {badges && (
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        {badges}
                    </div>
                )}
            </div>
            {actionButton ? (
                actionButton
            ) : (
                <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 px-6 py-3 rounded-xl font-bold shadow-sm transition flex items-center gap-2 group">
                    <Download className="text-gray-400 group-hover:text-primary" />
                    Export Report
                </button>
            )}
        </div>
    );
}
