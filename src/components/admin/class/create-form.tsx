"use client";

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
import { TeacherSelect } from "@/components/admin/teacher/teacher-select";
import { useActionState, useEffect } from "react";
import * as React from "react";
import { toast } from "sonner";
import { userTable } from "@/db/schema";

type User = typeof userTable.$inferSelect;

interface CreateFormProps {
    teachers: User[];
}

interface FormState {
    errors?: {
        title?: string[];
        description?: string[];
        teacherId?: string[];
        capacity?: string[];
        type?: string[];
        location?: string[];
        platform?: string[];
        startTime?: string[];
        durationMinutes?: string[];
        startDate?: string[];
        endDate?: string[];
        status?: string[];
        fee?: string[];
    };
    message?: string;
}

const initialState: FormState = {
    errors: {},
    message: "",
};

export function CreateForm({ teachers }: CreateFormProps) {
    const [state, formAction] = useActionState(createClass, initialState);
    const [classType, setClassType] = React.useState<"in-person" | "online">(
        "in-person",
    );

    useEffect(() => {
        if (state?.message) {
            if (state.errors && Object.keys(state.errors).length > 0) {
                toast.error(state.message);
            }
        }
    }, [state]);

    return (
        <form
            action={formAction}
            className="p-6 md:p-10"
            id="classCreationForm"
        >
            {/* Basic Information Section */}
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
                            Class Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="className"
                            placeholder="e.g. Advanced HSK Preparation"
                            type="text"
                            name="title"
                            aria-invalid={
                                state?.errors?.title ? "true" : "false"
                            }
                        />
                        {state?.errors?.title && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.title[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="classType"
                        >
                            Class Type <span className="text-red-500">*</span>
                        </label>
                        <Select
                            id="classType"
                            name="type"
                            value={classType}
                            onValueChange={(value) =>
                                setClassType(value as "in-person" | "online")
                            }
                        >
                            <SelectTrigger
                                className="w-full"
                                aria-invalid={
                                    state?.errors?.type ? "true" : "false"
                                }
                            >
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
                        {state?.errors?.type && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.type[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="classStatus"
                        >
                            Class Status <span className="text-red-500">*</span>
                        </label>
                        <Select
                            id="classStatus"
                            name="status"
                            defaultValue="upcoming"
                        >
                            <SelectTrigger
                                className="w-full"
                                aria-invalid={
                                    state?.errors?.status ? "true" : "false"
                                }
                            >
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="upcoming">
                                    Upcoming
                                </SelectItem>
                                <SelectItem value="ongoing">Ongoing</SelectItem>
                                <SelectItem value="completed">
                                    Completed
                                </SelectItem>
                                <SelectItem value="canceled">
                                    Canceled
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        {state?.errors?.status && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.status[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="fee"
                        >
                            Fee <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="fee"
                            placeholder="e.g. 100"
                            type="number"
                            name="fee"
                            aria-invalid={state?.errors?.fee ? "true" : "false"}
                        />
                        {state?.errors?.fee && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.fee[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="description"
                        >
                            Description <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Enter a brief overview of the class curriculum and objectives..."
                            rows={4}
                            aria-invalid={
                                state?.errors?.description ? "true" : "false"
                            }
                        />
                        {state?.errors?.description && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.description[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="location"
                        >
                            Location{" "}
                            {classType === "in-person" && (
                                <span className="text-red-500">*</span>
                            )}
                        </label>
                        <Input
                            id="location"
                            placeholder="e.g. 123 Main St"
                            type="text"
                            name="location"
                            disabled={classType === "online"}
                            aria-invalid={
                                state?.errors?.location ? "true" : "false"
                            }
                        />
                        {state?.errors?.location && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.location[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="platform"
                        >
                            Platform{" "}
                            {classType === "online" && (
                                <span className="text-red-500">*</span>
                            )}
                        </label>
                        <Input
                            id="platform"
                            placeholder="e.g. Zoom"
                            type="text"
                            name="platform"
                            disabled={classType === "in-person"}
                            aria-invalid={
                                state?.errors?.platform ? "true" : "false"
                            }
                        />
                        {state?.errors?.platform && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.platform[0]}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full mb-10"></div>

            {/* Staffing & Capacity Section */}
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
                            Instructor <span className="text-red-500">*</span>
                        </label>
                        <TeacherSelect
                            teachers={teachers}
                            hasError={!!state?.errors?.teacherId}
                        />
                        {state?.errors?.teacherId && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.teacherId[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="maxStudents"
                        >
                            Max Students <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <Input
                                id="maxStudents"
                                min="1"
                                placeholder="e.g. 20"
                                type="number"
                                name="capacity"
                                aria-invalid={
                                    state?.errors?.capacity ? "true" : "false"
                                }
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                                students
                            </span>
                        </div>
                        {state?.errors?.capacity && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.capacity[0]}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full mb-10"></div>

            {/* Schedule & Timeline Section */}
            <div className="mb-10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">
                        3
                    </span>
                    Schedule &amp; Timeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* <div className="col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            Weekly Schedule{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "mon",
                                "tue",
                                "wed",
                                "thu",
                                "fri",
                                "sat",
                                "sun",
                            ].map((day) => (
                                <div key={day}>
                                    <Input
                                        className="hidden day-checkbox"
                                        id={day}
                                        type="checkbox"
                                    />
                                    <label
                                        className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold cursor-pointer hover:border-primary transition select-none"
                                        htmlFor={day}
                                    >
                                        {day
                                            .slice(0, 2)
                                            .charAt(0)
                                            .toUpperCase() + day.slice(1, 2)}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="startTime"
                        >
                            Start Time <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="startTime"
                            type="time"
                            name="startTime"
                            aria-invalid={
                                state?.errors?.startTime ? "true" : "false"
                            }
                        />
                        {state?.errors?.startTime && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.startTime[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="duration"
                        >
                            Duration <span className="text-red-500">*</span>
                        </label>
                        <Select
                            id="duration"
                            name="durationMinutes"
                            defaultValue="60"
                        >
                            <SelectTrigger
                                className="w-full"
                                aria-invalid={
                                    state?.errors?.durationMinutes
                                        ? "true"
                                        : "false"
                                }
                            >
                                <SelectValue placeholder="Class duration..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="45">45 minutes</SelectItem>
                                <SelectItem value="60">60 minutes</SelectItem>
                                <SelectItem value="90">90 minutes</SelectItem>
                                <SelectItem value="120">2 hours</SelectItem>
                            </SelectContent>
                        </Select>
                        {state?.errors?.durationMinutes && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.durationMinutes[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="startDate"
                        >
                            Start Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <Input
                                id="startDate"
                                type="date"
                                name="startDate"
                                aria-invalid={
                                    state?.errors?.startDate ? "true" : "false"
                                }
                            />
                        </div>
                        {state?.errors?.startDate && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.startDate[0]}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label
                            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="endDate"
                        >
                            End Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <Input
                                id="endDate"
                                type="date"
                                name="endDate"
                                aria-invalid={
                                    state?.errors?.endDate ? "true" : "false"
                                }
                            />
                        </div>
                        {state?.errors?.endDate && (
                            <p className="text-red-500 text-xs mt-1">
                                {state.errors.endDate[0]}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}
