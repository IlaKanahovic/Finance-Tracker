import { ModalChangeTitleInput } from "./ModalChangeInputsTransaction/ModalChangeTitleInput";
import { ModalChangeDescInput } from "./ModalChangeInputsTransaction/ModalChangeDescInput";
import { ModalChangeCategotyInput } from "./ModalChangeInputsTransaction/ModalChangeCategoryInput";
import { ModalChangeAmountInput } from "./ModalChangeInputsTransaction/ModalChangeAmountInput";
import { ModalChangeButtonsForm } from "./ModalChangeInputsTransaction/ModalChangeButtonsForm";
import { useChangeTransationsForm } from "../../../BLL/useChangeTransactionForm";
import { handleChange } from "../../../DAL/changeTransaction";
import type { GetTransactions } from "../../../DAL/api";
import { ModalChangeCurrencyInput } from "./ModalChangeInputsTransaction/ModalChangeCurrencyInput";

type ModalDeleteTransactionProps = {
    data: GetTransactions
    onClose: () => void
}

export function ModalChangeTransaction(props: ModalDeleteTransactionProps) {
    const transactionsValueForm = useChangeTransationsForm(props.data)

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#0A0A0A] border border-[#333333] rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
                <div>
                    <h1 className="text-2xl text-white mb-8">Сhange the transaction</h1>
                    <form onSubmit={handleChange(transactionsValueForm, props.data, props.onClose)}>
                        <ModalChangeTitleInput setTitle={transactionsValueForm.setHandleTitleChange} title={transactionsValueForm.handleTitleChange}/>
                        <ModalChangeDescInput setDesc={transactionsValueForm.setHandleDescriptionChange} description={transactionsValueForm.handleDescriptionChange}/>
                        <ModalChangeCategotyInput setCategory={transactionsValueForm.setHandleCategoryChange} category={transactionsValueForm.handleCategoryChange}/>
                        <ModalChangeCurrencyInput setCurrency={transactionsValueForm.setHandleCurrencyChange} currency={transactionsValueForm.handleCurrencyChange}/>
                        <ModalChangeAmountInput setAmount={transactionsValueForm.setHandleAmountChange} amount={transactionsValueForm.handleAmountChange}/>
                        <ModalChangeButtonsForm onClose={props.onClose} />
                    </form>
                </div>
            </div>
        </div>
    )
}