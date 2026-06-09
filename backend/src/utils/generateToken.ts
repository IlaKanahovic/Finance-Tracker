import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!

export const generateToken = (userId: number, email: string): string => {
    return jwt.sign( { userId, email }, JWT_SECRET, { expiresIn: '24h' } )
}