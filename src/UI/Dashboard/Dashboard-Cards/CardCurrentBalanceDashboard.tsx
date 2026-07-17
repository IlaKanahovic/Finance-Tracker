import { useCurrentBalanceCard } from "../../../BLL/transactions/useCurrentBalanceCard"
import { useTransactionsStore } from "../../../store/transactionsStore"
import { targetCurrency } from "../../../store/settingsStore"
import { useAuthStore } from "../../../store/authStore"
import { useGetSymbolNumberCerrency } from "../../../BLL/currency/useGetSymbolNumberCerrency"
import { useTranslation } from "react-i18next"

export function CardCurrentBalanceDashboard() {
    const { t } = useTranslation()
    const { transactions } = useTransactionsStore()
    const currency = targetCurrency()
    const { token } = useAuthStore()
    const { balance, symbol } = useGetSymbolNumberCerrency(transactions, currency)

    const lastUpdateTime = useCurrentBalanceCard(transactions)

    if (!token) {
        return (
            <li className="p-5 bg-(--card-bg) rounded-lg">
                <p className="text-[#A0A0A0] text-xs mb-1"> {t('current_balance')} </p>
                <p className="text-2xl font-semibold">0</p>
                <div className="flex flex-wrap justify-between items-center gap-x-4">
                    <p className="text-[#A0A0A0] text-xs">{t('no')}</p>
                    <p className="text-[#A0A0A0] text-xs">{lastUpdateTime}</p>
                </div>
            </li>
        )
    }

    if (!transactions) {
        return (
            <li className="p-5 bg-(--card-bg) rounded-lg">
                <p className="text-[#A0A0A0] text-xs mb-1">{t('current_balance')}</p>
                <p className="text-2xl font-semibold">{t('loading')}</p>
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
                <p className="text-[#A0A0A0] text-xs mb-1">{t('current_balance')}</p>
                <p className="text-2xl font-semibold">0</p>
                <div className="flex flex-wrap justify-between items-center gap-x-4">
                    <p className="text-[#A0A0A0] text-xs">{currency}</p>
                    <p className="text-[#A0A0A0] text-xs">{lastUpdateTime}</p>
                </div>
            </li>
        )
    }

    return (
        <li className="p-5 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">{t('current_balance')}</p>
            <p className="text-2xl font-semibold">{symbol + balance.toFixed(2)}</p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">{currency}</p>
                <p className="text-[#A0A0A0] text-xs">{lastUpdateTime}</p>
            </div>
        </li>
    )
}