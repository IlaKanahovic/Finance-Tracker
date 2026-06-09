import { Request, Response } from 'express'
import prisma from '../db/prisma'
import { CreateTransactionBody, TypedRequest } from '../types'

export const getTransactions = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId

        if (!userId) return res.status(401).json({ message: 'Пользователь не авторизован' })

        const transactions = await prisma.transaction.findMany({
            where: { userId },
            orderBy: { id: 'desc' }
        })

        res.json(transactions)
    } catch (error) {
        console.error('Get transactions error:', error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}

export const createTransaction = async (req: Request, res: Response) => {
    const typedReq = req as any

    try {
        const userId = typedReq.userId

        if (!userId) return res.status(401).json({ message: 'Пользователь не авторизован' })

        const { date, title, description, category, currency, amount } = typedReq.body

        if (!title || !amount) return res.status(400).json({ message: 'Название и сумма обязательны' })

        const newTransaction = await prisma.transaction.create({
            data: {
                date,
                title,
                description,
                category,
                currency,
                amount,
                userId
            }
        })

        const allTransactions = await prisma.transaction.findMany({
            where: { userId },
            orderBy: { id: 'desc' }
        })

        res.status(201).json(allTransactions)
    } catch (error) {
        console.error('Create transaction error:', error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}

export const updateTransaction = async (
    req: TypedRequest<CreateTransactionBody>,
    res: Response
) => {
    try {
        const userId = req.userId
        const transactionId = parseInt(req.params.id || '0')

        if (!userId) return res.status(401).json({ message: 'Пользователь не авторизован' })

        if (!transactionId) return res.status(400).json({ message: 'ID транзакции обязателен' })

        const existingTransaction = await prisma.transaction.findFirst({
            where: {
                id: transactionId,
                userId
            }
        })

        if (!existingTransaction) return res.status(404).json({ message: 'Транзакция не найдена' })

        const { date, title, description, category, currency, amount } = req.body

        const updatedTransaction = await prisma.transaction.update({
            where: { id: transactionId },
            data: {
                date,
                title,
                description,
                category,
                currency,
                amount
            }
        })

        res.json(updatedTransaction)
    } catch (error) {
        console.error('Update transaction error:', error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}

export const deleteTransaction = async (
    req: TypedRequest,
    res: Response
) => {
    try {
        const userId = req.userId
        const transactionId = parseInt(req.params.id || '0')

        if (!userId) return res.status(401).json({ message: 'Пользователь не авторизован' })
        if (!transactionId) return res.status(400).json({ message: 'Айди транзакции обязателен' })

        const existingTransaction = await prisma.transaction.findFirst({
            where: {
                id: transactionId,
                userId
            }
        })

        if (!existingTransaction) return res.status(404).json({ message: 'Транзакция не найдена' })

        await prisma.transaction.delete({
            where: { id: transactionId }
        })

        res.status(204).send()
    } catch (error) {
        console.error('Delete transaction error:', error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}