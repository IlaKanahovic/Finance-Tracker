import { useTranslation } from "react-i18next"
import { setWeekStart, weekStart } from "../../../../store/settingsStore"


export function PreferencesSetupWeekStart() {
    const { t } = useTranslation()
    const dayStartWeek = weekStart()

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400"> {t('week_start')} </span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${dayStartWeek === 'Monday'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                    }`}
                    onClick={() => setWeekStart('Monday')}
                >
                    {t('monday')}
                </button>
                <button className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${dayStartWeek === 'Sunday'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                    }`}
                    onClick={() => setWeekStart('Sunday')}
                >
                    {t('sunday')}
                </button>
            </div>
        </div>
    )
}