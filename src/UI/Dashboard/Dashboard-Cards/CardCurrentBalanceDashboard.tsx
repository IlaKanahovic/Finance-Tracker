import { getCurrencySymbol } from "../../../assets/static-files/getCurrencySymbol"
import { useCurrentBalanceCard } from "../../../BLL/useCurrentBalanceCard"
import { useTransactions } from "../../../BLL/useTransactions"
import { convertCurrency } from "../../../store/currencyStore"
import { targetCurrency } from "../../../store/settingsStore"

export function CardCurrentBalanceDashboard() {
    const { dataTransactions } = useTransactions()
    const currency = targetCurrency()

    let balance = 0
    let symbol = ""

    if (dataTransactions) {
        symbol = getCurrencySymbol(currency)
        for (let id in dataTransactions) {
            let data = dataTransactions[id]
            const converted = convertCurrency(Number(data.amount.replace(/[^\d.-]/g, '')), data.currency, currency)
            balance += Number(converted)
        }
    }

    const lastUpdateTime = useCurrentBalanceCard(dataTransactions)

    if (!dataTransactions) {
        return (
            <li className="p-5 bg-(--card-bg) rounded-lg">
                <p className="text-[#A0A0A0] text-xs mb-1">CURRENT BALANCE</p>
                <p className="text-2xl font-semibold">Loading...</p>
                <div className="flex flex-wrap justify-between items-center gap-x-4">
                    <p className="text-[#A0A0A0] text-xs">{currency}</p>
                    <p className="text-[#A0A0A0] text-xs">*DATE UPDATE*</p>
                </div>
            </li>
        )
    }

    return (
        <li className="p-5 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">CURRENT BALANCE</p>
            <p className="text-2xl font-semibold">{symbol + balance.toFixed(2)}</p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">{currency}</p>
                <p className="text-[#A0A0A0] text-xs">{lastUpdateTime || "*DATE UPDATE*"}</p>
            </div>
        </li>
    )
}