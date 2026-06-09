import { handleDeleteTransaction } from "../../../DAL/deleteTransaction"


type ModalDeleteTransactionProps = {
    dataId: string
    onClose: () => void
    refreshTransactions: () => void
} 

export function ModalDeleteTransaction(props: ModalDeleteTransactionProps ) {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#0A0A0A] border border-[#333333] rounded-2xl px-15 pt-10 pb-15 w-full max-w-2xl shadow-2xl flex justify-center items-center">
                <div>
                    <h1 className="text-2xl text-white">Are you sure you want to delete this transaction?</h1>
                    <div className="mt-8 flex justify-center items-center">
                        <button
                            type="button"
                            onClick={() => props.onClose()}
                            className="cursor-pointer bg-transparent border border-[#333333] text-white text-base font-medium p-3 px-15 rounded-lg hover:border-white hover:bg-white/5 transition-all mr-4"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                handleDeleteTransaction(props.dataId, props.refreshTransactions)
                                props.onClose()
                            }}
                            className="cursor-pointer bg-white text-black text-base font-medium p-3 px-15 rounded-lg hover:bg-gray-200 transition-all"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}