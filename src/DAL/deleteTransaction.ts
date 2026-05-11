
export const handleDeleteTransaction = (idTransaction: string) => {

    fetch(`http://localhost:3001/transactions/${idTransaction}`, {
        method: 'DELETE',
    })
}