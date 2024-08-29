import Button from "./Button";
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
        <div className="group flex flex-col">
            <div>
                <img
                    src={productImage}
                    alt=""
                    className="w-full object-cover aspect-square object-top"
                />
            </div>

            <div className="mt-3 flex flex-col justify-between text-sm grow">
                <div>
                    <h3 className="text-gray-900 x--group-hover:underline x--group-hover:underline-offset-4">{title}</h3>
                </div>

                <p className="text-gray-900 font-bold">{productPrice}</p>
            </div>

            <div className="mt-4">
                <Button className="w-full flex justify-center items-center" buttonType="primary">
                    <><ShoppingCart className="mr-2" /> Add to Cart</>
                </Button>
            </div>
        </div>
    );
}

export default ProductItem;
