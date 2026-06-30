import { useMemo } from "react";
import type { GetTransactions } from "../../DAL/api";
import { parse, isSameMonth, subMonths } from 'date-fns'
import { convertCurrency } from "../../store/currencyStore";
import { targetCurrency } from "../../store/settingsStore";

export function useMonthlyChange(transactions: GetTransactions[] | null) {
    const currency = targetCurrency()
    const monthlyChange = useMemo(() => {
        const todayDate = new Date()
        const prevDate = subMonths(todayDate, 1)

        let currentTotal = 0
        let prevTotal = 0

        if (transactions?.length === 0) return 'bob'

        transactions?.filter(t => {
            const amountStr = parseFloat(t.amount.replace(/[^0-9+\-.]/g, ''))
            const converted = convertCurrency(amountStr, t.currency, currency)
            const date = parse(t.date, 'dd/MM/yyyy', new Date())

            if (isSameMonth(date, todayDate)) {
                currentTotal += converted
            } else if (isSameMonth(date, prevDate)) {
                prevTotal += converted
            }
        })

        return currentTotal - prevTotal
    }, [transactions, currency])

    return monthlyChange
}