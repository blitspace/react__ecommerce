import ButtonPrimary from "./ButtonPrimary";
import TProductItem from "./types/TProductItem";
import { ShoppingCart } from "lucide-react";


function ProductItem({ image, title, price }: TProductItem) {
    return (
        <div className="group flex flex-col">
            <div>
                <img
                    src={image}
                    alt=""
                    className="w-full object-cover aspect-square object-top"
                />
            </div>

            <div className="mt-3 flex flex-col justify-between text-sm grow">
                <div>
                    <h3 className="text-gray-900 x--group-hover:underline x--group-hover:underline-offset-4">{title}</h3>
                </div>

                <p className="text-gray-900 font-bold">${price}</p>
            </div>

            <div className="mt-4">
                <ButtonPrimary className="w-full flex justify-center items-center" buttonType="primary">
                    <><ShoppingCart className="mr-2" /> Add to Cart</>
                </ButtonPrimary>
            </div>
        </div>
    );
}

export default ProductItem;
