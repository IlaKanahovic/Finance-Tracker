import { Request } from 'express'

export interface TypedRequest<T = any> extends Request {
    userId?: number
    body: T
    params: {
        id?: string
    }
}

export interface CreateTransactionBody {
    date: string
    title: string
    description: string
    category: string
    currency: string
    amount: string
}