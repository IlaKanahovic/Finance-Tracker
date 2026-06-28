import { useEffect } from 'react'
import { ExpensesItem } from './ExpensesItem'
import { useAuthStore } from '../../../store/authStore'
import { useTransactionsStore } from '../../../store/transactionsStore'
import { useFilteredTransactions } from '../../../BLL/transactions/useFiltereddTransactions'

export default function ExpensesItemList() {
    const { transactions, loading, loadTransactions } = useTransactionsStore()
    const filteredTransactions = useFilteredTransactions()
    const { token } = useAuthStore()

    useEffect(() => {
        if (token) {
            loadTransactions()
        }
    }, [token])

    if (!token) return <div className='flex items-center justify-center py-15 text-2xl'>Log in or register</div>

    if (loading) return <div className='flex items-center justify-center py-15 text-2xl'>loading...</div>
    if (!transactions || transactions.length === 0) return <div className='flex items-center justify-center py-15 text-2xl'>No transactions(</div>

    return (
        <div className="divide-y divide-[#2a2a2a]">
            {filteredTransactions.map((data) => (
                <ExpensesItem
                    key={data.id}
                    data={data}
                    refreshTransaction={loadTransactions}
                />
            ))}
        </div>
    )
}