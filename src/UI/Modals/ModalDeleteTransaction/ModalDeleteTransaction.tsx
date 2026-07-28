import { useTranslation } from "react-i18next"
import { handleDeleteTransaction } from "../../../DAL/transactions/deleteTransaction"

type ModalDeleteTransactionProps = {
    dataId: string
    onClose: () => void
    refreshTransactions: () => void
}

export function ModalDeleteTransaction(props: ModalDeleteTransactionProps) {
    const { t } = useTranslation()

    return (
        <div className="fixed inset-0 bg-(--bg)/80 flex items-center justify-center z-50">
            <div className="bg-(--bg) border border-[#333333] rounded-2xl px-15 pt-10 pb-15 w-full max-w-2xl shadow-2xl flex justify-center items-center">
                <div>
                    <h1 className="text-2xl text-(--text-main)">{t('delete_question')}</h1>
                    <div className="mt-8 flex justify-center items-center">
                        <button
                            type="button"
                            onClick={() => props.onClose()}
                            className="cursor-pointer bg-transparent border border-(--border-header-buttons) text-(--text-main) text-base font-medium p-3 px-15 rounded-lg hover:border-(--border-header-buttons-hover) hover:bg-(--text-expenses-item-hover) transition-all mr-4"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            onClick={() => {
                                handleDeleteTransaction(props.dataId, props.refreshTransactions)
                                props.onClose()
                            }}
                            className="cursor-pointer bg-(--black-ili-white) text-(--bg) text-base font-medium p-3 px-15 rounded-lg hover:opacity-80 transition-all"
                        >
                            {t('delete')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}