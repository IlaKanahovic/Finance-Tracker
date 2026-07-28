import { FaPen } from "react-icons/fa";

type ModalDeleteTransactionButtonDeleteProps = {
    onChangeClick: () => void
}

export function ModalDeleteTransactionButtonChange(props: ModalDeleteTransactionButtonDeleteProps) {
    return (
        <button
            type="button"
            className="group border border-[#333333] p-6 rounded-lg duration-300 hover:border-(--border-header-buttons-hover) hover:bg-(--text-expenses-item-hover) cursor-pointer transition-all"
            onClick={props.onChangeClick}
        >
            <FaPen className="w5 h-5 text-gray-400 group-hover:text-(--border-header-buttons-hover) transition-colors" />
        </button>
    )
}