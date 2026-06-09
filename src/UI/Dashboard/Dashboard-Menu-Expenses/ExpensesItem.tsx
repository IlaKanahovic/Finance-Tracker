import type { GetTransactions } from "../../../DAL/api"
import { ButtonsChangeAndRemoveTransaction } from "../../Modals/ModalAddTransaction/ButtonsChangeAndRemoveTransaction"
import { ModalDeleteTransaction } from "../../Modals/ModalDeleteTransaction/ModalDeleteTransaction"
import { useShowActions } from "../../../BLL/ui/useShowActions"
import { useShowDeleteModal } from "../../../BLL/ui/useShowDeleteModal"
import { ModalChangeTransaction } from "../../Modals/ModalChangeTransaction/ModalChangeTransaction"
import { useShowChangeModal } from "../../../BLL/ui/useShowChangeModal"
import { useEffect, useRef } from "react"

type Props = {
    data: GetTransactions
    refreshTransaction: () => void
}

export function ExpensesItem(props: Props) {
    const { showActions, setShowActions } = useShowActions()
    const { showDeleteModal, setShowDeleteModal } = useShowDeleteModal()
    const { showChangeModal, setShowChangeModal } = useShowChangeModal()

    const refContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (refContainer.current && !refContainer.current.contains(event.target as Node)) {
                setShowActions(false)
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    return (
        <div key={props.data.id} ref={refContainer} className="relative p-4 sm:p-0">

            {/* mobile */}
            <div className="block sm:hidden relative">
                {showActions && (
                    <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center gap-4 z-10">
                        <ButtonsChangeAndRemoveTransaction
                            actions={() => setShowActions(false)}
                            onDeleteClick={() => {
                                setShowActions(false)
                                setShowDeleteModal(true)
                            }}
                            onChangeClick={() => {
                                setShowActions(false)
                                setShowChangeModal(true)
                            }}
                        />
                    </div>
                )}
                <div className="space-y-2 cursor-pointer" onDoubleClick={() => setShowActions(true)}>
                    <div className="flex justify-between items-start">
                        <span className="text-gray-400 text-xs">DATE</span>
                        <p className="text-white text-sm font-medium">{props.data.date}</p>
                    </div>
                    <div className="space-y-1 mt-3">
                        <div className="flex justify-between items-start">
                            <span className="text-gray-400 text-xs">DESCRIPTION</span>
                            <p className="text-white text-sm font-medium text-right max-w-[60%] wrap-break-words">
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
            </div>

            {/* desktop */}
            <div
                className="hidden sm:relative sm:grid sm:grid-cols-[1fr_2fr_1.2fr_1fr] items-center py-3 px-2 cursor-pointer"
                onDoubleClick={() => setShowActions(true)}
            >
                {showActions && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 rounded-lg z-10">
                        <ButtonsChangeAndRemoveTransaction
                            actions={() => setShowActions(false)}
                            onDeleteClick={() => {
                                setShowActions(false)
                                setShowDeleteModal(true)
                            }}
                            onChangeClick={() => {
                                setShowActions(false)
                                setShowChangeModal(true)
                            }}
                        />
                    </div>
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
                    refreshTransactions={props.refreshTransaction}
                />
            )}

            {showChangeModal && (
                <ModalChangeTransaction
                    data={props.data}
                    onClose={() => setShowChangeModal(false)}
                    refreshTransactions={props.refreshTransaction}
                />
            )}
        </div>
    )
}


