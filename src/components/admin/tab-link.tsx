"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export function TabLink({
    children,
    link,
}: {
    children: React.ReactNode;
    link: string;
}) {
    const pathname = usePathname();
    return (
        <Link
            className={clsx(
                "border-b-2 py-4 px-1 text-gray-500 inline-flex items-center gap-2 text-sm  transition-all",
                pathname === link
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-gray-900 hover:border-gray-500",
            )}
            href={link}
        >
            {children}
        </Link>
    );
}
