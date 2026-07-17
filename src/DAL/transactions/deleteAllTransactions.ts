import { getTokenToLS } from "../api"


export const deleteAllTransactions = async () => {
    const deleteTransactions = await fetch('https://finance-tracker-backend-production-e1c9.up.railway.app/api/delete', {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
    })

    return deleteTransactions
}