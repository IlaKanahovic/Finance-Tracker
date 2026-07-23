import { useTranslation } from "react-i18next"
import { setTargetTheme, targetTheme } from "../../../../store/settingsStore"


export function PreferencesSetupTheme() {
    const { t } = useTranslation()
    const theme = targetTheme()

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('theme')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${theme === 'Dark'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setTargetTheme('Dark')}
                >
                    {t('dark')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${theme === 'Light'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setTargetTheme('Light')}
                >
                    {t('light')}
                </button>
            </div>
        </div>
    )
}