import { ModalDeleteTransactionButtonChange } from "../ModalChangeTransaction/ModalChangeTransactionButtonChange"
import { ModalDeleteTransactionButtonDelete } from "../ModalDeleteTransaction/ModalDeleteTransactionButtonDelete"

type ButtonsChangeAndRemoveTransactionProps  = {
    actions: () => void
    onDeleteClick: () => void
}

export function ButtonsChangeAndRemoveTransaction(props: ButtonsChangeAndRemoveTransactionProps ) {
    return (
        <div className="flex absolute bottom-8.5 left-30">
            <ModalDeleteTransactionButtonDelete onDeleteClick={props.onDeleteClick} />
            <ModalDeleteTransactionButtonChange />
        </div>
    )
}