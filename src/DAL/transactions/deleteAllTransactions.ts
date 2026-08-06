import { getTokenToLS } from "../api"


export const deleteAllTransactions = async () => {
    const datalink = import.meta.env.VITE_API_URL

    const deleteTransactions = await fetch(`${datalink}/delete`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
    })

    return deleteTransactions
}