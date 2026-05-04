import { FaBookOpen } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export function DashboardHeader() {
    const btnHeader = "p-1.5 ml-2 border border-mist-900 duration-200 hover:border-white"

    return (
        <header className="flex justify-between items-center">
            <a href="" className="flex items-center">
                <FaBookOpen className="m-2" /> Monochrome Ledger
            </a>
            <h1>Dashboard</h1>
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