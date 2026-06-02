import { FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import Select from "react-select";
import { currencyList } from "../../assets/static-files/categoryOptions";
import { customStylesForReactSelectForSettings } from "../../assets/static-files/customStylesForReactSelect";
import { setTargetCurrency } from "../../store/settingsStore";
import { FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa'
import { MdPrivacyTip, MdDescription } from 'react-icons/md'


type CurrencyOption = {
    value: string;
    label: string;
}

type GroupedOption = {
    label: string;
    options: CurrencyOption[];
}

export function SettingsMain() {
    return (
        <div >
            <SettingsHeader />
            <SettingsPreview />
            <hr className="mt-8 border border-gray-800" />
            <SettingsAccountSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsSecuritySetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsPreferencesSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsNotificationsSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsDataSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsAboutSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsFooterSetup />
        </div>
    )
}

export function SettingsHeader() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 w-full sm:w-auto">
                <a href="#" className="flex items-center text-white font-semibold text-lg w-fit">
                    <FaBookOpen className="m-2" />
                    <span>Monochrome Ledger</span>
                </a>
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-white">Profile & Preferences</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        <span>Settings</span>
                        <span>/</span>
                        <span>Profile & Preferences</span>
                    </div>
                </div>
            </div>
            <div className="p-5 rounded-full border border-gray-600 cursor-pointer hover:border-white transition-all duration-300"></div>
        </header>
    )
}

export function SettingsPreview() {
    return (
        <div className="mt-18">
            <h1 className="text-2xl">Profile & Preferences</h1>
            <p className="mt-4 text-xs text-gray-400">Manage your account identity, secure your profile, tune display density and text size for readability, control notification channels, and handle integrations and data exports. Controls are intentionally flat and rectangular to match the monochrome theme.</p>
        </div>
    )
}

export function SettingsAccountSetup() {
    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Account</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    Personal information used across Monochrome Ledger.
                </p>
            </div>
            <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6 mb-2 pb-1 border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Full name</span>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Email</span>
            </div>
            <form>
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 mb-6">
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
                </div>
            </form>
        </div>
    )
}

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

export function SettingsPreferencesSetup() {
    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Preferences</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    Customize your application experience.
                </p>
            </div>
            <div className="space-y-6">
                <div>
                    <div className="mb-3 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Primary currency</span>
                    </div>
                    <Select<CurrencyOption, false, GroupedOption>
                        options={currencyList}
                        styles={customStylesForReactSelectForSettings}
                        placeholder="Select currency..."
                        id="currency"
                        instanceId="currency-select"
                        required
                        onChange={(selectedOption) => {
                            if (selectedOption) {
                                setTargetCurrency(selectedOption.value)
                            }
                        }}
                    />
                </div>
                <div>
                    <div className="mb-3 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Theme</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">Dark</button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">Light</button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">System</button>
                    </div>
                </div>
                <div>
                    <div className="mb-3 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Date format</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">DD.MM.YYYY</button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">MM/DD/YYYY</button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">YYYY-MM-DD</button>
                    </div>
                </div>
                <div>
                    <div className="mb-3 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Week starts on</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">Monday</button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">Sunday</button>
                    </div>
                </div>
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
                <div>
                    <div className="mb-3 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Transactions per page</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">10</button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">25</button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">50</button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

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

export function SettingsDataSetup() {
    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Data</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    Manage your data, exports, and imports.
                </p>
            </div>
            <div className="space-y-8">
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
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Import</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                            CSV
                        </button>
                        <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                            JSON
                        </button>
                    </div>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Delete all transactions</span>
                    </div>
                    <button className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                        Delete all transactions
                    </button>
                    <p className="text-xs text-gray-500 mt-2">* This action cannot be undone. Confirmation required.</p>
                </div>
            </div>
        </div>
    )
}

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

export function SettingsFooterSetup() {
    const navigate = useNavigate()

    return (
        <div className="max-w-2xl mx-auto mt-2 pt-2 border-gray-800">
            <div className="flex flex-wrap justify-between gap-3">
                <button onClick={() => navigate(-1)} className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                    Go back
                </button>
                <button className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white">
                    Reset to default
                </button>
                <button className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                    Sign out
                </button>
                <button className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                    Delete account
                </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">* Deleting your account requires double confirmation and cannot be undone.</p>
        </div>
    )
}