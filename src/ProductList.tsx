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

        <section>
            <div className="grid
                    grid-cols-2
                    md:grid-cols-4
                    2xl:grid-cols-6
                    gap-12"
            >
                {productList?.map((i: TProductItem) => (
                    <Fragment key={i.id}>
                        <ProductItem {...i} />
                    </Fragment>
                ))}
            </div>
        </section>
    </>);
}

export default ProductList;
