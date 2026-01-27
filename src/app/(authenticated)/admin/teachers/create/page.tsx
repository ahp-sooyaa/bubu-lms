import { Breadcrumbs } from "@/components/breadcrumbs";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { createTeacher } from "@/actions/teacher";

export default function Page() {
    return (
        <>
            <div className="mb-8">
                <Breadcrumbs
                    items={[
                        { label: "Admin", href: "/admin" },
                        { label: "Teachers", href: "/admin/teachers" },
                        { label: "Create Teacher" },
                    ]}
                    background="light"
                />
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-700 shadow-soft relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                            Create New Teacher
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Configure the details for the new teacher below. All
                            fields marked with an asterisk (*) are required.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <form
                            action={createTeacher}
                            className="p-6 md:p-10"
                            id="teacherCreationForm"
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
                                            htmlFor="name"
                                        >
                                            Name{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="name"
                                        >
                                            Email{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Input
                                            id="email"
                                            placeholder="teacher@bubulms.com"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="password"
                                        >
                                            Password{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Input
                                            id="password"
                                            placeholder="********"
                                            type="password"
                                            name="password"
                                        />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="role"
                                        >
                                            Role{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Select
                                            id="role"
                                            name="role"
                                            defaultValue="teacher"
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="student">
                                                    Student
                                                </SelectItem>
                                                <SelectItem value="teacher">
                                                    Teacher
                                                </SelectItem>
                                                <SelectItem value="admin">
                                                    Admin
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="status"
                                        >
                                            Status{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Select
                                            id="status"
                                            name="status"
                                            defaultValue="active"
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="active">
                                                    Active
                                                </SelectItem>
                                                <SelectItem value="suspended">
                                                    Suspended
                                                </SelectItem>
                                                <SelectItem value="archived">
                                                    Archived
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:hidden flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                                <Link
                                    href="/admin/teachers"
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
                                    Create Teacher
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
                            href="/admin/teachers"
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "flex-1",
                            )}
                        >
                            Cancel
                        </Link>
                        <Button
                            type="submit"
                            form="teacherCreationForm"
                            className="flex-1"
                        >
                            Create Teacher
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
