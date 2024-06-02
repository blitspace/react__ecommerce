import { useContext } from "react";
import { AppContext } from "./context/AppContext";

interface ProductListProps {};


function ProductList({}: ProductListProps) {
    const store = useContext(AppContext)
    return(<>
          {store?.theme?.darkMode ? "Dark Mode" : "Light Mode"}
    </>);
}

export default ProductList;
