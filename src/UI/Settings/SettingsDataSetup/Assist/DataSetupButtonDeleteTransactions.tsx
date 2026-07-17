import { useState } from "react"
import { ModalDeleteAllTransactions } from "../../../Modals/ModalDeleteAllTransactions/ModalDeleteAllTransactions"
import { useTranslation } from "react-i18next"

export function DataSetupButtonDeleteTransactions() {
    const [openModal, setOpenModal] = useState(false)
    const { t } = useTranslation()

    return (
        <div>
            <div className="mb-4 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('delete_all_transactions')}</span>
            </div>
            <button
                onClick={() => setOpenModal(true)}
                className="px-4 py-1.5 text-sm border border-red-600 rounded-md text-red-400 transition-all duration-300 cursor-pointer hover:border-red-400 hover:text-red-300">
                {t('delete_all_transactions')}
            </button>
            <p className="text-xs text-gray-500 mt-2">{t('action_cannot_undone')}</p>
            {openModal && <ModalDeleteAllTransactions onClose={() => setOpenModal(false)} />}
        </div>
    )
}
