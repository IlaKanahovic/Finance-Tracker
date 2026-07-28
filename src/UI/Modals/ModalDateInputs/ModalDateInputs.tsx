import { IoCalendarOutline } from "react-icons/io5";
import { filterByData } from "../../../store/filterStore";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
    onClose: () => void
}

export function ModalDateInputs(props: Props) {
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const { t } = useTranslation()

    return (
        <div className="fixed inset-0 bg-(--bg)/80 flex items-center justify-center z-50">
            <div className="bg-(--bg) border border-(--border-header-buttons) rounded-2xl px-15 pt-10 pb-15 w-full max-w-2xl shadow-2xl flex justify-center items-center">
                <div className="w-full">
                    <h1 className="text-2xl text-(--text-main) text-center">{t('select_date_range')}</h1>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
                        <div className="w-full sm:w-auto relative">
                            <label className="block text-sm text-(--text-main) mb-2">{t('date_from')}</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    onChange={(event) => {
                                        setDateFrom(event.target.value)
                                    }}
                                    className="w-full bg-(--bg) border border-(--border-header-buttons) rounded-lg px-4 py-3 text-(--text-main) text-base focus:outline-none focus:border-(--border-header-buttons-hover) transition-colors [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none cursor-pointer"
                                />
                                <IoCalendarOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-main) pointer-events-none w-5 h-5" />
                            </div>
                        </div>
                        <div className="w-full sm:w-auto relative">
                            <label className="block text-sm text-(--text-main) mb-2">{t('date_to')}</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    onChange={(event) => {
                                        setDateTo(event.target.value)
                                    }}
                                    className="w-full bg-(--bg) border border-(--border-header-buttons) rounded-lg px-4 py-3 text-(--text-main) text-base focus:outline-none focus:border-(--border-header-buttons-hover) transition-colors [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none cursor-pointer"
                                />
                                <IoCalendarOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-main) pointer-events-none w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center items-center gap-4">
                        <button
                            type="button"
                            onClick={() => { props.onClose() }}
                            className="cursor-pointer bg-transparent border border-(--border-header-buttons) text-(--text-main) text-base font-medium p-3 px-15 rounded-lg hover:border-(--border-header-buttons-hover) hover:bg-(--text-expenses-item-hover) transition-all"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                if (dateFrom === '' || dateTo === '') {
                                    alert('Select a date range')
                                } else {
                                    filterByData('custom', dateFrom, dateTo)
                                }
                                props.onClose()
                            }}
                            className="cursor-pointer bg-(--black-ili-white) text-(--bg) text-base font-medium p-3 px-15 rounded-lg hover:opacity-80 transition-all"
                        >
                            {t('confirm')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}