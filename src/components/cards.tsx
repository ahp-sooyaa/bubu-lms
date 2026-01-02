import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ArrowRight,
    Building2,
    Calendar,
    Clock4,
    MapPin,
    Quote,
    Video,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { EnrollmentForm, WaitlistForm } from "@/components/forms";

interface ClassesLocationCardProps extends React.ComponentProps<"div"> {
    title: string;
    description: string;
    address: string;
    hours: string;
    actionLink: string;
}

function ClassesLocationCard({
    title,
    description,
    address,
    hours,
    actionLink,
    className,
    ...props
}: ClassesLocationCardProps) {
    return (
        <Card
            className={cn(
                "bg-white dark:bg-surface-dark py-6 rounded-3xl shadow-soft hover:shadow-xl transition duration-300 border border-transparent hover:border-primary/20 group flex flex-col h-full ring-0",
                className,
            )}
            {...props}
        >
            <CardHeader className="px-6">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary transition">
                        {title}
                    </CardTitle>
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary/80 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <Building2 color="currentColor" />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="px-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed font-medium">
                    {description}
                </p>
                <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                        <MapPin
                            size="20"
                            color="currentColor"
                            className="text-primary/80 dark:text-gray-300"
                        />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            {address}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock4
                            size="20"
                            color="currentColor"
                            className="text-primary/80 dark:text-gray-300"
                        />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            {hours}
                        </span>
                    </div>
                </div>
            </CardContent>
            <CardAction className="px-6 pt-2 mt-auto">
                <a
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-light transition group/link"
                    href={actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get Directions
                    <ArrowRight
                        size="15"
                        color="currentColor"
                        className="ml-1 transform group-hover/link:translate-x-1 transition-transform"
                    />
                </a>
            </CardAction>
        </Card>
    );
}

interface ClassesTypeCardProps extends React.ComponentProps<"div"> {
    title: string;
    type: "in-person" | "online";
    code: string;
    startDate: string;
    schedule: string;
    location?: string;
    platform?: string;
    fee: string;
    isUpcoming: boolean;
    classLink: string;
}

function ClassesTypeCard({
    title,
    type,
    code,
    startDate,
    schedule,
    location,
    platform,
    fee,
    isUpcoming,
    classLink,
    className,
    ...props
}: ClassesTypeCardProps) {
    return (
        <Card
            className={cn(
                "bg-white dark:bg-surface-dark rounded-3xl py-6 flex flex-col h-full shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all duration-300 ring-0 gap-8",
                className,
            )}
            {...props}
        >
            <CardHeader className="px-6 gap-6">
                <div className="flex justify-between items-center">
                    <Badge>{type.toUpperCase().replace("-", " ")}</Badge>
                    <span className="text-xs font-bold text-primary/60">
                        {code}
                    </span>
                </div>
                <CardTitle className="text-2xl font-display font-bold text-gray-900 dark:text-white leading-snug tracking-tight">
                    <Link href={classLink}>{title}</Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
                <div className="space-y-6 grow">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                            <Calendar size="15" className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                                Start Date
                            </p>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                                {startDate}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                            <Clock4 size="15" className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                                Schedule
                            </p>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                                {schedule}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {type === "online" ? (
                            <>
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                    <Video size="15" className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                                        Platform
                                    </p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                                        {platform}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                    <MapPin
                                        size="15"
                                        className="text-primary"
                                    />
                                </div>
                                <div>
                                    <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                                        Location
                                    </p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                                        {location}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="px-6 pt-2 mt-auto">
                <div className="border-t border-gray-100 dark:border-gray-700 pt-6 flex items-center justify-between w-full">
                    <div>
                        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                            Tuition
                        </p>
                        <p className="text-2xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
                            {fee}
                        </p>
                    </div>
                    {isUpcoming ? <WaitlistForm /> : <EnrollmentForm />}
                </div>
            </CardFooter>
        </Card>
    );
}

interface ReviewCardProps extends React.ComponentProps<"div"> {
    content: string;
    reviewerName: string;
    reviewerClass: string;
}

function ReviewCard({
    content,
    reviewerName,
    reviewerClass,
    className,
    ...props
}: ReviewCardProps) {
    return (
        <Card
            className={cn(
                "bg-white dark:bg-surface-dark py-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative ring-0",
                className,
            )}
            {...props}
        >
            <div className="text-primary/20 absolute top-6 right-8">
                <Quote fill="currentColor" stroke="none" size="40" />
            </div>
            <CardContent className="px-6">
                <p className="text-gray-600 dark:text-gray-300 mt-12 mb-8 relative z-10 font-medium text-lg leading-relaxed">
                    {content}
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                        {reviewerName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">
                            {reviewerName}
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                            {reviewerClass}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export { ClassesLocationCard, ClassesTypeCard, ReviewCard };
