import { useTranslation } from "react-i18next"
import { formatDate, setFormatDate } from "../../../../store/settingsStore"


export function PreferencesSetupDateFormat() {
    const { t } = useTranslation()
    const format = formatDate()

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('date_format')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${format === 'DD.MM.YYYY'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => {
                        setFormatDate('DD.MM.YYYY')
                    }}
                >
                    {t('date_format_DD.MM.YYYY')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${format === 'MM/DD/YYYY'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => {
                        setFormatDate('MM/DD/YYYY')
                    }}
                >
                    {t('date_format_MM/DD/YYYY')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${format === 'YYYY-MM-DD'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => {
                        setFormatDate('YYYY-MM-DD')
                    }}
                >
                    {t('date_format_YYYY-MM-DD')}
                </button>
            </div>
        </div>
    )
}