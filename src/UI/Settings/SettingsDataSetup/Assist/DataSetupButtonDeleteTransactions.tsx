

export function DataSetupButtonDeleteTransactions() {
    return (
        <div>
            <div className="mb-4 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Delete all transactions</span>
            </div>
            <button className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                Delete all transactions
            </button>
            <p className="text-xs text-gray-500 mt-2">* This action cannot be undone. Confirmation required.</p>
        </div>
    )
}
