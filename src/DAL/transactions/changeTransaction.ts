import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation()

    const datalink = import.meta.env.VITE_API_URL

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

        fetch(`${datalink}/transactions/${data.id}`, {
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
                toast.success(t('toast_transaction_updated'))
                refreshTransactions()
                onClose()
            })
            .catch(er => {
                console.log('ERROR CHANGE', er)
                toast.error(er.message || t('toast_transaction_update_error'))
            })
    }
}