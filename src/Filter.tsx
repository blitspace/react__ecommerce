import { useCallback } from "react";
import ButtonPrimary from "./ButtonPrimary";
import FilterInputSearch from "./FilterSearch";

interface FilterProps {};

function Filter({}: FilterProps) {

    const handleSearch = useCallback((text: string) => {
        console.log(text);
    }, []);

    return (
        <section className="mb-8">
            <div className="flex justify-between items-center">
                <div>Filter</div>
                <div>
                    <FilterInputSearch onChange={handleSearch} />
                    <ButtonPrimary
                        onClick={() => alert()}
                    >Search</ButtonPrimary>
                </div>
                <div>Sort</div>
            </div>
        </section>
    );
}

export default Filter;
