
export type GetTransactions = {
    id: string
    date: string
    title: string
    description: string
    category: string
    currency: string
    amount: string
}

export const getTokenToLS = () => {
    const data = localStorage.getItem('auth-storage')
    const parseData = data ? JSON.parse(data) : null
    const token = parseData.state.token

    if (!token) return null

    return token
}

export const getTransactions = () => {
    const promise: Promise<GetTransactions[]> = fetch('https://finance-tracker-backend-production-12f1.up.railway.app/api/transactions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getTokenToLS()
        }
    }).then(res => res.json())

    return promise
}