import { getTokenToLS } from "./api"

export const handleDeleteTransaction = async (
    idTransaction: string,
    refreshTransactions: () => void
) => {
    await fetch(`https://finance-tracker-backend-production-12f1.up.railway.app/api/transactions/${idTransaction}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
    })
    refreshTransactions()
}