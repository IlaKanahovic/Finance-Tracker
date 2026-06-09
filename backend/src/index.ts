import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import transactionsRoutes from './routes/transactionsRoutes'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' })
})

app.use('/api', authRoutes)
app.use('/api/transactions', transactionsRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})