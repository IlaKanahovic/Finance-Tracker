import { parse, startOfDay, endOfDay, isWithinInterval, subDays } from 'date-fns'
import { useFilterStore } from '../../store/filterStore'
import { useMemo } from 'react'
import { useTransactionsStore } from '../../store/transactionsStore'


export function useFilteredTransactions() {
    const { transactions } = useTransactionsStore()
    
    const searchTransaction = useFilterStore((state) => state.searchFilter)
    const categoryTransaction = useFilterStore((state) => state.categoryFilter)
    const dataFilter = useFilterStore((state) => state.dataFilter)

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
            const start = startOfDay(subDays(new Date(), 7))
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
        } else if (dataFilter === 'custom') { }

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
    }, [transactions, dataFilter, categoryTransaction, searchTransaction])

    return filteredTransactions
}