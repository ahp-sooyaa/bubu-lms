"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "lucide-react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const initialQuery = searchParams.get("query")?.toString() || "";
    const [value, setValue] = useState(initialQuery);

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <InputGroup className="bg-white">
            <InputGroupInput
                value={value}
                onChange={(e) => {
                    const v = e.target.value;
                    setValue(v);
                    handleSearch(v);
                }}
                placeholder={placeholder}
            />
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
        </InputGroup>
    );
}
