import { getTokenToLS } from "./api"

export const handleDeleteTransaction = async (
    idTransaction: string,
    refreshTransactions: () => void
) => {
    await fetch(`http://localhost:3001/api/transactions/${idTransaction}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
    })
    refreshTransactions()
}