import { getTokenToLS } from "./api"

export const handleDeleteTransaction = async (
    idTransaction: string,
    refreshTransactions: () => void
) => {
    await fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/transactions/${idTransaction}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
    })
    refreshTransactions()
}