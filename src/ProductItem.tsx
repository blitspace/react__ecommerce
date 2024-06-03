import ButtonPrimary from "./ButtonPrimary";
import TProductItem from "./types/TProductItem";
import { ShoppingCart } from "lucide-react";


function ProductItem({ image, title, description, price }: TProductItem) {
    return (
        <div className="group flex flex-col">
            <div>
                <img
                    src={image}
                    alt=""
                    className="w-full object-cover aspect-square object-top"
                />
            </div>

            <div className="mt-3 flex justify-between text-sm grow">
                <div>
                    <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">{title}</h3>
                    {/* <p
                        className="mt-1.5 text-pretty text-xs text-gray-500"
                        aria-description={description}
                    >
                        {description
                            .split(' ')
                            .slice(0, 20)
                            .join(' ')
                        }...
                    </p> */}
                </div>

                <p className="text-gray-900 font-bold">${price}</p>
            </div>

            <div>
                <ButtonPrimary className="w-full flex">
                    <><ShoppingCart className="mr-1" /> Add to Cart</>
                </ButtonPrimary>
            </div>
        </div>
    );
}

export default ProductItem;
