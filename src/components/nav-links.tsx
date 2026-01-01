"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <div className="space-x-4">
            <Link
                className={clsx(
                    "text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-white transition",
                    pathname === "/classes" && "text-primary dark:text-white",
                )}
                href="/classes"
            >
                Classes
            </Link>
        </div>
    );
}
