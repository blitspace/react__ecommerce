import { createContext } from "react";

interface FilterContext {
    filter: string,
    setFilter: (text: string) => void,
}

export const FilterContext = createContext<FilterContext | undefined>(undefined);
