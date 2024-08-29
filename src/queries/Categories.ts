import { useQuery } from "@tanstack/react-query";

import Settings from "../settings";
import TCategoryItem from "../types/TCategoryItem";


function CategoriesQuery() {
    return useQuery<TCategoryItem[]>({
        queryKey: ['categories'],
        queryFn: async () => {
            console.log('%cFetching categories', 'padding: 4px 12px; background-color: orange');

            const response = await fetch(Settings.categories_source);
            const data = await response.json();

            return data;
        }
    });
}

export default CategoriesQuery;
