import { Fragment, useContext, useMemo } from "react";

import TProductItem from "./types/TProductItem";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import ProductsQuery from "./queries/Products";
import { AppContext } from "./context/AppContext";


function ProductList() {
    const q = ProductsQuery();
    const context = useContext(AppContext);
    const productList = useMemo(() => q.data, [q.data]);

    if (q.isFetching) {
        return (<h2>Loading products...</h2>);
    }

    // if (q.isSuccess) {
    //     console.log(q.data);
    // }

    // if (q.isFetched) {
    //     console.log(q.data);
    // }

    return (<>
        <Filter />

        <section className="grid grid-cols-12">
            <div className="col-span-3 hidden md:block">
                Filter
            </div>
            <div className="col-span-12 md:col-span-9">
                <div className="grid
                        grid-cols-2
                        xl:grid-cols-4
                        3xl:grid-cols-6
                        gap-6"
                >
                    {productList?.map((i: TProductItem) => (
                        <Fragment key={i.id}>
                            <ProductItem {...i} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    </>);
}

export default ProductList;
