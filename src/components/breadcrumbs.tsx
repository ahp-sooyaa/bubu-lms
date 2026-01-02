import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-2 text-white/60 dark:text-gray-400 text-sm font-medium">
                {items.map((item, index) => (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            {item.href ? (
                                <BreadcrumbLink
                                    className="hover:text-white transition"
                                    href={item.href}
                                >
                                    {item.label}
                                </BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage className="text-white font-medium">
                                    {item.label}
                                </BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                        {index < items.length - 1 && <BreadcrumbSeparator />}
                    </Fragment>
                ))}
                {/*<BreadcrumbItem>
                    <BreadcrumbLink
                        className="hover:text-white transition"
                        href="/"
                    >
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink
                        className="hover:text-white transition"
                        href="/classes"
                    >
                        Classes
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-white font-medium">
                        Advanced React Development
                    </BreadcrumbPage>
                </BreadcrumbItem>*/}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export { Breadcrumbs };
