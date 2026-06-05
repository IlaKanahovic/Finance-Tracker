import { useState } from "react"

export type TransactionFormData = {
    handleTitleChange: string
    handleDescriptionChange: string
    handleCategoryChange: string
    handleCurrencyChange: string
    handleAmountChange: string
}

export function useFormTransations() {
    const [handleTitleChange, setHandleTitleChange] = useState('')
    const [handleDescriptionChange, setHandleDescriptionChange] = useState('')
    const [handleCategoryChange, setHandleCategoryChange] = useState('')
    const [handleCurrencyChange, setHandleCurrencyChange] = useState('')
    const [handleAmountChange, setHandleAmountChange] = useState('')

    return { handleTitleChange, setHandleTitleChange, handleDescriptionChange, setHandleDescriptionChange, handleCategoryChange, setHandleCategoryChange, handleCurrencyChange, setHandleCurrencyChange, handleAmountChange, setHandleAmountChange }
}