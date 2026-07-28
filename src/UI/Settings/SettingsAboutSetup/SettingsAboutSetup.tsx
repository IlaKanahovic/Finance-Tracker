import { useTranslation } from 'react-i18next'
import { FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa'
import { MdPrivacyTip, MdDescription } from 'react-icons/md'

export function SettingsAboutSetup() {
    const { t } = useTranslation()

    return (
        <div className="max-w-2xl mx-auto text-(--text-main) mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-(--text-main)">{t('about')}</h1>
                <p className="text-sm text-(--text-secondary) mt-1 border-l-2 border-(--border-header-buttons) pl-3">
                    {t('application_info')}
                </p>
            </div>
            <div className="space-y-6">
                <div>
                    <div className="mb-4 pb-1 border-b border-(--border-header-buttons)">
                        <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('version')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-(--text-main)">v1.0.0</span>
                    </div>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-(--border-header-buttons)">
                        <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('links')}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a
                            href="https://github.com/IlaKanahovic/Finance-Tracker.git"
                            className="inline-flex items-center gap-2 text-sm text-(--text-secondary) transition-all duration-300 cursor-pointer hover:text-(--text-main)"
                        >
                            <FaGithub className="w-4 h-4" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://t.me/ilcloud_dff"
                            className="inline-flex items-center gap-2 text-sm text-(--text-secondary) transition-all duration-300 cursor-pointer hover:text-(--text-main)"
                        >
                            <FaTelegram className="w-4 h-4" />
                            <span>Telegram</span>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-(--border-header-buttons)">
                        <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('support')}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-(--text-secondary) transition-all duration-300 cursor-pointer hover:text-(--text-main)"
                        >
                            <FaEnvelope className="w-4 h-4" />
                            <span>support@monochrome.com</span>
                        </a>
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-(--text-secondary) transition-all duration-300 cursor-pointer hover:text-(--text-main)"
                        >
                            <FaTelegram className="w-4 h-4" />
                            <span>@monochrome_support</span>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="mb-4 pb-1 border-b border-(--border-header-buttons)">
                        <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('legal')}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-(--text-secondary) transition-all duration-300 cursor-pointer hover:text-(--text-main)"
                        >
                            <MdPrivacyTip className="w-4 h-4" />
                            <span>{t('privacy_policy')}</span>
                        </a>
                        <a
                            href="#не-моя-задача"
                            className="inline-flex items-center gap-2 text-sm text-(--text-secondary) transition-all duration-300 cursor-pointer hover:text-(--text-main)"
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