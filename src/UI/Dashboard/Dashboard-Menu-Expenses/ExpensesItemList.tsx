import { useEffect } from 'react'
import { ExpensesItem } from './ExpensesItem'
import { useAuthStore } from '../../../store/authStore'
import { useTransactionsStore } from '../../../store/transactionsStore'
import { useFilteredTransactions } from '../../../BLL/transactions/useFiltereddTransactions'
import { useTranslation } from 'react-i18next'
import { transactionsOnPage } from '../../../store/settingsStore'

type Props = {
    currentPage: number
}

export default function ExpensesItemList(props: Props) {
    const { transactions, loading, loadTransactions } = useTransactionsStore()
    const filteredTransactions = useFilteredTransactions()
    const { token } = useAuthStore()
    const { t } = useTranslation()
    const onPage = transactionsOnPage()

    useEffect(() => {
        if (token) {
            loadTransactions()
        }
    }, [token])

    const transactionsPerPage = () => {
        if (onPage === 'All') {
            return filteredTransactions
        } else {
            let start = (props.currentPage - 1) * Number(onPage)
            let end = start + Number(onPage)
            return filteredTransactions.slice(start, end)
        }
    }

    if (!token) return <div className='flex items-center justify-center py-15 text-2xl'>{t('log_or_register')}</div>

    if (loading) return <div className='flex items-center justify-center py-15 text-2xl'>{t('loading')}</div>
    if (!transactions || transactions.length === 0) return <div className='flex items-center justify-center py-15 text-2xl'>{t('no_transactions')}(</div>

    return (
        <div key={props.currentPage} className="divide-y divide-[#2a2a2a] animate-soft">
            {transactionsPerPage()?.map((data) => (
                <ExpensesItem
                    key={data.id + props.currentPage}
                    data={data}
                    refreshTransaction={loadTransactions}
                />
            ))}
        </div>
    )
}