import { Router } from 'express'
import { register, login } from '../controllers/authController'
import { changeEmail, changeName, changePassword } from '../controllers/userController'
import { verifyToken } from '../middleware/authMiddleware'
import { deleteAllTransactions } from '../controllers/transactionsController'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.patch('/user', verifyToken, changeName)
router.patch('/email', verifyToken, changeEmail)
router.patch('/password', verifyToken, changePassword)
router.delete('/delete', verifyToken, deleteAllTransactions)

export default router