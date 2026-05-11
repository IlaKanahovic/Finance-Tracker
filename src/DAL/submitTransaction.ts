import type { TransactionFormData } from "../BLL/useFormTransations";

export const handleSubmit = (
    transactionsValueForm: TransactionFormData,
    onClose: () => void
) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const indicator = () => {
            const ind = Number(transactionsValueForm.handleAmountChange);
            return ind > 0 ? '+' : ind < 0 ? '-' : '';
        }

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
            amount: indicator() + '$' + transactionsValueForm.handleAmountChange,
        }

        fetch('http://localhost:3001/transactions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTransaction)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                onClose()
            })
            .catch(er => console.error('Error:', er))
    }
}