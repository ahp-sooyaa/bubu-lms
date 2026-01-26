import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { clsx } from "clsx";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    background?: "dark" | "light";
    className?: string;
}

function Breadcrumbs({
    items,
    background = "dark",
    className,
}: BreadcrumbsProps) {
    return (
        <Breadcrumb className={className}>
            <BreadcrumbList
                className={clsx(
                    "flex items-center gap-2 text-sm font-medium",
                    background === "dark"
                        ? "text-white/60 dark:text-gray-400"
                        : "text-gray-500",
                )}
            >
                {items.map((item, index) => (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            {item.href ? (
                                <BreadcrumbLink
                                    className={clsx(
                                        "transition",
                                        background === "dark"
                                            ? "hover:text-white"
                                            : "hover:text-gray-900",
                                    )}
                                    href={item.href}
                                >
                                    {item.label}
                                </BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage
                                    className={clsx(
                                        "font-medium",
                                        background === "dark"
                                            ? "text-white"
                                            : "text-gray-900",
                                    )}
                                >
                                    {item.label}
                                </BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                        {index < items.length - 1 && <BreadcrumbSeparator />}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export { Breadcrumbs };
