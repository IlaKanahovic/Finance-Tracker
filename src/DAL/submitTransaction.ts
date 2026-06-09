import { getCurrencySymbol } from "../assets/static-files/getCurrencySymbol";
import type { TransactionFormData } from "../BLL/transactions/useFormTransations";
import { getTokenToLS } from "./api";

export const handleSubmit = (
    transactionsValueForm: TransactionFormData,
    onClose: () => void,
    refreshTransactions: () => void 
) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const indicator = () => {
            const ind = Number(transactionsValueForm.handleAmountChange);
            return ind > 0 ? '+' : '';
        }

        const currencySymbol = getCurrencySymbol(transactionsValueForm.handleCurrencyChange)

        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })

        const newTransaction = {
            date: formattedDate,
            title: transactionsValueForm.handleTitleChange,
            description: transactionsValueForm.handleDescriptionChange,
            category: transactionsValueForm.handleCategoryChange,
            currency: transactionsValueForm.handleCurrencyChange,
            amount: currencySymbol + indicator() + transactionsValueForm.handleAmountChange
        }

        fetch('http://localhost:3001/api/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getTokenToLS()
            },
            body: JSON.stringify(newTransaction)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refreshTransactions() 
                onClose()
            })
            .catch(er => console.error('Error submit:', er))
    }
}