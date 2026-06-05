

export function AccountSetupEmailInput() {
    return (
        <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-gray-400 sm:hidden">Email</label>
            <input
                type="email"
                placeholder="@email.com"
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white"
            />
            <label className="block text-xs text-gray-500">
                Main email address.
            </label>
            <div className="flex flex-wrap gap-3 pt-2">
                <button
                    type="button"
                    className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white"
                >
                    Edit email
                </button>
                <button
                    type="button"
                    className="px-4 py-1.5 text-sm text-blue-400 transition-all duration-300 cursor-pointer hover:text-white"
                >
                    Verify email
                </button>
            </div>
        </div>
    )
}