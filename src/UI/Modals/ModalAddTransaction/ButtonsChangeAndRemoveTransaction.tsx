import { ModalDeleteTransactionButtonChange } from "../ModalChangeTransaction/ModalChangeTransactionButtonChange"
import { ModalDeleteTransactionButtonDelete } from "../ModalDeleteTransaction/ModalDeleteTransactionButtonDelete"
import { ModalCloseTransactionScreen } from "./ModalCloseTransactionScreen"

type ButtonsChangeAndRemoveTransactionProps = {
    actions: () => void
    onDeleteClick: () => void
    onChangeClick: () => void
    onCloseClick: () => void
}

export function ButtonsChangeAndRemoveTransaction(props: ButtonsChangeAndRemoveTransactionProps) {
    return (
        <div className="flex gap-2 justify-center">
            <ModalCloseTransactionScreen onCloseClick={props.onCloseClick} />
            <ModalDeleteTransactionButtonDelete onDeleteClick={props.onDeleteClick} />
            <ModalDeleteTransactionButtonChange onChangeClick={props.onChangeClick} />
        </div>
    )
}