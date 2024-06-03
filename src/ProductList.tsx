import { Fragment } from "react";

import TProductItem from "./types/TProductItem";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import ProductsQuery from "./queries/Products";


function ProductList() {
    const q = ProductsQuery();

    if (q.isFetching) {
        return (<h2>Loading...</h2>);
    }

    if (q.isSuccess) {
        console.log(q.data);
    }

    return (<>
        <Filter />

        <section>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-12">
                {q?.data?.map((i: TProductItem) => (
                    <Fragment key={i.id}>
                        <ProductItem {...i} />
                    </Fragment>
                ))}
            </div>
        </section>
    </>);
}

export default ProductList;
