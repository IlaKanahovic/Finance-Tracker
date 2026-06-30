import { getCurrencySymbol } from "../../assets/static-files/getCurrencySymbol"
import type { GetTransactions } from "../../DAL/api"
import { convertCurrency } from "../../store/currencyStore"


export function useGetSymbolNumberCerrency(transactions: GetTransactions[] | null, currency: string) {
    let balance = 0
    let symbol = ""

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

    return { balance, symbol }
}