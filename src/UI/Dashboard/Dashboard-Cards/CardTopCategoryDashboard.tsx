import { useTranslation } from "react-i18next"
import { useGetSymbolNumberCerrency } from "../../../BLL/currency/useGetSymbolNumberCerrency"
import { useTopCategory } from "../../../BLL/transactions/useTopCategory"
import { targetCurrency } from "../../../store/settingsStore"
import { useTransactionsStore } from "../../../store/transactionsStore"


export function CardAvailableDashboard() {
    const { transactions } = useTransactionsStore()
    const topCategory = useTopCategory(transactions)
    const currency = targetCurrency()
    const { t } = useTranslation()

    if (!topCategory) {
        return <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">{t('biggestExpense')}</p>
            <p className="text-2xl font-semibold"> {t('loading')} </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs"> {t('biggestExpenseLabel')} </p>
                <p className="text-[#A0A0A0] text-xs"> {t('loading')}. </p>
            </div>
        </li>
    }

    if (topCategory.filteredTransactions.length === 0) {
        return <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">{t('biggestExpense')}</p>
            <p className="text-2xl font-semibold"> {t('biggestExpenseNoData')} </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs"> {t('biggestExpenseLabel')}  </p>
                <p className="text-[#A0A0A0] text-xs"> {t('biggestExpenseNoExpenses')} </p>
            </div>
        </li>
    }

    if (!transactions || transactions.length === 0) {
        return <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">{t('biggestExpense')}</p>
            <p className="text-2xl font-semibold"> 0 </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">{t('biggestExpenseLabel')} </p>
                <p className="text-[#A0A0A0] text-xs"> {t('biggestExpenseNoExpenses')} </p>
            </div>
        </li>
    }

    const { symbol } = useGetSymbolNumberCerrency(topCategory.filteredTransactions, currency)

    return (
        <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">{t('biggestExpense')}</p>
            <p className="text-2xl font-semibold"> {symbol + topCategory.bigAmount.toFixed(2)} </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs"> {t('biggestExpenseLabel')}  </p>
                <p className="text-[#A0A0A0] text-xs"> {t(`${topCategory.topCategory}`)} </p>
            </div>
        </li>
    )
}