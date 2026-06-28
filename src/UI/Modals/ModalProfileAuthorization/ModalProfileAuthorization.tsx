import { FaBookOpen, FaUser } from 'react-icons/fa';

export function ModalProfileAuthorization() {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-black border border-gray-700 rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                        <FaBookOpen className="text-white text-xl" />
                        <span className="text-white font-semibold">Monochrome Ledger</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-600 bg-gray-900 flex items-center justify-center">
                        <FaUser className="text-gray-400 text-lg" />
                    </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-semibold text-white">Profile</h2>
                        <p className="text-sm text-gray-400 mt-2 border-l-2 border-gray-700 pl-3">
                            Your account information
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="block text-xs font-medium uppercase tracking-wider text-gray-400">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-gray-100 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-white focus:border-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-medium uppercase tracking-wider text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-gray-100 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-white focus:border-white"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            className="flex-1 px-4 py-2 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5 cursor-pointer"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            className="flex-1 px-4 py-2 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 hover:border-red-400 hover:text-red-300 cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}