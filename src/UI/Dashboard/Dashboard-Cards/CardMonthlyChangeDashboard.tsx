import { useTranslation } from "react-i18next";
import { useGetSymbolNumberCerrency } from "../../../BLL/currency/useGetSymbolNumberCerrency"
import { useMonthlyChange } from "../../../BLL/transactions/useMonthlyChange"
import { targetCurrency } from "../../../store/settingsStore"
import { useTransactionsStore } from "../../../store/transactionsStore"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


export function CardMonthlyChangeDashboard() {
    const { transactions } = useTransactionsStore()
    const currency = targetCurrency()
    const monthlyChange = useMonthlyChange(transactions)
    const { symbol } = useGetSymbolNumberCerrency(transactions, currency)
    const { t } = useTranslation()

    if (monthlyChange === 'bob') {
        return (
            <li className="p-4 bg-(--card-bg) rounded-lg">
                <p className="text-[#A0A0A0] text-xs mb-1">{t('monthly_change')}</p>
                <div className="flex flex-wrap justify-between items-center gap-x-4">
                    <div className="text-2xl font-semibold flex"> 0 </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-[#A0A0A0] text-xs">{t('month_vs_last')}</p>
                        <p className="text-[#A0A0A0] text-xs">{t('no_transactions')}</p>
                    </div>
                </div>
            </li >
        )
    }

    if (!monthlyChange) {
        return (
            <li className="p-4 bg-(--card-bg) rounded-lg">
                <p className="text-[#A0A0A0] text-xs mb-1">{t('monthly_change')}</p>
                <div className="flex flex-wrap justify-between items-center gap-x-4">
                    <div className="text-2xl font-semibold flex"> {t('loading')} </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-[#A0A0A0] text-xs">{t('month_vs_last')}</p>
                        <p className="text-[#A0A0A0] text-xs"> {t('loading')} </p>
                    </div>
                </div>
            </li >
        )
    }

    return (
        <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">{t('monthly_change')}</p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <div className="text-2xl font-semibold flex">
                    <div>{!monthlyChange ? 0 : symbol + monthlyChange.toFixed(2)}</div>
                    <div className="ml-1 mt-1">
                        {
                            monthlyChange > 0 ? (
                                <FaArrowUp className="text-green-500" />
                            ) : monthlyChange < 0 ? (
                                <FaArrowDown className="text-red-500" />
                            ) : null
                        }
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p className="text-[#A0A0A0] text-xs">{t('month_vs_last')}</p>
                    {transactions === null
                        ? <p className="text-[#A0A0A0] text-xs"> {t('no_transactions')} </p>
                        : <p className="text-[#A0A0A0] text-xs"> {transactions.length} {t('transaction')}</p>}
                </div>
            </div>
        </li >
    )
}