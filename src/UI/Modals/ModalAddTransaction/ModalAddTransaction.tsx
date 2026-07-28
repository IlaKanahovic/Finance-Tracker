import { FaBookOpen } from "react-icons/fa";
import { ModalFormTransaction } from "./ModalFormTransaction";
import { useTranslation } from "react-i18next";

type Props = {
    isOpen: boolean
    onClose: () => void
    refreshTransactions: () => void
}

export function ModalAddTransaction(props: Props) {
    const { t } = useTranslation()

    return (
        <div className="fixed inset-0 bg-(--bg)/80 flex items-center justify-center z-50">
            <div className="bg-(--bg) border border-[#333333] rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-normal text-(--text-main) tracking-tight">
                        {t('new_transaction')}
                    </h1>
                    <FaBookOpen className="text-4xl transition-colors" />
                </div>

                <ModalFormTransaction
                    isOpen={props.isOpen}
                    onClose={props.onClose}
                    refreshTransactions={props.refreshTransactions}
                />
            </div>
        </div>
    )
}

