import { FaBookOpen } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";
import { useTranslation } from "react-i18next";
import { setTargetTheme, targetTheme } from "../../../store/settingsStore";

export function DashboardHeader() {
    const navigate = useNavigate()
    const btnHeader = "p-1.5 ml-2 border border-(--border-header-buttons) duration-200 hover:border-(--border-header-buttons-hover) cursor-pointer"
    const { token } = useAuthStore()
    const { t } = useTranslation()
    const theme = targetTheme()

    const selectIconTheme = () => {
        if (theme === 'Dark') return <FaMoon />
        if (theme === 'Light') return <FiSun />
    }

    return (
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <a onClick={() => navigate('/')} className="flex items-center text-(--text-main) font-semibold text-lg cursor-pointer">
                <FaBookOpen className="m-2" /> Monochrome Ledger
            </a>
            <h1 className="text-xl font-medium  text-(--text-main) order-1 sm:order-0">{t('dashboard')}</h1>
            <div className="flex items-center">
                <button
                    onClick={() => {
                        if (theme === 'Dark') {
                            setTargetTheme('Light')
                        } else {
                            setTargetTheme('Dark')
                        }
                    }}
                    className={btnHeader}
                >
                    {selectIconTheme()}
                </button>
                <button
                    onClick={() => {
                        { token ? navigate('profile') : navigate('signIn') }
                    }}
                    className={btnHeader}
                >
                    <MdAccountCircle />
                </button>
                <button
                    onClick={() => {
                        { token ? navigate('settings') : navigate('signIn') }
                    }}
                    className={btnHeader}
                >
                    <IoSettingsOutline />
                </button>
            </div>
        </header>
    )
}