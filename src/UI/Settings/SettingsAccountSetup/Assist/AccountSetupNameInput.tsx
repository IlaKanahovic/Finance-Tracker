

export function AccountSetupNameInput() {
    return (
        <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-gray-400 sm:hidden">Full name</label>
            <input
                type="text"
                placeholder="Evelyn Carter"
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white"
            />
            <label className="block text-xs text-gray-500">
                This name appears on receipts and statements.
            </label>
            <div className="pt-2">
                <button
                    type="button"
                    className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white"
                >
                    Edit full name
                </button>
            </div>
        </div>
    )
}