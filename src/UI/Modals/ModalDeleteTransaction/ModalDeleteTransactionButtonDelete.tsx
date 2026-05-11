import { RiDeleteBinLine } from "react-icons/ri"

type ModalDeleteTransactionButtonDeleteProps = {
    onDeleteClick: () => void
}

export function ModalDeleteTransactionButtonDelete(props: ModalDeleteTransactionButtonDeleteProps) {
    return (
        <button
            type="button"
            className="border border-gray-600 p-1.5 duration-300 hover:bg-gray-800 hover:border-white cursor-pointer"
            onClick={props.onDeleteClick}
        >
            <RiDeleteBinLine />
        </button>
    )
}