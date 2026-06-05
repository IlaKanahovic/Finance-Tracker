import { FaBookOpen } from "react-icons/fa";

export function SettingsHeader() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 w-full sm:w-auto">
                <a href="#" className="flex items-center text-white font-semibold text-lg w-fit">
                    <FaBookOpen className="m-2" />
                    <span>Monochrome Ledger</span>
                </a>
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-white">Profile & Preferences</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        <span>Settings</span>
                        <span>/</span>
                        <span>Profile & Preferences</span>
                    </div>
                </div>
            </div>
            <div className="p-5 rounded-full border border-gray-600 cursor-pointer hover:border-white transition-all duration-300"></div>
        </header>
    )
}
