import { useTranslation } from "react-i18next"
import { setTransactionsOnPage, transactionsOnPage } from "../../../../store/settingsStore"


export function PreferencesSetupTransactionOnPage() {
    const { t } = useTranslation()
    const onPage = transactionsOnPage()

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('per_page')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${onPage === 'All'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                    }`}
                    onClick={() => setTransactionsOnPage('All')}
                >
                    All
                </button>
                <button className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${onPage === '10'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                    }`}
                    onClick={() => setTransactionsOnPage('10')}
                >
                    10
                </button>
                <button className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${onPage === '25'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                    }`}
                    onClick={() => setTransactionsOnPage('25')}
                >
                    25
                </button>
                <button className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                        hover:border-white hover:text-white ${onPage === '50'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                    }`}
                    onClick={() => setTransactionsOnPage('50')}
                >
                    50
                </button>
            </div>
        </div>
    )
}