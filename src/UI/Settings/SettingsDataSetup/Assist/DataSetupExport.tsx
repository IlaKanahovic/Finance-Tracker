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
            <div className="mb-4 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('export')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className="px-4 py-1.5 text-sm border border-(--border-header-buttons) rounded-md text-(--text-main) transition-all duration-300 cursor-pointer hover:border-(--border-header-buttons-hover) hover:text-(--text-main)"
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
                    className="px-4 py-1.5 text-sm border border-(--border-header-buttons) rounded-md text-(--text-main) transition-all duration-300 cursor-pointer hover:border-(--border-header-buttons-hover) hover:text-(--text-main)"
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
                    className="px-4 py-1.5 text-sm border border-(--border-header-buttons) rounded-md text-(--text-main) transition-all duration-300 cursor-pointer hover:border-(--border-header-buttons-hover) hover:text-(--text-main)"
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