"use client";

import clsx from "clsx";
import Link from "next/link";
import { generatePagination } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
    filteredContentCount,
    currentPage,
}: {
    filteredContentCount: number;
    currentPage: number;
}) {
    const itemsPerPage = 2;
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const offset = (currentPage - 1) * itemsPerPage;
    const start = offset + 1;
    const end = Math.min(offset + itemsPerPage, filteredContentCount);
    const totalPages = Math.ceil(filteredContentCount / itemsPerPage);
    const allPages = generatePagination(currentPage, totalPages);

    function createPageURL(page: number | string) {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());

        return `${pathname}?${params.toString()}`;
    }

    return (
        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <p className="text-xs text-gray-500 font-medium">
                    Showing{" "}
                    <span className="font-bold text-gray-900 dark:text-white">
                        {start === end ? start : `${start} - ${end}`}
                    </span>{" "}
                    of{" "}
                    <span className="font-bold text-gray-900 dark:text-white">
                        {filteredContentCount}
                    </span>{" "}
                    classes
                </p>
            </div>
            <div className="inline-flex items-center">
                <PaginationArrow
                    direction="left"
                    href={createPageURL(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />

                <div className="flex gap-2">
                    {allPages.map((page, index) => {
                        let position:
                            | "first"
                            | "last"
                            | "single"
                            | "middle"
                            | undefined;

                        if (index === 0) position = "first";
                        if (index === allPages.length - 1) position = "last";
                        if (allPages.length === 1) position = "single";
                        if (page === "...") position = "middle";

                        return (
                            <PaginationNumber
                                key={`${page}-${index}`}
                                href={createPageURL(page)}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
                </div>

                <PaginationArrow
                    direction="right"
                    href={createPageURL(currentPage + 1)}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </div>
    );
}

function PaginationNumber({
    page,
    href,
    isActive,
    position,
}: {
    page: number | string;
    href: string;
    position?: "first" | "last" | "middle" | "single";
    isActive: boolean;
}) {
    const className = clsx(
        "w-7 h-7 flex items-center justify-center text-xs font-bold rounded-lg transition",
        {
            "text-gray-500 hover:text-gray-900 hover:bg-gray-100":
                !isActive && position !== "middle",
            "text-white bg-primary  shadow-sm": isActive,
            "text-gray-500": position === "middle",
        },
    );

    return isActive || position === "middle" ? (
        <div className={className}>{page}</div>
    ) : (
        <Link href={href} className={className}>
            {page}
        </Link>
    );
}

function PaginationArrow({
    href,
    direction,
    isDisabled,
}: {
    href: string;
    direction: "left" | "right";
    isDisabled?: boolean;
}) {
    const className = clsx(
        "px-3 py-1.5 text-xs font-bold rounded-lg transition flex items-center gap-1",
        {
            "pointer-events-none text-gray-400 bg-gray-50 bg-gray-50":
                isDisabled,
            "bg-white text-gray-600 hover:text-primary hover:bg-gray-100 shadow-sm border border-gray-200":
                !isDisabled,
            "mr-2 md:mr-4": direction === "left",
            "ml-2 md:ml-4": direction === "right",
        },
    );

    const buttonText =
        direction === "left" ? (
            <>
                <ChevronLeft className="w-4" /> Prev
            </>
        ) : (
            <>
                Next <ChevronRight className="w-4" />
            </>
        );

    return isDisabled ? (
        <div className={className}>{buttonText}</div>
    ) : (
        <Link href={href} className={className}>
            {buttonText}
        </Link>
    );
}
