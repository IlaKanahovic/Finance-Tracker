import { useTranslation } from 'react-i18next'
import { FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa'
import { MdPrivacyTip, MdDescription } from 'react-icons/md'

export function SettingsAboutSetup() {
    const { t } = useTranslation()

    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">{t('about')}</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    {t('application_info')}
                </p>
            </div>
            <div className="space-y-6">
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('version')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-300">v1.0.0</span>
                    </div>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('links')}</span>
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
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('support')}</span>
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
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('legal')}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
                        >
                            <MdPrivacyTip className="w-4 h-4" />
                            <span>{t('privacy_policy')}</span>
                        </a>
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
                        >
                            <MdDescription className="w-4 h-4" />
                            <span>{t('terms_of_service')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}