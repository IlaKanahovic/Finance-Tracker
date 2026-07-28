import { useNavigate } from "react-router-dom"
import { deleteAllTransactions } from "../../../DAL/transactions/deleteAllTransactions"
import { useTranslation } from "react-i18next"
import toast from "react-hot-toast"

type Props = {
    onClose: () => void
}

export function ModalDeleteAllTransactions(props: Props) {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleDeleteTransactions = async () => {
        try {
            await deleteAllTransactions()
            toast.success(t('toast_all_deleted'))
            props.onClose()
            navigate('/')
        } catch {
            toast.error(t('toast_all_delete_error'))
        }
    }

    return (
        <div className="fixed inset-0 bg-(--bg)/80 flex items-center justify-center z-50">
            <div className="bg-(--bg) border border-(--border-header-buttons) rounded-2xl px-15 pt-10 pb-15 w-full max-w-2xl shadow-2xl">
                <div className="w-full">
                    <h1 className="text-2xl text-(--text-main) text-center">{t('delete_all_transactions')}</h1>
                    <p className="text-sm text-(--text-main) text-center mt-4 border-l-2 border-(--border-header-buttons) pl-3 max-w-md mx-auto">
                        {t('all_delete_question')}
                    </p>
                    <div className="mt-8 flex justify-center items-center gap-4">
                        <button
                            type="button"
                            onClick={() => props.onClose()}
                            className="cursor-pointer bg-transparent border border-(--border-header-buttons) text-(--text-main) text-base font-medium p-3 px-15 rounded-lg hover:border-(--border-header-buttons-hover) hover:bg-(--text-expenses-item-hover) transition-all"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleDeleteTransactions()}
                            className="cursor-pointer bg-red-600 text-white text-base font-medium p-3 px-15 rounded-lg hover:bg-red-700 transition-all"
                        >
                            {t('delete_all')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}