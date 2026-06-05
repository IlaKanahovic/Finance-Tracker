import { getTokenToLS } from "./api"

export const handleDeleteTransaction = (idTransaction: string) => {

    fetch(`http://localhost:3001/transactions/${idTransaction}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + getTokenToLS() }
    })
}