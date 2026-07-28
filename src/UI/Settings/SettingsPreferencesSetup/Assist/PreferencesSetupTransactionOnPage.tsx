import { useTranslation } from "react-i18next"
import { setTransactionsOnPage, transactionsOnPage } from "../../../../store/settingsStore"


export function PreferencesSetupTransactionOnPage() {
    const { t } = useTranslation()
    const onPage = transactionsOnPage()

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('per_page')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${onPage === 'All'
                        ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                        : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                    }`}
                    onClick={() => setTransactionsOnPage('All')}
                >
                    All
                </button>
                <button className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${onPage === '10'
                        ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                        : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                    }`}
                    onClick={() => setTransactionsOnPage('10')}
                >
                    10
                </button>
                <button className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${onPage === '25'
                        ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                        : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                    }`}
                    onClick={() => setTransactionsOnPage('25')}
                >
                    25
                </button>
                <button className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                        hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${onPage === '50'
                        ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                        : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                    }`}
                    onClick={() => setTransactionsOnPage('50')}
                >
                    50
                </button>
            </div>
        </div>
    )
}