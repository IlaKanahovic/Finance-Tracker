import { Router } from 'express'
import { createTransaction, deleteTransaction, getTransactions, updateTransaction } from '../controllers/transactionsController'
import { verifyToken } from '../middleware/authMiddleware'

const router = Router()

router.get('/', verifyToken, getTransactions)
router.post('', verifyToken, createTransaction)
router.put('/:id', verifyToken, updateTransaction)
router.delete('/:id', verifyToken, deleteTransaction)

export default router