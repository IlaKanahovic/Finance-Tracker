import { useTranslation } from "react-i18next"
import { useButtonTransaction } from "../../../BLL/ui/useButtonAddTransaction"
import { useTransactionsStore } from "../../../store/transactionsStore"
import { ModalAddTransaction } from "../../Modals/ModalAddTransaction/ModalAddTransaction"

export function ButtonFiltersAddTransaction() {
    const { openModalAddTransaction, setOpenModalAddTransaction } = useButtonTransaction()
    const { loadTransactions } = useTransactionsStore()
    const { t } = useTranslation()

    return (
        <div>
            <div className="px-3 py-1.5 border border-(--border-filter-buttons) text-sm duration-300 font-medium 
        text-gray-700 hover:text-(--black-ili-white) hover:border-(--black-ili-white) cursor-pointer"
                onClick={() => {
                    setOpenModalAddTransaction(true)
                }}
            >
                {t('new_transaction')}
            </div>
            {openModalAddTransaction && <ModalAddTransaction
                isOpen={openModalAddTransaction}
                onClose={() => setOpenModalAddTransaction(false)}
                refreshTransactions={loadTransactions}
            />}
        </div>
    )
}