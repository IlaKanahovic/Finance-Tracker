import type { GetTransactions } from "../../../DAL/api"
import { ButtonsChangeAndRemoveTransaction } from "../../Modals/ModalAddTransaction/ButtonsChangeAndRemoveTransaction"
import { ModalDeleteTransaction } from "../../Modals/ModalDeleteTransaction/ModalDeleteTransaction"
import { useShowActions } from "../../../BLL/useShowActions"
import { useShowDeleteModal } from "../../../BLL/useShowDeleteModal"

type Props = {
    data: GetTransactions
}

export function ExpensesItem(props: Props) {
    const { showActions, setShowActions } = useShowActions()
    const { showDeleteModal, setShowDeleteModal } = useShowDeleteModal()

    return (
        <div key={props.data.id} className="p-4 sm:p-0">
            {/* mobile */}
            <div className="block sm:hidden space-y-2 cursor-pointer">
                <div className="flex justify-between items-start">
                    <span className="text-gray-400 text-xs">DATE</span>
                    <p className="text-white text-sm font-medium">{props.data.date}</p>
                </div>
                <div className="space-y-1 mt-3">
                    <div className="flex justify-between items-start">
                        <span className="text-gray-400 text-xs">DESCRIPTION</span>
                        <p className="text-white text-sm font-medium text-right max-w-[60%] wrap-break-word">
                            {props.data.title}
                        </p>
                    </div>
                    {props.data.description && (
                        <p className="text-gray-500 text-xs text-right pl-[30%]">
                            {props.data.description}
                        </p>
                    )}
                </div>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-400 text-xs">CATEGORY</span>
                    <p className="text-white/70 text-sm">{props.data.category}</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#2a2a2a]">
                    <span className="text-gray-400 text-xs">AMOUNT</span>
                    <p className="text-white font-mono text-lg font-bold">
                        {props.data.amount}
                    </p>
                </div>
            </div>

            {/* desktop */}
            <div
                className="hidden relative sm:grid sm:grid-cols-[1fr_2fr_1.2fr_1fr] items-center py-3 px-2 cursor-pointer"
                onDoubleClick={() => setShowActions(true)}
            >
                {showActions && (
                    <ButtonsChangeAndRemoveTransaction
                        actions={() => setShowActions(false)}
                        onDeleteClick={() => {
                            setShowActions(false)
                            setShowDeleteModal(true)
                        }}
                    />
                )}
                <p className="text-white text-sm truncate">
                    {props.data.date}
                </p>
                <div className="min-w-0">
                    <p className="text-white font-medium text-sm md:text-base truncate">
                        {props.data.title}
                    </p>
                    {props.data.description && (
                        <p className="text-xs text-gray-500 truncate">
                            {props.data.description}
                        </p>
                    )}
                </div>
                <p className="text-white/80 text-sm truncate">
                    {props.data.category}
                </p>
                <p className="text-white font-mono text-sm truncate text-right justify-self-end">
                    {props.data.amount}
                </p>
            </div>

            {showDeleteModal && (
                <ModalDeleteTransaction
                    dataId={props.data.id}
                    onClose={() => setShowDeleteModal(false)}
                />
            )}
        </div>
    )
}