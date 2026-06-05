import { FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa'
import { MdPrivacyTip, MdDescription } from 'react-icons/md'

export function SettingsAboutSetup() {
    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">About</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    Application information and resources.
                </p>
            </div>
            <div className="space-y-6">
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Version</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-300">v1.0.0</span>
                    </div>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Repository</span>
                    </div>
                    <a
                        href="https://github.com/IlaKanahovic/Finance-Tracker.git"
                        className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
                    >
                        <FaGithub className="w-4 h-4" />
                        <span>GitHub</span>
                    </a>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Support</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
                        >
                            <FaEnvelope className="w-4 h-4" />
                            <span>support@monochrome.com</span>
                        </a>
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
                        >
                            <FaTelegram className="w-4 h-4" />
                            <span>@monochrome_support</span>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Legal</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
                        >
                            <MdPrivacyTip className="w-4 h-4" />
                            <span>Privacy Policy</span>
                        </a>
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
                        >
                            <MdDescription className="w-4 h-4" />
                            <span>Terms of Service</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}