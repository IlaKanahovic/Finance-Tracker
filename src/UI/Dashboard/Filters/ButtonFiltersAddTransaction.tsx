import { useButtonTransaction } from "../../../BLL/ui/useButtonAddTransaction"
import { useTransactionsStore } from "../../../store/transactionsStore"
import { ModalAddTransaction } from "../../Modals/ModalAddTransaction/ModalAddTransaction"

export function ButtonFiltersAddTransaction() {
    const { openModalAddTransaction, setOpenModalAddTransaction } = useButtonTransaction()
    const { loadTransactions } = useTransactionsStore()

    return (
        <div>
            <div className="px-3 py-1.5 border border-[#2a2a2a] text-sm duration-300 font-medium
            text-gray-700 hover:text-white hover:border-gray-100 cursor-pointer"
                onClick={() => {
                    setOpenModalAddTransaction(true)
                }}
            >
                New Transaction
            </div>
            {openModalAddTransaction && <ModalAddTransaction
                isOpen={openModalAddTransaction}
                onClose={() => setOpenModalAddTransaction(false)}
                refreshTransactions={loadTransactions}
            />}
        </div>
    )
}