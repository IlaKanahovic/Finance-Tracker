import { create } from 'zustand'
import { getTransactions, type GetTransactions } from '../DAL/api'

type TransactionsStore = {
    transactions: GetTransactions[] | null
    loading: boolean
    loadTransactions: () => Promise<void>
}

export const useTransactionsStore = create<TransactionsStore>((set) => ({
    transactions: null,
    loading: false,
    loadTransactions: async () => {
        set({ loading: true })
        try {
            const data = await getTransactions()
            if (Array.isArray(data)) {
                set({ transactions: data, loading: false })
            } else {
                set({ transactions: [], loading: false })
            }
        } catch (error) {
            console.error('Failed to load transactions:', error)
            set({ transactions: [], loading: false })
        }
    }
}))