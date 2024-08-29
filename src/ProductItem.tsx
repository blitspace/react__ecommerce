import Button from "./Button";
import Quantity from "./Quantity";
import TProductItem from "./types/TProductItem";
import { ShoppingCart } from "lucide-react";

const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function ProductItem({ category, images, title, price }: TProductItem) {
    const productPrice = usd.format(price);
    const productImage = images?.[0]
            .replace('["', '')
            .replace('"]', '');

    return (
        <div className="group flex flex-col rounded-lg border border-gray-200 overflow-hidden">
            <div>
                <img
                    src={productImage}
                    alt=""
                    className="w-full object-cover aspect-square object-top"
                />
            </div>

            <div className="px-2 pt-1 flex flex-col h-full">
                <div className="mt-3 flex flex-col justify-between flex-grow">
                    <div className="flex flex-row justify-between gap-2">
                        <h3 className="text-gray-900 x--group-hover:underline x--group-hover:underline-offset-4">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-900 font-bold">{productPrice}</p>
                </div>

                {/* <Quantity /> */}

                <div className="flex-grow content-end">
                    <div className="mt-4">
                        <Button className="w-auto sm:w-full flex justify-center items-center" buttonType="primary">
                            <><ShoppingCart className="mr-2" /><span className="hidden sm:inline-block"> Add to Cart</span></>
                        </Button>
                    </div>

                    <div className="mt-4">
                        <small className="text-gray-500">{category.name}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
