import { useTranslation } from "react-i18next"
import { getTokenToLS } from "../api"
import toast from "react-hot-toast"

export const handleDeleteTransaction = async (
    idTransaction: string,
    refreshTransactions: () => void
) => {
    const { t } = useTranslation()

    try {
        const response = await fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/api/transactions/${idTransaction}`, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
        })

        if (!response.ok) {
            throw new Error('Ошибка при удалении')
        }

        toast.success(t('toast_transaction_deleted'))
        refreshTransactions()
    } catch (error) {
        toast.error(t('toast_transaction_delete_error'))
        console.error(error)
    }
}