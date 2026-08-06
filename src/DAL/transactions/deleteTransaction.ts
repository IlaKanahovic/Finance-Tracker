import { useTranslation } from "react-i18next"
import { getTokenToLS } from "../api"
import toast from "react-hot-toast"

export const handleDeleteTransaction = async (
    idTransaction: string,
    refreshTransactions: () => void
) => {
    const { t } = useTranslation()

    const datalink = import.meta.env.VITE_API_URL

    try {
        const response = await fetch(`${datalink}/transactions/${idTransaction}`, {
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