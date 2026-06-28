import { getCurrencySymbol } from "../../../assets/static-files/getCurrencySymbol"
import { useCurrentBalanceCard } from "../../../BLL/transactions/useCurrentBalanceCard"
import { useTransactionsStore } from "../../../store/transactionsStore"
import { convertCurrency } from "../../../store/currencyStore"
import { targetCurrency } from "../../../store/settingsStore"
import { useAuthStore } from "../../../store/authStore"

export function CardCurrentBalanceDashboard() {
    const { transactions } = useTransactionsStore()
    const currency = targetCurrency()
    const { token } = useAuthStore()

    let balance = 0
    let symbol = ""
    const lastUpdateTime = useCurrentBalanceCard(transactions)

    if (!token) {
        return (
            <li className="p-5 bg-(--card-bg) rounded-lg">
                <p className="text-[#A0A0A0] text-xs mb-1">CURRENT BALANCE</p>
                <p className="text-2xl font-semibold">0</p>
                <div className="flex flex-wrap justify-between items-center gap-x-4">
                    <p className="text-[#A0A0A0] text-xs">no</p>
                    <p className="text-[#A0A0A0] text-xs">{lastUpdateTime}</p>
                </div>
            </li>
        )
    }

    if (!transactions) {
        return (
            <li className="p-5 bg-(--card-bg) rounded-lg">
                <p className="text-[#A0A0A0] text-xs mb-1">CURRENT BALANCE</p>
                <p className="text-2xl font-semibold">Loading...</p>
                <div className="flex flex-wrap justify-between items-center gap-x-4">
                    <p className="text-[#A0A0A0] text-xs">{currency}</p>
                    <p className="text-[#A0A0A0] text-xs">{lastUpdateTime}</p>
                </div>
            </li>
        )
    }

    if (transactions.length === 0) {
        return (
            <li className="p-5 bg-(--card-bg) rounded-lg">
                <p className="text-[#A0A0A0] text-xs mb-1">CURRENT BALANCE</p>
                <p className="text-2xl font-semibold">0</p>
                <div className="flex flex-wrap justify-between items-center gap-x-4">
                    <p className="text-[#A0A0A0] text-xs">{currency}</p>
                    <p className="text-[#A0A0A0] text-xs">{lastUpdateTime}</p>
                </div>
            </li>
        )
    }

    if (transactions) {
        symbol = getCurrencySymbol(currency)
        for (let id in transactions) {
            let data = transactions[id]
            const amount = data.amount
            if (typeof amount !== 'string') {
                continue
            }
            const converted = convertCurrency(Number(data.amount.replace(/[^\d.-]/g, '')), data.currency, currency)
            balance += Number(converted)
        }
    }

    return (
        <li className="p-5 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">CURRENT BALANCE</p>
            <p className="text-2xl font-semibold">{symbol + balance.toFixed(2)}</p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">{currency}</p>
                <p className="text-[#A0A0A0] text-xs">{lastUpdateTime}</p>
            </div>
        </li>
    )
}