
export function DataSetupExport() {
    return (
        <div>
            <div className="mb-4 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Export</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                    CSV
                </button>
                <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                    Excel
                </button>
                <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                    JSON
                </button>
            </div>
        </div>
    )
}