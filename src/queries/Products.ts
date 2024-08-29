import { useQuery } from "@tanstack/react-query";

import Settings from "../settings";
import TProductItem from "../types/TProductItem";


function ProductsQuery() {
    return useQuery<TProductItem[]>({
        queryKey: ['products'],
        queryFn: async () => {
            console.log('%cFetching', 'padding: 4px 12px; background-color: orange');

            const response = await fetch(Settings.api_source + '?limit=10');
            const data = await response.json();

            return data;
        }
    });
}

export default ProductsQuery;
