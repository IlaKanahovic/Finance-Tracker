import { FaBookOpen, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Profile() {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <div className="fixed inset-0 bg-(--bg)/80 flex items-center justify-center z-50 p-4">
            <div className="bg-(--bg) border border-(--border-header-buttons) rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-(--border-header-buttons)">
                    <div className="flex items-center gap-2">
                        <FaBookOpen className="text-(--text-main) text-xl" />
                        <span className="text-(--text-main) font-semibold">Monochrome Ledger</span>
                    </div>
                    <a className="w-10 h-10 rounded-full border border-(--border-header-buttons) bg-(--bg) flex items-center justify-center">
                        <FaUser className="text-(--text-secondary) text-lg" />
                    </a>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-semibold text-(--text-main)">{t('profile')}</h2>
                        <p className="text-sm text-(--text-secondary) mt-2 border-l-2 border-(--border-header-buttons) pl-3">
                            {t('your_account_information')}
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="block text-xs font-medium uppercase tracking-wider text-(--text-secondary)">
                                {t('username')}
                            </label>
                            <input
                                type="text"
                                className="w-full bg-(--bg) border border-(--border-header-buttons) rounded-md px-3 py-2.5 text-(--text-main) focus:outline-none focus:ring-0 transition-all duration-300 hover:border-(--border-header-buttons-hover) focus:border-(--border-header-buttons-hover)"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-medium uppercase tracking-wider text-(--text-secondary)">
                                {t('email')}
                            </label>
                            <input
                                type="email"
                                className="w-full bg-(--bg) border border-(--border-header-buttons) rounded-md px-3 py-2.5 text-(--text-main) focus:outline-none focus:ring-0 transition-all duration-300 hover:border-(--border-header-buttons-hover) focus:border-(--border-header-buttons-hover)"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            onClick={() => navigate(-1)}
                            type="button"
                            className="flex-1 px-4 py-2 text-sm border border-(--border-header-buttons) rounded-md text-(--text-main) transition-all duration-300 hover:border-(--border-header-buttons-hover) hover:text-(--text-main) hover:bg-(--text-expenses-item-hover) cursor-pointer"
                        >
                            {t('save_changes')}
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            type="button"
                            className="flex-1 px-4 py-2 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 hover:border-red-400 hover:text-red-300 cursor-pointer"
                        >
                            {t('cancel')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}