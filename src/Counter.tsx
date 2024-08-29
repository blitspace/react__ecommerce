import ProductsQuery from "./queries/Products";

function Counter() {
    const q = ProductsQuery();

    return (
        <section>
            {q.isSuccess && (<>
                <div>{q?.data?.length} Items Found</div>
            </>)}
        </section>
    );
}

export default Counter;
