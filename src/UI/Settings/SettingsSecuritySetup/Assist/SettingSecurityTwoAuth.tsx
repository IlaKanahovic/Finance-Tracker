
export function SettingSecurityTwoAuth() {
    return (
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
    )
}