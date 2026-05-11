import { useFormTransations } from "../../../BLL/useFormTransations"
import { handleSubmit } from "../../../DAL/submitTransaction"
import { ModalAmountInput } from "./Modal-Inputs-Form/ModalAmountInput"
import { ModalCategoryListInput } from "./Modal-Inputs-Form/ModalCategoryListInput"
import { ModalDescriptionInput } from "./Modal-Inputs-Form/ModalDescriptionInput"
import { ModalTitleInput } from "./Modal-Inputs-Form/ModalTitleInput"
import { ModalButtonsForm, type Props } from "./ModalButtonsForm"


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