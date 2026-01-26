import { Breadcrumbs } from "@/components/breadcrumbs";
import { createClass } from "@/actions/class";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <>
            <div className="mb-8">
                <Breadcrumbs
                    items={[
                        { label: "Admin", href: "/admin" },
                        { label: "Classes", href: "/admin/classes" },
                        { label: "Edit Class" },
                    ]}
                    background="light"
                />
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-700 shadow-soft relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                            Edit Class
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Configure the details for the new class offering
                            below. All fields marked with an asterisk (*) are
                            required.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <form
                            action={createClass}
                            className="p-6 md:p-10"
                            id="classCreationForm"
                        >
                            <div className="mb-10">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">
                                        1
                                    </span>
                                    Basic Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="className"
                                        >
                                            Class Name{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Input
                                            id="className"
                                            placeholder="e.g. Advanced HSK Preparation"
                                            type="text"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="classType"
                                        >
                                            Class Type{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Select
                                            id="classType"
                                            name="type"
                                            defaultValue="in-person"
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="in-person">
                                                    In-Person
                                                </SelectItem>
                                                <SelectItem value="online">
                                                    Online (Virtual)
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="description"
                                        >
                                            Description
                                        </label>
                                        <Textarea
                                            id="description"
                                            name="description"
                                            placeholder="Enter a brief overview of the class curriculum and objectives..."
                                            rows={4}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full mb-10"></div>
                            <div className="mb-10">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">
                                        2
                                    </span>
                                    Staffing &amp; Capacity
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="instructor"
                                        >
                                            Instructor{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Select
                                            id="instructor"
                                            name="instructor"
                                            defaultValue=""
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Search for an instructor..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Wang Laoshi">
                                                    Wang Laoshi (Senior
                                                    Instructor)
                                                </SelectItem>
                                                <SelectItem value="Kim Min-ji">
                                                    Kim Min-ji (Instructor)
                                                </SelectItem>
                                                <SelectItem value="Tanaka Ken">
                                                    Tanaka Ken (Head of Dept.)
                                                </SelectItem>
                                                <SelectItem value="Li Wei">
                                                    Li Wei (Instructor)
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="maxStudents"
                                        >
                                            Max Students{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="maxStudents"
                                                min="1"
                                                placeholder="e.g. 20"
                                                type="number"
                                                name="capacity"
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                                                students
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full mb-10"></div>
                            <div className="mb-10">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">
                                        3
                                    </span>
                                    Schedule &amp; Timeline
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                            Weekly Schedule{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="flex flex-wrap gap-3">
                                            <div>
                                                <Input
                                                    className="hidden day-checkbox"
                                                    id="mon"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold cursor-pointer hover:border-primary transition select-none"
                                                    htmlFor="mon"
                                                >
                                                    Mo
                                                </label>
                                            </div>
                                            <div>
                                                <Input
                                                    className="hidden day-checkbox"
                                                    id="tue"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold cursor-pointer hover:border-primary transition select-none"
                                                    htmlFor="tue"
                                                >
                                                    Tu
                                                </label>
                                            </div>
                                            <div>
                                                <Input
                                                    className="hidden day-checkbox"
                                                    id="wed"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold cursor-pointer hover:border-primary transition select-none"
                                                    htmlFor="wed"
                                                >
                                                    We
                                                </label>
                                            </div>
                                            <div>
                                                <Input
                                                    className="hidden day-checkbox"
                                                    id="thu"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold cursor-pointer hover:border-primary transition select-none"
                                                    htmlFor="thu"
                                                >
                                                    Th
                                                </label>
                                            </div>
                                            <div>
                                                <Input
                                                    className="hidden day-checkbox"
                                                    id="fri"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold cursor-pointer hover:border-primary transition select-none"
                                                    htmlFor="fri"
                                                >
                                                    Fr
                                                </label>
                                            </div>
                                            <div>
                                                <Input
                                                    className="hidden day-checkbox"
                                                    id="sat"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold cursor-pointer hover:border-primary transition select-none"
                                                    htmlFor="sat"
                                                >
                                                    Sa
                                                </label>
                                            </div>
                                            <div>
                                                <Input
                                                    className="hidden day-checkbox"
                                                    id="sun"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold cursor-pointer hover:border-primary transition select-none"
                                                    htmlFor="sun"
                                                >
                                                    Su
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="startTime"
                                        >
                                            Start Time
                                        </label>
                                        <Input
                                            id="startTime"
                                            type="time"
                                            name="startTime"
                                        />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="duration"
                                        >
                                            Duration
                                        </label>
                                        <Select
                                            id="duration"
                                            name="durationMinutes"
                                            defaultValue="60"
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Search for an instructor..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="45">
                                                    45 minutes
                                                </SelectItem>
                                                <SelectItem value="60">
                                                    60 minutes
                                                </SelectItem>
                                                <SelectItem value="90">
                                                    90 minutes
                                                </SelectItem>
                                                <SelectItem value="120">
                                                    2 hours
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="startDate"
                                        >
                                            Start Date{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="startDate"
                                                type="date"
                                                name="startDate"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="endDate"
                                        >
                                            End Date{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="endDate"
                                                type="date"
                                                name="endDate"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:hidden flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                                <Link
                                    href="/admin/classes"
                                    className={buttonVariants({
                                        variant: "outline",
                                    })}
                                >
                                    Cancel
                                </Link>
                                <Button
                                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary hover:bg-[#165B48] text-white font-bold shadow-lg shadow-primary/20 transition flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    Create Class
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:col-span-1 space-y-6">
                    <div
                        className="flex  gap-4 bg-white dark:bg-surface-dark rounded-2xl p-6 border
                    border-gray-100 dark:border-gray-700 shadow-soft sticky
                    top-32"
                    >
                        <Link
                            href="/admin/classes"
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "flex-1",
                            )}
                        >
                            Cancel
                        </Link>
                        <Button
                            type="submit"
                            form="classCreationForm"
                            className="flex-1"
                        >
                            Create Class
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
