import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useShowDeleteModal } from "../../../BLL/ui/useShowDeleteModal";
import { useShowChangeModal } from "../../../BLL/ui/useShowChangeModal";
import { ModalDeleteTransaction } from "../../Modals/ModalDeleteTransaction/ModalDeleteTransaction";
import { ModalChangeTransaction } from "../../Modals/ModalChangeTransaction/ModalChangeTransaction";
import type { GetTransactions } from "../../../DAL/api";
import { ButtonsChangeAndRemoveTransaction } from "../../Modals/ModalAddTransaction/ButtonsChangeAndRemoveTransaction";

type Props = {
    data: GetTransactions
    refresh: () => void
    onClose: () => void
}

export function ExpensesItemFullScreen(props: Props) {
    const { t } = useTranslation()
    const { showDeleteModal, setShowDeleteModal } = useShowDeleteModal()
    const { showChangeModal, setShowChangeModal } = useShowChangeModal()

    return (
        <div className="fixed inset-0 z-50 bg-(--bg) flex items-center justify-center p-6.25 ">
            <div className="bg-(--card-bg) border border-[#333333] rounded-2xl w-full h-full max-h-full shadow-2xl scrollbar-hide overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-[#333333]">
                    <h2 className="text-xl font-semibold text-(--text-main)">
                        {t('transaction_details')}
                    </h2>
                    <button className="text-gray-400 hover:text-(--border-header-buttons-hover) transition-colors duration-300 cursor-pointer">
                        <FaTimes className="w-5 h-5" onClick={() => props.onClose()} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <p className="text-3xl font-bold text-(--text-expenses-item)">
                                {props.data.amount}
                            </p>
                            <p className="text-sm text-gray-600">
                                {t('category')}: <span className="text-(--text-expenses-item)">{t(`${props.data.category}`)}</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-(--text-expenses-item)">
                                {props.data.date}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-600">{t('title')}</p>
                        <p className="text-lg text-(--text-expenses-item) font-medium">
                            {props.data.title}
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-600">{t('description')}</p>
                        <div className="bg-(--bg) border border-[#333333] rounded-xl p-4 min-h-25 text-(--text-expenses-item) text-sm leading-relaxed">
                            {props.data.description || t('no_description')}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#333333]">
                        <div>
                            <p className="text-xs text-gray-600">{t('currency')}</p>
                            <p className="text-sm text-(--text-expenses-item) font-mono">{props.data.currency}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-600">{t('date')}</p>
                            <p className="text-sm text-(--text-expenses-item)">{props.data.date}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-600">ID</p>
                            <p className="text-sm text-(--text-expenses-item) font-mono truncate">{props.data.id}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-600">{t('status')}</p>
                            <span className="inline-block px-2 py-0.5 text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/30 rounded-full">
                                {t('completed')}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#333333]">
                        <ButtonsChangeAndRemoveTransaction
                            actions={() => props.onClose}
                            onCloseClick={() => props.onClose()}
                            onDeleteClick={() => {
                                props.onClose
                                setShowDeleteModal(true)
                            }}
                            onChangeClick={() => {
                                props.onClose
                                setShowChangeModal(true)
                            }}
                        />
                    </div>
                </div>
            </div>

            {showDeleteModal && (
                <ModalDeleteTransaction
                    dataId={props.data.id}
                    onClose={() => setShowDeleteModal(false)}
                    refreshTransactions={props.refresh}
                />
            )}

            {showChangeModal && (
                <ModalChangeTransaction
                    data={props.data}
                    onClose={() => setShowChangeModal(false)}
                    refreshTransactions={props.refresh}
                />
            )}
        </div>
    )
}