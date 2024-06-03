import { useCallback } from "react";
import ButtonPrimary from "./ButtonPrimary";
import FilterInputSearch from "./FilterSearch";
import { ArrowDown01, ArrowDownAZ, Filter as FilterIcon } from "lucide-react";

interface FilterProps {};

function Filter({}: FilterProps) {
    const iconsStyle = {
        display: 'inline-block',
        verticalAlign: 'middle',
    };

    const handleSearch = useCallback((text: string) => {
        console.log(text);
    }, []);

    return (
        <section className="mb-8 py-4 border-t border-b">
            <div className="flex justify-between items-center">
                <div><FilterIcon style={iconsStyle} className="text-teal-700" /> Filter</div>
                <div>
                    <FilterInputSearch onChange={handleSearch} />
                    <ButtonPrimary
                        onClick={() => alert()}
                        rounded={false}
                        display="inline-block"
                        border={true}
                    >Search</ButtonPrimary>
                </div>
                <div className="">
                    <span className="mr-2">Sort</span>
                    <button className="border p-2">
                        <ArrowDown01 style={iconsStyle} className="text-teal-700" />
                    </button>
                    <button className="border p-2 -ml-[1px]">
                        <ArrowDownAZ style={iconsStyle} className="text-teal-700" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Filter;
