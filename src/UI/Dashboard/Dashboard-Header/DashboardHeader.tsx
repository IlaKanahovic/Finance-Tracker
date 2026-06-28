import { FaBookOpen } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

export function DashboardHeader() {
    const navigate = useNavigate()
    const btnHeader = "p-1.5 ml-2 border border-mist-900 duration-200 hover:border-white cursor-pointer"
    const { token } = useAuthStore()

    return (
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <a onClick={() => navigate('/')} className="flex items-center text-white font-semibold text-lg cursor-pointer">
                <FaBookOpen className="m-2" /> Monochrome Ledger
            </a>
            <h1 className="text-xl font-medium text-white order-1 sm:order-0">Dashboard</h1>
            <div className="flex items-center">
                <button
                    className={btnHeader}
                >
                    <FaMoon />
                </button>
                <button
                    onClick={() => {
                        {token ? navigate('profile') : navigate('signIn')}
                    }}
                    className={btnHeader}
                >
                    <MdAccountCircle />
                </button>
                <button
                    onClick={() => {
                        {token ? navigate('settings') : navigate('signIn')}
                    }}
                    className={btnHeader}
                >
                    <IoSettingsOutline />
                </button>
            </div>
        </header>
    )
}