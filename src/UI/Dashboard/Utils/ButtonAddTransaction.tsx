import { FaPlus } from "react-icons/fa6";
import { useButtonTransaction } from "../../../BLL/ui/useButtonAddTransaction";
import { ModalAddTransaction } from "../../Modals/ModalAddTransaction/ModalAddTransaction";
import { useTransactionsStore } from "../../../store/transactionsStore";

export function ButtonAddTransition() {
    const { openModalAddTransaction, setOpenModalAddTransaction } = useButtonTransaction()
    const { loadTransactions } = useTransactionsStore()

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
                refreshTransactions={loadTransactions}
            />}
        </div>
    )
}