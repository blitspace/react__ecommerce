interface TCategory {
    creationAt: string,
    id: number,
    image: string,
    name: string,
    updatedAt: string,
}

interface TProductItem {
    category: TCategory,
    description: string,
    id: number,
    images: string[],
    price: number
    rating: {
        rate: number,
        count: number,
    },
    title: string,
}

export default TProductItem;
