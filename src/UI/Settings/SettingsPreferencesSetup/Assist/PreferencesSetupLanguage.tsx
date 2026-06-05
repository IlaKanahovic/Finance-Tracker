

export function PreferencesSetupLanguage() {
    return (
        <div>
            <div className="mb-3 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Language</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">English</button>
                <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">Russian</button>
            </div>
            <p className="text-xs text-gray-500 mt-2">* The Russian translation is not available yet</p>
        </div>
    )
}