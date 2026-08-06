export type GetTransactions = {
    id: string
    date: string
    title: string
    description: string
    category: string
    currency: string
    amount: string
}

const datalink = import.meta.env.VITE_API_URL

export const getTokenToLS = (): string | null => {
    try {
        const data = localStorage.getItem('auth-storage')
        if (!data) return null

        const parsed = JSON.parse(data)
        return parsed?.state?.token || null
    } catch {
        return null
    }
}

const handleUnauthorized = () => {
    localStorage.removeItem('auth-storage')
    window.location.href = '/signIn'
}

const request = async <T>(
    point: string,
    options: RequestInit = {}
): Promise<T> => {
    const token = getTokenToLS()

    const res = await fetch(`${datalink}${point}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
    })

    if (res.status === 401 || res.status === 403) {
        handleUnauthorized()
        throw new Error('Unauthorized')
    }

    if (!res.ok) {
        const errorText = await res.text()
        throw new Error(errorText || 'Request failed')
    }

    return res.json()
}

export const getTransactions = (): Promise<GetTransactions[]> => {
    return request<GetTransactions[]>('/transactions')
}