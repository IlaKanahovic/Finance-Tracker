import { useState } from "react"

export type TransactionFormData = {
    handleTitleChange: string
    handleDescriptionChange: string
    handleCategoryChange: string
    handleAmountChange: string
}

export function useFormTransations() {
    const [handleTitleChange, setHandleTitleChange] = useState('')
    const [handleDescriptionChange, setHandleDescriptionChange] = useState('')
    const [handleCategoryChange, setHandleCategoryChange] = useState('')
    const [handleAmountChange, setHandleAmountChange] = useState('')

    return { handleTitleChange, setHandleTitleChange, handleDescriptionChange, setHandleDescriptionChange, handleCategoryChange, setHandleCategoryChange, handleAmountChange, setHandleAmountChange }
}