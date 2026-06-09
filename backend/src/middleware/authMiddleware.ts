import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(401).json({ message: 'Нет токена авторизации' })

    const token = authHeader.split(' ')[1]

    if (!token) return res.status(401).json({ message: 'Токен не передан' })

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string }
            ; (req as any).userId = decoded.userId
        next()
    } catch (error) {
        return res.status(403).json({ message: 'Токен невалидный или просрочен' })
    }
}