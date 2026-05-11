import { FaPen } from "react-icons/fa";


export function ModalDeleteTransactionButtonChange() {
    return (
        <button
            className="border border-gray-600 p-1.5 duration-300 hover:bg-gray-800 hover:border-white 
        cursor-pointer"
        >
            <FaPen />
        </button>
    )
}