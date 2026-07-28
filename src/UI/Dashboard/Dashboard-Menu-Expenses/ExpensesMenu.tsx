import { useTranslation } from "react-i18next"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { transactionsOnPage } from "../../../store/settingsStore"
import { useTransactionsStore } from "../../../store/transactionsStore"
import { useState } from "react"
import ExpensesItemList from "./ExpensesItemList"
import { useFilteredTransactions } from "../../../BLL/transactions/useFiltereddTransactions"

export function ExpensesMenu() {
    const [currentPage, setCurrentPage] = useState(1)

    const { t } = useTranslation()
    const filteredTransactions = useFilteredTransactions()
    const { transactions } = useTransactionsStore()
    const onPage = transactionsOnPage()

    if (!transactions) return (
        <div className="mt-12">
            <div className="hidden sm:grid sm:grid-cols-[1fr_2fr_1.2fr_1fr] mb-3 px-2 text-(--text-expenses-menu) text-xs md:text-sm uppercase tracking-wider">
                <p className="text-sm font-medium text-(--text-expenses-menu) "> {t('date')} </p>
                <p className="text-sm font-medium text-(--text-expenses-menu) "> {t("description")} </p>
                <p className="text-sm font-medium text-(--text-expenses-menu) "> {t("category")} </p>
                <div className="text-right">
                    <p className="text-sm font-medium text-(--text-expenses-menu) "> {t("amount")} </p>
                </div>
            </div>
            <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
                <ExpensesItemList currentPage={0} />
            </div>
        </div>
    )

    const visibilityArrowsSlider = () => {
        if (onPage === 'All' || transactions.length < Number(onPage)) return false
    }

    return (
        <div className="mt-12">
            <div className="hidden sm:grid sm:grid-cols-[1fr_2fr_1.2fr_1fr] mb-3 px-2 text-(--text-expenses-menu) text-xs md:text-sm uppercase tracking-wider">
                <p className="text-sm font-medium text-(--text-expenses-menu) "> {t('date')} </p>
                <p className="text-sm font-medium text-(--text-expenses-menu) "> {t("description")} </p>
                <p className="text-sm font-medium text-(--text-expenses-menu) "> {t("category")} </p>
                <div className="text-right">
                    <p className="text-sm font-medium text-(--text-expenses-menu) "> {t("amount")} </p>
                </div>
            </div>
            <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
                <ExpensesItemList currentPage={currentPage} />
            </div>
            {visibilityArrowsSlider() === false ? <div></div> : <div className="flex items-center justify-center gap-4 mt-4">
                {currentPage !== 1 && (
                    <button
                        className={`w-8 h-8 border border-[#333333] rounded flex items-center justify-center transition-all
                                    duration-300 hover:border-white hover:bg-[#1c1c1c] cursor-pointer group`}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <IoChevronBack className="w-4 h-4 text-(--text-expenses-menu) group-hover:text-white transition-colors duration-300" />
                    </button>
                )}
                {currentPage !== Math.ceil(filteredTransactions.length / Number(onPage)) && (
                    <button
                        className={`w-8 h-8 border border-[#333333] rounded flex items-center justify-center transition-all
                                    duration-300 hover:border-white hover:bg-[#1c1c1c] cursor-pointer group`}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        <IoChevronForward className="w-4 h-4 text-(--text-expenses-menu) group-hover:text-white transition-colors duration-300" />
                    </button>
                )}
            </div>}
        </div>
    )
}