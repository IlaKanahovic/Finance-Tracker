import { useTranslation } from "react-i18next"
import { useExportTransactions } from "../../../../BLL/transactions/useExportTransactions"
import { useTransactionsStore } from "../../../../store/transactionsStore"
import { useState } from "react"

export function DataSetupExport() {
    const { t } = useTranslation()
    const { transactions } = useTransactionsStore()
    const [selectedType, setSelectedType] = useState('')
    const exportTransactions = useExportTransactions(transactions, selectedType)

    return (
        <div>
            <div className="mb-4 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('export')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white"
                    onClick={() => {
                        setSelectedType('CSV')
                        if (!exportTransactions) {
                            return
                        }
                        exportTransactions()
                    }}
                >
                    CSV
                </button>
                <button
                    className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white"
                    onClick={() => {
                        setSelectedType('PDF')
                        if (!exportTransactions) {
                            return
                        }
                        exportTransactions()
                    }}
                >
                    PDF
                </button>
                <button
                    className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white"
                    onClick={() => {
                        setSelectedType('Excel')
                        if (!exportTransactions) {
                            return
                        }
                        exportTransactions()
                    }}
                >
                    Excel
                </button>
            </div>
        </div>
    )
}