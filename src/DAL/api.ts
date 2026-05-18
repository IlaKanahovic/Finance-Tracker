
export type GetTransactions = {
    id: string
    date: string
    title: string
    description: string
    category: string
    currency: string
    amount: string 
}

export const getTransactions = () => {
    const promise: Promise<GetTransactions[]> = fetch('http://localhost:3001/transactions', {
    }).then(res => res.json())

    return promise
}