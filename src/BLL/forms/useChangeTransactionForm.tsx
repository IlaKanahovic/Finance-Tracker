import { useState } from "react"
import type { GetTransactions } from "../DAL/api"

export type TransactionFormData = {
    handleTitleChange: string
    handleDescriptionChange: string
    handleCategoryChange: string
    handleCurrencyChange: string
    handleAmountChange: string
}

export function useChangeTransationsForm(transaction: GetTransactions) {
    const [handleTitleChange, setHandleTitleChange] = useState(transaction.title)
    const [handleDescriptionChange, setHandleDescriptionChange] = useState(transaction.description)
    const [handleCategoryChange, setHandleCategoryChange] = useState(transaction.category)
    const [handleCurrencyChange, setHandleCurrencyChange] = useState(transaction.currency)
    const [handleAmountChange, setHandleAmountChange] = useState(transaction.amount.replace(/[^0-9.-]/g, ''))

    return { handleTitleChange, setHandleTitleChange, handleDescriptionChange, setHandleDescriptionChange, handleCategoryChange, setHandleCategoryChange, handleCurrencyChange, setHandleCurrencyChange, handleAmountChange, setHandleAmountChange }
}