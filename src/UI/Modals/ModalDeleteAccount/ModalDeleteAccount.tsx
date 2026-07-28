import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { deleteAccount } from "../../../DAL/authRequests"
import { logout } from "../../../store/authStore"

type Props = {
    onClose: () => void
}

export function ModalDeleteAccount(props: Props) {
    const { t } = useTranslation()

    const handleDeleteAccount = async () => {
        await deleteAccount()
        logout()
        toast.success(t('toast_account_deleted'))
    }

    return (
        <div className="fixed inset-0 bg-(--bg)/80 flex items-center justify-center z-50">
            <div className="bg-(--bg) border border-(--border-header-buttons) rounded-2xl px-15 pt-10 pb-15 w-full max-w-2xl shadow-2xl">
                <div className="w-full">
                    <h1 className="text-2xl text-(--text-main) text-center">{t('delete_account')}</h1>
                    <p className="text-sm text-(--text-secondary) text-center mt-4 border-l-2 border-red-500/30 pl-3 max-w-md mx-auto">
                        {t('delete_account_info')}
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
                            onClick={() => handleDeleteAccount()}
                            className="cursor-pointer bg-red-600 text-white text-base font-medium p-3 px-15 rounded-lg hover:bg-red-700 transition-all"
                        >
                            {t('delete_account')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}