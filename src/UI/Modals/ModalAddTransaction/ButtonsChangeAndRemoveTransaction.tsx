import { ModalDeleteTransactionButtonChange } from "../ModalChangeTransaction/ModalChangeTransactionButtonChange"
import { ModalDeleteTransactionButtonDelete } from "../ModalDeleteTransaction/ModalDeleteTransactionButtonDelete"

type ButtonsChangeAndRemoveTransactionProps = {
    actions: () => void
    onDeleteClick: () => void
    onChangeClick: () => void
}

export function ButtonsChangeAndRemoveTransaction(props: ButtonsChangeAndRemoveTransactionProps) {
    return (
        <div className="flex gap-2 justify-center">
            <ModalDeleteTransactionButtonDelete onDeleteClick={props.onDeleteClick} />
            <ModalDeleteTransactionButtonChange onChangeClick={props.onChangeClick} />
        </div>
    )
}