import { parse, startOfDay, endOfDay, isWithinInterval, subDays, startOfWeek } from 'date-fns'
import { useMemo } from 'react'
import { useTransactionsStore } from '../../store/transactionsStore'
import { useFilterStore } from '../../store/filterStore'
import { useSettingsStore } from '../../store/settingsStore'


export function useFilteredTransactions() {
    const { transactions } = useTransactionsStore()

    const searchTransaction = useFilterStore((state) => state.searchFilter)
    const categoryTransaction = useFilterStore((state) => state.categoryFilter)
    const dataFilter = useFilterStore((state) => state.dataFilter)
    const dateFrom = useFilterStore((state) => state.datefrom)
    const dateTo = useFilterStore((state) => state.dateTo)

    const weekStart = useSettingsStore((state) => state.weekStart)

    const filteredTransactions = useMemo(() => {

        if (!transactions || transactions.length === 0) {
            return []
        }

        let filtered = transactions

        if (dataFilter === 'today') {
            const start = startOfDay(new Date())
            const end = endOfDay(new Date())
            filtered = filtered.filter(t => {
                const date = parse(t.date, 'dd/MM/yyyy', new Date())
                return isWithinInterval(date, { start, end })
            })
        } else if (dataFilter === '7d') {
            const start = startOfDay(startOfWeek(new Date(), { weekStartsOn: weekStart === 'Monday' ? 1 : 0 }))
            const end = endOfDay(new Date())
            filtered = filtered.filter(t => {
                const date = parse(t.date, 'dd/MM/yyyy', new Date())
                return isWithinInterval(date, { start, end })
            })
        } else if (dataFilter === '30d') {
            const start = startOfDay(subDays(new Date(), 30))
            const end = endOfDay(new Date())
            filtered = filtered.filter(t => {
                const date = parse(t.date, 'dd/MM/yyyy', new Date())
                return isWithinInterval(date, { start, end })
            })
        } else if (dataFilter === 'custom' && dateFrom && dateTo) {
            const start = new Date(dateFrom)
            const end = new Date(dateTo)
            filtered = filtered.filter(t => {
                const date = new Date(t.date)
                return date >= start && date <= end
            })
        }

        if (categoryTransaction && categoryTransaction !== 'All') {
            filtered = filtered.filter(transaction =>
                transaction.category === categoryTransaction
            )
        }

        if (searchTransaction.trim()) {
            filtered = filtered.filter(transaction =>
                transaction.title.toLowerCase().includes(searchTransaction.toLowerCase()) ||
                transaction.description?.toLowerCase().includes(searchTransaction.toLowerCase())
            )
        }

        return filtered
    }, [transactions, dataFilter, dateFrom, dateTo, categoryTransaction, searchTransaction])

    return filteredTransactions
}