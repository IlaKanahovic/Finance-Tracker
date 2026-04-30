import { FaBookOpen } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { ButtonFiltersDays } from "./ButtonFiltersDays";

const btnHeader = "p-1.5 ml-2 border border-mist-900 duration-200 hover:border-white"

export function Dashboard() {
    return (
        <div>
            <Header />
            <div className="mt-14">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CardCurrentBalanceDashboard />
                    <CardAvailableDashboard />
                    <CardMonthlyChangeDashboard />
                </ul>
            </div>
            <Filters />
        </div>
    )
}

export function Header() {
    return (
        <header className="flex justify-between items-center">
            <a href="" className="flex items-center">
                <FaBookOpen className="m-2" /> Monochrome Ladger
            </a>
            <h1 className="">Dashboard</h1>
            <div>
                <button className={btnHeader}>
                    <IoIosNotifications />
                </button>
                <button className={btnHeader}>
                    <MdAccountCircle />
                </button>
            </div>
        </header>
    )
}

export function CardCurrentBalanceDashboard() {
    return (
        <li className="p-5 bg-[var(--card-bg)] rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">CURRENT BALANCE</p>
            <p className="text-2xl font-semibold">*PRICE*</p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">USD</p>
                <p className="text-[#A0A0A0] text-xs">*DATE UPDATE*</p>
            </div>
        </li>
    )
}
export function CardAvailableDashboard() {
    return (
        <li className="p-4 bg-[var(--card-bg)] rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">AVAILABLE</p>
            <p className="text-2xl font-semibold">*PRICE*</p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">After holds</p>
                <p className="text-[#A0A0A0] text-xs">Bank</p>
            </div>
        </li>
    )
}
export function CardMonthlyChangeDashboard() {
    return (
        <li className="p-4 bg-[var(--card-bg)] rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">MONTHLY CHANGE</p>
            <p className="text-2xl font-semibold">*PRICE*</p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">I his mounth vs last</p>
                <p className="text-[#A0A0A0] text-xs"> 4 transitions </p>
            </div>
        </li>
    )
}

export function Filters() {
    return (
        <div className="space-y-4 mt-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                    <div className="flex border border-[#2a2a2a]">
                        <ButtonFiltersDays name={"Today"}/>
                        <ButtonFiltersDays name={"7d"}/>
                        <ButtonFiltersDays name={"30d"}/>
                        <ButtonFiltersDays name={"Custom"}/>
                    </div>

                    <div className="flex items-center border border-[#2a2a2a]">
                        <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-800">
                            Category
                        </button>
                        <div className="w-px h-5 bg-[#2a2a2a]"></div>
                        <button className="px-3 py-1.5 flex items-center gap-1 text-gray-700 text-sm font-medium hover:bg-gray-800">
                            <span>All</span>
                            <IoIosArrowDown />
                        </button>
                    </div>

                    <div className="relative flex items-center w-full sm:w-[265px] lg:w-[265px]">
                        <input
                            type="text"
                            placeholder="Search description, merchant"
                            className="w-full px-3 py-1.5 pl-8 text-sm border border-[#2a2a2a] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                        />
                        <FaSearch className="absolute left-2.5 w-4 h-4 text-gray-400" />
                    </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                    <ButtonFiltersRight />
                    <ButtonFiltersRight />
                </div>
            </div>
        </div>
    )
}

export function ButtonFiltersRight() {
    return (
        <button className="px-4 py-1.5 text-sm font-medium border border-[#2a2a2a] hover:border-gray-50 text-gray-700 whitespace-nowrap">
            Export
        </button>
    )
}