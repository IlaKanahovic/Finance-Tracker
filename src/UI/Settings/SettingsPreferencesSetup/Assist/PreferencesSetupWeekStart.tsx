import { useTranslation } from "react-i18next"
import { setWeekStart, weekStart } from "../../../../store/settingsStore"


export function PreferencesSetupWeekStart() {
    const { t } = useTranslation()
    const dayStartWeek = weekStart()

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)"> {t('week_start')} </span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${dayStartWeek === 'Monday'
                        ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                        : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                    }`}
                    onClick={() => setWeekStart('Monday')}
                >
                    {t('monday')}
                </button>
                <button className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${dayStartWeek === 'Sunday'
                        ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                        : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                    }`}
                    onClick={() => setWeekStart('Sunday')}
                >
                    {t('sunday')}
                </button>
            </div>
        </div>
    )
}