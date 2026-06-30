import type { GetTransactions } from "../../DAL/api";
import { convertCurrency } from "../../store/currencyStore";
import { targetCurrency } from "../../store/settingsStore";

export function useTopCategory(transactions: GetTransactions[] | null) {
    const currency = targetCurrency()

    if (!transactions) return null

    const filteredTransactions = transactions.filter(t => {
        const amountStr = t.amount.replace(/[^0-9+\-.]/g, '')
        const numericValue = parseFloat(amountStr)
        return numericValue < 0
    })
    const categories: Record<string, number> = {}

    for (const t of filteredTransactions) {
        const category = t.category
        const amountStr = parseFloat(t.amount.replace(/[^0-9+\-.]/g, ''))
        const converted = Math.abs(convertCurrency(amountStr, t.currency, currency))

        if (category in categories) {
            categories[`${category}`] += converted
        } else {
            categories[`${category}`] = converted
        }
    }

    const bigAmount = Math.max(...Object.values(categories))
    const topCategory = Object.keys(categories).find(key => categories[key] === bigAmount)

    return { topCategory, filteredTransactions, bigAmount }
}