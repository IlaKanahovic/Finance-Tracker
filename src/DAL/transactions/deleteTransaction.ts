import { getTokenToLS } from "../api"
import toast from "react-hot-toast"

export const handleDeleteTransaction = async (
    idTransaction: string,
    refreshTransactions: () => void
) => {
    try {
        const response = await fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/api/transactions/${idTransaction}`, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
        })

        if (!response.ok) {
            throw new Error('Ошибка при удалении')
        }

        toast.success('Транзакция удалена')
        refreshTransactions()
    } catch (error) {
        toast.error('Не удалось удалить транзакцию')
        console.error(error)
    }
}