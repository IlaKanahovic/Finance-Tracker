

export function SettingsSecuritySetup() {
    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Security</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    Keep your account secure. Manage password and multi-factor authentication.
                </p>
            </div>
            <div className="space-y-8">
                <div>
                    <div className="mb-2 pb-1 border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Change password</span>
                    </div>
                    <div className="space-y-4 max-w-md">
                        <input
                            type="password"
                            placeholder="Current password"
                            className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white"
                        />
                        <input
                            type="password"
                            placeholder="New password"
                            className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white"
                        />
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white"
                        />
                        <div className="flex gap-4 pt-2">
                            <button
                                type="button"
                                className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white"
                            >
                                Update password
                            </button>
                            <button
                                type="button"
                                className="px-4 py-1.5 text-sm text-blue-400 transition-all duration-300 cursor-pointer hover:text-white"
                            >
                                Reset password (send link)
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-2 pb-1  border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Two-factor auth (2FA)</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between max-w-md">
                            <div>
                                <span className="text-sm text-gray-300">Status:</span>
                                <span className="text-sm text-green-400 ml-2">Enabled</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300 peer cursor-pointer after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 peer-checked:after:translate-x-5"></div>
                            </label>
                        </div>
                        <p className="text-xs text-gray-500">
                            2FA adds an extra layer of protection. Use authenticator apps for best security.
                        </p>
                        <div className="pt-2">
                            <button
                                type="button"
                                className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white"
                            >
                                Configure 2FA (QR code)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}