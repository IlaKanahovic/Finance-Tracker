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
            <p className="text-[#A0A0A0] text-xs mb-1">THE MOST EXPENSIVE CATEGORYE</p>
            <p className="text-2xl font-semibold"> Loading... </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs"> Biggest expense сategory: </p>
                <p className="text-[#A0A0A0] text-xs"> Loading... </p>
            </div>
        </li>
    }

    if (topCategory.filteredTransactions.length === 0) {
        return <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">THE MOST EXPENSIVE CATEGORY</p>
            <p className="text-2xl font-semibold"> No spending yet </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs"> Biggest expense сategory: </p>
                <p className="text-[#A0A0A0] text-xs"> no expenses </p>
            </div>
        </li>
    }

    if (!transactions || transactions.length === 0) {
        return <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">THE MOST EXPENSIVE CATEGORY</p>
            <p className="text-2xl font-semibold"> 0 </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs"> Biggest expense сategory: </p>
                <p className="text-[#A0A0A0] text-xs"> No expenses </p>
            </div>
        </li>
    }

    const { symbol } = useGetSymbolNumberCerrency(topCategory.filteredTransactions, currency)

    return (
        <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">THE MOST EXPENSIVE CATEGORY</p>
            <p className="text-2xl font-semibold"> {symbol + topCategory.bigAmount.toFixed(2)} </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs"> Biggest expense сategory: </p>
                <p className="text-[#A0A0A0] text-xs"> {topCategory.topCategory} </p>
            </div>
        </li>
    )
}