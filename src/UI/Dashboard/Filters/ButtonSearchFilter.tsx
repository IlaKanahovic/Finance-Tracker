import { FaSearch } from "react-icons/fa";
import { filterBySearch } from "../../../store/filterStore";

export function ButtonSearchFilter() {

    return (
        <div className="relative flex items-center w-full sm:w-66.25 lg:w-66.25">
            <input
                type="text"
                placeholder="Search description, merchant"
                className="w-full px-3 py-1.5 pl-8 text-sm duration-300 text-gray-700
                                    border border-[#2a2a2a] focus:outline-none focus:ring-1
                                    focus:ring-white focus:border-white hover:border-white 
                                    transition-colors placeholder:text-gray-700
                                    focus:placeholder:text-white focus:text-white
                                    hover:placeholder:text-white cursor-pointerА"
                onChange={(event) => filterBySearch(event.target.value)}
            />
            <FaSearch className="absolute left-2.5 w-4 h-4 text-gray-400" />
        </div>
    )
}