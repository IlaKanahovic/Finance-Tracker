import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import prisma from '../db/prisma'
import { generateToken } from '../utils/generateToken'

export const register = async (reg: Request, res: Response) => {
    try {
        const { email, userName, password } = reg.body

        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) return res.status(400).json({ message: "Пользователя с таким email уже существует" })

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({
            data: {
                email,
                userName,
                password: hashedPassword
            }
        })

        res.status(201).json({
            message: 'Пользователь создан отлично!',
            user: {
                id: newUser.id,
                email: newUser.email,
                userName: newUser.userName
            }
        })

    } catch (error) {
        console.error('Error registr:' + error)
        res.status(500).json({ message: 'Error server :(' })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) return res.status(401).json({ message: 'Пароль или email неверный, поменяй' })

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) return res.status(401).json({ message: 'Пароль или email неверный, поменяй' })


        const token = generateToken(user.id, user.email)

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                userName: user.userName
            }
        })

    } catch (error) {
        console.error('Error login:' + error)
        res.status(500).json({ message: 'Error server :(' })
    }
}