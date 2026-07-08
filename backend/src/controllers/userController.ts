import { Request, Response } from 'express'
import prisma from '../db/prisma'
import bcrypt from 'bcryptjs'

export const changeName = async (req: Request, res: Response) => {
    try {
        const { userName } = req.body

        if (!userName) return res.status(400).json({ message: 'userName обязателен' })
        if (userName.length === 0 || userName.trim().length === 0) return res.status(422).json({ message: 'Введите корректный userName' })

        const user = await prisma.user.findUnique({
            where: { id: (req as any).userId }
        })

        const checkValidUserName = await prisma.user.findFirst({
            where: {
                userName: userName,
                NOT: {
                    id: (req as any).userId
                }
            }
        })
        if (checkValidUserName) return res.status(409).json({ message: 'Пользователь с таким userName уже существует' })

        const userUpdate = await prisma.user.update({
            where: { id: (req as any).userId },
            data: { userName: userName }
        })

        res.json({ userName: userName })

    } catch (error) {
        console.error('Error changeName', error)
        res.status(500).json({ message: 'Error server :(' })
    }
}

export const changeEmail = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const userId = (req as any).userId

        if (!email) return res.status(400).json({ message: 'Email обязателен' })
        if (!password) return res.status(400).json({ message: 'Пароль обязателен' })

        const user = await prisma.user.findUnique({
            where: { id: userId }
        })

        if (!user) return res.status(404).json({ message: 'Пользователь не найден' })
        if (user.email === email) return res.status(400).json({ message: 'Новый email совпадает с текущим' })

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) return res.status(401).json({ message: 'Неверный пароль' })

        const checkValidEmail = await prisma.user.findFirst({
            where: {
                email: email,
                NOT: { id: userId }
            }
        })
        if (checkValidEmail) return res.status(409).json({ message: 'Пользователь с таким email уже существует' })

        const emailUpdate = await prisma.user.update({
            where: { id: userId },
            data: { email: email }
        })

        res.json({ email: email })

    } catch (error) {
        console.error('Error change email', error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}

export const changePassword = async (req: Request, res: Response) => {
    try {
        const { currentPassword, newPassword } = req.body
        const userId = (req as any).userId

        if (!currentPassword) return res.status(400).json({ message: 'Текущий пароль обязателен' })
        if (!newPassword) return res.status(400).json({ message: 'Новый пароль обязателен' })

        const user = await prisma.user.findUnique({
            where: { id: userId }
        })

        if (!user) return res.status(404).json({ message: 'Пользователь нот фаунд' })

        const isSamePassword = await bcrypt.compare(newPassword, user.password)
        if (isSamePassword) return res.status(400).json({ message: 'Новый пароль совпадает с текущим' })

        const validPassword = await bcrypt.compare(currentPassword, user.password)
        if (!validPassword) return res.status(401).json({ message: 'Неверный пароль :(' })

        const hashedPassword = await bcrypt.hash(newPassword, 10)

        const passwordUpdate = await prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword }
        })

        res.json({ newPassword: newPassword })
    } catch (error) {
        console.error('Error change email', error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}