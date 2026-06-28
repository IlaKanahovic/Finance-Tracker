import { useNavigate } from "react-router-dom"
import { logout } from "../../../store/authStore"

export function SettingsFooterSetup() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        logout()
        navigate(-1)
    }

    return (
        <div className="max-w-2xl mx-auto mt-2 pt-2 border-gray-800">
            <div className="flex flex-wrap justify-between gap-3">
                <button onClick={() => navigate(-1)} className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                    Go back
                </button>
                <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                    Reset to default
                </button>
                <button onClick={() => {handleSubmit()}} className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                    Sign out
                </button>
                <button className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                    Delete account
                </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">* Deleting your account requires double confirmation and cannot be undone.</p>
        </div>
    )
}