import { useEffect, useRef, memo } from "react";


interface FilterInputSearchProps {
    onChange: (text: string) => void,
};

function FilterInputSearch({ onChange }: FilterInputSearchProps) {
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <input
            className="border p-2"
            type="text"
            ref={searchInputRef}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default memo(FilterInputSearch);
