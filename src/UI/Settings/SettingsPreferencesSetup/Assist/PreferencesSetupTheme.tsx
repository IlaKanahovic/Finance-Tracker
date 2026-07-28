import { useTranslation } from "react-i18next"
import { setTargetTheme, targetTheme } from "../../../../store/settingsStore"


export function PreferencesSetupTheme() {
    const { t } = useTranslation()
    const theme = targetTheme()

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('theme')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${theme === 'Dark'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setTargetTheme('Dark')}
                >
                    {t('dark')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${theme === 'Light'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setTargetTheme('Light')}
                >
                    {t('light')}
                </button>
            </div>
        </div>
    )
}