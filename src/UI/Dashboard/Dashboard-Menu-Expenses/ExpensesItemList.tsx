import { useEffect } from 'react'
import { useTransactionsStore } from '../../../store/transactionsStore'
import { ExpensesItem } from './ExpensesItem'

export default function ExpensesItemList() {
    const { transactions, loading, loadTransactions } = useTransactionsStore()

    useEffect(() => {
        loadTransactions()
    }, [])

    if (loading) return <div className='flex items-center justify-center py-15 text-2xl'>loading...</div>
    if (!transactions || transactions.length === 0) return <div className='flex items-center justify-center py-15 text-2xl'>No transactions(</div>

    return (
        <div className="divide-y divide-[#2a2a2a]">
            {transactions.map((data) => (
                <ExpensesItem
                    key={data.id}
                    data={data}
                    refreshTransaction={loadTransactions}
                />
            ))}
        </div>
    )
}