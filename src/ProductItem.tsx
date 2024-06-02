import TProductItem from "./types/TProductItem";


function ProductItem({ image, title, description, price }: TProductItem) {
    return (
        <a href="#" className="group block">
            <img
                src={image}
                alt=""
                className="w-full object-cover aspect-square object-top"
            />

            <div className="mt-3 flex justify-between text-sm">
                <div>
                    <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">{title}</h3>

                    <p
                        className="mt-1.5 text-pretty text-xs text-gray-500"
                        aria-description={description}
                    >
                        {description
                            .split(' ')
                            .slice(0, 20)
                            .join(' ')
                        }...
                    </p>
                </div>

                <p className="text-gray-900">${price}</p>
            </div>
        </a>
    );
}

export default ProductItem;
