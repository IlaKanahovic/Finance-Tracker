import { getCurrencySymbol } from "../assets/static-files/getCurrencySymbol";
import type { TransactionFormData } from "../BLL/transactions/useFormTransations";
import { getTokenToLS, type GetTransactions } from "./api";

export const handleChange = (
    transactionsValueForm: TransactionFormData,
    data: GetTransactions,
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

        const changeTransaction = {
            date: data.date,
            title: transactionsValueForm.handleTitleChange,
            description: transactionsValueForm.handleDescriptionChange,
            category: transactionsValueForm.handleCategoryChange,
            currency: transactionsValueForm.handleCurrencyChange,
            amount: currencySymbol + indicator() + transactionsValueForm.handleAmountChange,
        }

        fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/transactions/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getTokenToLS()
            },
            body: JSON.stringify(changeTransaction)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refreshTransactions()
                onClose()
            })
            .catch(er => console.log('ERROR CHANGE', er))
    }
}