import CategoriesQuery from "./queries/Categories";

function CategoriesMenu() {
    const q = CategoriesQuery();
    const catMenus = CategoriesQuery();

    return (<>
        <nav>
            <ul className="flex flex-row gap-24 justify-between">
                {catMenus.data?.map((i) => (
                    <li key={i.id}>
                        <a href={i.image}>{i.name}</a>
                    </li>
                ))}
            </ul>
        </nav> 
    </>);
}

export default CategoriesMenu;
