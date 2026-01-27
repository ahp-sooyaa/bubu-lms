"use client";

import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { userTable } from "@/db/schema";

type user = typeof userTable.$inferSelect;

interface TeacherSelectProps {
    teachers: user[];
    hasError?: boolean;
}

export function TeacherSelect({
    teachers,
    hasError = false,
}: TeacherSelectProps) {
    const [selectedId, setSelectedId] = useState("");

    const selectedTeacher = teachers.find((t) => t.id === Number(selectedId));

    return (
        <Select
            name="teacherId"
            value={selectedId}
            onValueChange={(value) => setSelectedId(value ?? "")}
        >
            <SelectTrigger
                className="w-full"
                aria-invalid={hasError ? "true" : "false"}
            >
                <SelectValue placeholder="Search for an instructor...">
                    {selectedTeacher?.name}
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                {teachers.length > 0 ? (
                    teachers.map((teacher) => (
                        <SelectItem value={teacher.id} key={teacher.id}>
                            {teacher.name}
                        </SelectItem>
                    ))
                ) : (
                    <SelectItem value="" disabled>
                        No instructors available
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
}
