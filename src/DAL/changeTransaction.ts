import { getCurrencySymbol } from "../assets/static-files/getCurrencySymbol";
import type { TransactionFormData } from "../BLL/useChangeTransactionForm";
import type { GetTransactions } from "./api";

export const handleChange = (
    transactionsValueForm: TransactionFormData,
    data: GetTransactions,
    onClose: () => void
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

        fetch(`http://localhost:3001/transactions/${data.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(changeTransaction)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                onClose()
            })
            .catch(er => console.log('ERROR CHANGE', er))
    }
}