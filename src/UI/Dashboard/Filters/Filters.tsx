import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { ButtonFiltersDays } from "./ButtonFiltersDays";
import { ButtonFiltersRight } from "./ButtonFiltersRight";

export function Filters() {
    return (
        <div className="space-y-4 mt-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                    <div className="flex border border-[#2a2a2a]">
                        <ButtonFiltersDays name={"Today"} />
                        <ButtonFiltersDays name={"7d"} />
                        <ButtonFiltersDays name={"30d"} />
                        <ButtonFiltersDays name={"Custom"} />
                    </div>

                    <div className="flex items-center border border-[#2a2a2a]">
                        <button className="px-3 py-1.5 text-sm font-medium duration-300 border 
                        border-(--bg) text-gray-700 hover:text-white hover:border-gray-100
                        cursor-pointer">
                            Category
                        </button>
                        <button className="px-3 flex items-center py-1.5 text-sm font-medium 
                        duration-300 border border-(--bg) text-gray-700 hover:text-white
                        hover:border-gray-100 cursor-pointer">
                            <span>All</span>
                            <IoIosArrowDown />
                        </button>
                    </div>

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
                        />
                        <FaSearch className="absolute left-2.5 w-4 h-4 text-gray-400" />
                    </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <ButtonFiltersRight name={"Export"} />
                    <ButtonFiltersRight name={"New Transaction"} />
                </div>
            </div>
        </div>
    )
}