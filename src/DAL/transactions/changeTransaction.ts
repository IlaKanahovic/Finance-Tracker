import { getCurrencySymbol } from "../../assets/static-files/getCurrencySymbol";
import type { TransactionFormData } from "../../BLL/transactions/useFormTransations";
import { getTokenToLS, type GetTransactions } from "../api";
import toast from "react-hot-toast";

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

        fetch(`https://finance-tracker-backend-production-e1c9.up.railway.app/api/transactions/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getTokenToLS()
            },
            body: JSON.stringify(changeTransaction)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                toast.success('Транзакция обновлена')
                refreshTransactions()
                onClose()
            })
            .catch(er => {
                console.log('ERROR CHANGE', er)
                toast.error(er.message || 'Ошибка при обновлении транзакции')
            })
    }
}