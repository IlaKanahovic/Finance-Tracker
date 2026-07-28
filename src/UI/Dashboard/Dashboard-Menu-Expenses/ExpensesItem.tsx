import type { GetTransactions } from "../../../DAL/api"
import { useShowActions } from "../../../BLL/ui/useShowActions"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { useFormattedDate } from "../../../BLL/ui/useFormattedDate"
import { ExpensesItemFullScreen } from "./ExpensesItemFullScreen"

type Props = {
    data: GetTransactions
    refreshTransaction: () => void
}

export function ExpensesItem(props: Props) {
    const { showActions, setShowActions } = useShowActions()
    const { t } = useTranslation()

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
        <div
            key={props.data.id}
            ref={refContainer}
            className="relative p-4 sm:p-0 animate-fade-slide-up"
        >

            {/* mobile */}
            <div className="block sm:hidden relative">
                <div className="space-y-2 cursor-pointer" onClick={() => setShowActions(true)}>
                    <div className="flex justify-between items-start">
                        <span className="text-(--text-expenses-menu) text-xs">{t("date")}</span>
                        <p className="text-(--text-expenses-item) text-sm font-medium"> {useFormattedDate(props.data.date)} </p>
                    </div>
                    <div className="space-y-1 mt-3">
                        <div className="flex justify-between items-start">
                            <span className="text-(--text-expenses-menu) text-xs">{t("description")}</span>
                            <p className="text-(--text-expenses-item) text-sm font-medium text-right max-w-[60%] wrap-break-words">
                                {props.data.title}
                            </p>
                        </div>
                        {props.data.description && (
                            <p className="text-gray-600 text-xs text-right pl-[30%]">
                                {props.data.description}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-(--text-expenses-menu) text-xs">{t("category")}</span>
                        <p className="text-(--text-expenses-item) text-sm">{t(`${props.data.category}`)}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#2a2a2a]">
                        <span className="text-(--text-expenses-menu) text-xs">{t("amount")}</span>
                        <p className="text-(--text-expenses-item) font-mono text-lg font-bold">
                            {props.data.amount}
                        </p>
                    </div>
                </div>
            </div>

            {/* desktop */}
            <div
                className="hidden sm:relative sm:grid sm:grid-cols-[1fr_2fr_1.2fr_1fr] items-center py-3 px-2 border-0 cursor-pointer duration-300 hover:bg-(--text-expenses-item-hover)"
                onClick={() => setShowActions(true)}
            >
                <p className="text-(--text-expenses-item) text-sm truncate">
                    {useFormattedDate(props.data.date)}
                </p>
                <div className="min-w-0">
                    <p className="text-(--text-expenses-item) font-medium text-sm md:text-base truncate">
                        {props.data.title}
                    </p>
                    {props.data.description && (
                        <p className="text-xs text-gray-600 truncate">
                            {props.data.description}
                        </p>
                    )}
                </div>
                <p className="text-(--text-expenses-item) text-sm truncate">
                    {t(`${props.data.category}`)}
                </p>
                <p className="text-(--text-expenses-item) font-mono text-sm truncate text-right justify-self-end">
                    {props.data.amount}
                </p>
            </div>

            {showActions && <ExpensesItemFullScreen
                data={props.data}
                refresh={props.refreshTransaction}
                onClose={() => setShowActions(!showActions)}
            />}
        </div>
    )
}


