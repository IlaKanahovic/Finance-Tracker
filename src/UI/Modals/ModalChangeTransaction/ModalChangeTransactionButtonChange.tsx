import { FaPen } from "react-icons/fa";

type ModalDeleteTransactionButtonDeleteProps = {
    onChangeClick: () => void
}

export function ModalDeleteTransactionButtonChange(props: ModalDeleteTransactionButtonDeleteProps) {
    return (
        <button
            type="button"
            className="border border-gray-600 p-1.5 duration-300 hover:bg-gray-800 hover:border-white 
        cursor-pointer"
            onClick={props.onChangeClick}
        >
            <FaPen />
        </button>
    )
}