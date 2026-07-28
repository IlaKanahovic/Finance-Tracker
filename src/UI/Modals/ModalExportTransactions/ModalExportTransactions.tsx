import { useState } from "react";
import { useTransactionsStore } from "../../../store/transactionsStore";
import { useExportTransactions } from "../../../BLL/transactions/useExportTransactions";
import { useTranslation } from "react-i18next";

type Props = {
    onClose: () => void
}

export function ModalExportTransactions(props: Props) {
    const [selectedType, setSelectedType] = useState('CSV')
    const { transactions } = useTransactionsStore()
    const exportTransactions = useExportTransactions(transactions, selectedType)
    const { t } = useTranslation()

    return (
        <div className="fixed inset-0 bg-(--bg)/80 flex items-center justify-center z-50">
            <div className="bg-(--bg) border border-(--border-header-buttons) rounded-2xl px-15 pt-10 pb-15 w-full max-w-2xl shadow-2xl">
                <div className="w-full">
                    <h1 className="text-2xl text-(--text-main) text-center">{t('select_export_type')}</h1>

                    <div className="mt-8 space-y-4">
                        <div
                            className="flex items-center justify-between border border-(--border-header-buttons) rounded-lg px-6 py-4 hover:border-(--border-header-buttons-hover) transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedType('CSV')}
                        >
                            <span className="text-(--text-main) text-base font-medium">CSV</span>
                            <div className={`w-5 h-5 rounded-full border transition-all duration-300 flex items-center justify-center ${selectedType === "CSV" ? "border-blue-600 bg-blue-600" : "border-gray-600 bg-(--bg)"}`}>
                                {selectedType === "CSV" && (
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                )}
                            </div>
                        </div>

                        <div
                            className="flex items-center justify-between border border-(--border-header-buttons) rounded-lg px-6 py-4 hover:border-(--border-header-buttons-hover) transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedType('PDF')}
                        >
                            <span className="text-(--text-main) text-base font-medium">PDF</span>
                            <div className={`w-5 h-5 rounded-full border transition-all duration-300 flex items-center justify-center ${selectedType === "PDF" ? "border-blue-600 bg-blue-600" : "border-gray-600 bg-(--bg)"}`}>
                                {selectedType === "PDF" && (
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                )}
                            </div>
                        </div>

                        <div
                            className="flex items-center justify-between border border-(--border-header-buttons) rounded-lg px-6 py-4 hover:border-(--border-header-buttons-hover) transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedType('Excel')}
                        >
                            <span className="text-(--text-main) text-base font-medium">Excel</span>
                            <div className={`w-5 h-5 rounded-full border transition-all duration-300 flex items-center justify-center ${selectedType === "Excel" ? "border-blue-600 bg-blue-600" : "border-gray-600 bg-(--bg)"}`}>
                                {selectedType === "Excel" && (
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center items-center gap-4">
                        <button
                            type="button"
                            className="cursor-pointer bg-transparent border border-(--border-header-buttons) text-(--text-main) text-base font-medium p-3 px-15 rounded-lg hover:border-(--border-header-buttons-hover) hover:bg-(--text-expenses-item-hover) transition-all"
                            onClick={() => props.onClose()}
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="button"
                            className="cursor-pointer bg-(--black-ili-white) text-(--bg) text-base font-medium p-3 px-15 rounded-lg hover:opacity-80 transition-all"
                            onClick={() => {
                                props.onClose()
                                if (!exportTransactions) {
                                    return
                                }
                                exportTransactions()
                            }}
                        >
                            {t('save')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}