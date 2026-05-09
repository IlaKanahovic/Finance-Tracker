import { FaPlus } from "react-icons/fa6";
import { ModalAddTransaction } from "../../ModalAddTransaction/ModalAddTransaction";
import { useButtonTransaction } from "../../../BLL/useButtonAddTransaction";

export function ButtonAddTransition() {
    const { openModalAddTransaction, setOpenModalAddTransaction } = useButtonTransaction()

    return (
        <div>
            <div className="p-4 w-16 h-16 mt-30 bg-(--card-bg) flex justify-center 
        items-center duration-300 border border-(--card-bg)
        hover:border-white ml-auto cursor-pointer"
                onClick={() => {
                    setOpenModalAddTransaction(true)
                }}
            >
                <FaPlus />
            </div>
            {openModalAddTransaction && <ModalAddTransaction
                isOpen={openModalAddTransaction}
                onClose={() => setOpenModalAddTransaction(false)}
            />}
        </div>
    )
}