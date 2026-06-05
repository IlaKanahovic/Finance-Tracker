

export function SettingsNotificationsSetup() {
    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Notifications</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    Manage how you receive alerts and updates.
                </p>
            </div>
            <div className="space-y-8">
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Email notifications</span>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-5 h-5 border border-gray-600 rounded-md bg-black transition-all duration-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 group-hover:border-white"></div>
                                <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Weekly report</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-5 h-5 border border-gray-600 rounded-md bg-black transition-all duration-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 group-hover:border-white"></div>
                                <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Budget exceeded</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-5 h-5 border border-gray-600 rounded-md bg-black transition-all duration-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 group-hover:border-white"></div>
                                <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">New transaction</span>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Push notifications (browser)</span>
                    </div>
                    <div className="flex items-center justify-between max-w-md">
                        <span className="text-sm text-gray-300">Enable push notifications</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300 peer cursor-pointer after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 peer-checked:after:translate-x-5"></div>
                        </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Receive real-time alerts in your browser.</p>
                </div>
            </div>
        </div>
    )
}