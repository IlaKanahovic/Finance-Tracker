import { ModalAmountInput } from "./ModalAmountInput"
import { ModalButtonsForm, type Props } from "./ModalButtonsForm"
import { ModalCategoryListInput } from "./ModalCategoryListInput"
import { ModalDescriptionInput } from "./ModalDescriptionInput"
import { useFormTransations } from "../../BLL/useFormTransations"
import { ModalTitleInput } from "./ModalTitleInput"
import { handleSubmit } from "../../BLL/useSubmitTransaction"

export function ModalFormTransaction(props: Props) {
    const transactionsValueForm = useFormTransations()

    return (
        <form className="space-y-6" onSubmit={handleSubmit(transactionsValueForm, props.onClose)}>
            <ModalTitleInput setTitle={transactionsValueForm.setHandleTitleChange} />
            <ModalDescriptionInput setDesc={transactionsValueForm.setHandleDescriptionChange} />
            <ModalCategoryListInput setCategory={transactionsValueForm.setHandleCategoryChange} />
            <ModalAmountInput setAmount={transactionsValueForm.setHandleAmountChange} />
            <ModalButtonsForm
                isOpen={props.isOpen}
                onClose={props.onClose}
            />
        </form>
    )
}