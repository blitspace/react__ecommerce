import ProductsQuery from "./queries/Products";

function Counter() {
    const q = ProductsQuery();

    return (
        <section>
            {q.isFetching && (<>
                Loading...
            </>)}

            {q.isSuccess && (<>
                <div>{q?.data?.length} Items Found</div>
            </>)}
        </section>
    );
}

export default Counter;
