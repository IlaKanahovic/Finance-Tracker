import { useGetSymbolNumberCerrency } from "../../../BLL/currency/useGetSymbolNumberCerrency"
import { useTopCategory } from "../../../BLL/transactions/useTopCategory"
import { targetCurrency } from "../../../store/settingsStore"
import { useTransactionsStore } from "../../../store/transactionsStore"


export function CardAvailableDashboard() {
    const { transactions } = useTransactionsStore()
    const topCategory = useTopCategory(transactions)
    const currency = targetCurrency()

    if (!topCategory) {
        return <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">TOP CATEGORY</p>
            <p className="text-2xl font-semibold"> ERROR </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">Top category: </p>
                <p className="text-[#A0A0A0] text-xs"> ERRORR </p>
            </div>
        </li>
    }

    const { symbol } = useGetSymbolNumberCerrency(topCategory.filteredTransactions, currency)

    return (
        <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">TOP CATEGORY</p>
            <p className="text-2xl font-semibold"> {symbol + topCategory.bigAmount.toFixed(2)} </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">Top category: </p>
                <p className="text-[#A0A0A0] text-xs"> {topCategory?.topCategory} </p>
            </div>
        </li>
    )
}