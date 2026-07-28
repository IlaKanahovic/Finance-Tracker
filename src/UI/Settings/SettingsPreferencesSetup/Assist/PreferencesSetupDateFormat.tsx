import { useTranslation } from "react-i18next"
import { formatDate, setFormatDate } from "../../../../store/settingsStore"


export function PreferencesSetupDateFormat() {
    const { t } = useTranslation()
    const format = formatDate()

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('date_format')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${format === 'DD.MM.YYYY'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => {
                        setFormatDate('DD.MM.YYYY')
                    }}
                >
                    {t('date_format_DD.MM.YYYY')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${format === 'MM/DD/YYYY'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => {
                        setFormatDate('MM/DD/YYYY')
                    }}
                >
                    {t('date_format_MM/DD/YYYY')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${format === 'YYYY-MM-DD'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
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