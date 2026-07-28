import { useNavigate } from "react-router-dom"
import { logout } from "../../../store/authStore"
import { useTranslation } from "react-i18next"
import toast from "react-hot-toast"
import { useState } from "react"
import { ModalDeleteAccount } from "../../Modals/ModalDeleteAccount/ModalDeleteAccount"
import { resetToDefaultSettings } from "../../../store/settingsStore"

export function SettingsFooterSetup() {
    const [openModalDeleteAccount, setOpenModalDeleteAccount] = useState(false)
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleSubmit = () => {
        logout()
        toast.success(t('toast_logout_success'))
        navigate(-1)
    }

    const handleResetToDefault = () => {
        resetToDefaultSettings()
        toast.success(t('toast_reset_default'))
    }

    return (
        <div className="max-w-2xl mx-auto mt-2 pt-2 border-t border-(--border-header-buttons)">
            <div className="flex flex-wrap justify-between gap-3">
                <button onClick={() => navigate('/')} className="px-4 py-1.5 text-sm border border-(--border-header-buttons) rounded-md text-(--text-main) transition-all duration-300 cursor-pointer hover:border-(--border-header-buttons-hover) hover:text-(--text-main)">
                    {t('go_back')}
                </button>
                <button onClick={() => handleResetToDefault()} className="px-4 py-1.5 text-sm border border-(--border-header-buttons) rounded-md text-(--text-main) transition-all duration-300 cursor-pointer hover:border-(--border-header-buttons-hover) hover:text-(--text-main)">
                    {t('reset_default')}
                </button>
                <button onClick={() => { handleSubmit() }} className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                    {t('sign_out')}
                </button>
                <button onClick={() => setOpenModalDeleteAccount(!openModalDeleteAccount)} className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                    {t('delete_account')}
                </button>
            </div>
            <p className="text-xs text-(--text-secondary) mt-3"> {t('deleting_account_requuires')} </p>
            {openModalDeleteAccount && <ModalDeleteAccount onClose={() => setOpenModalDeleteAccount(false)} />}
        </div>
    )
}