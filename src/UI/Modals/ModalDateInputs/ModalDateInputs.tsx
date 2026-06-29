import { IoCalendarOutline } from "react-icons/io5";
import { filterByData } from "../../../store/filterStore";
import { useState } from "react";

type Props = {
    onClose: () => void
}

export function ModalDateInputs(props: Props) {
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#0A0A0A] border border-[#333333] rounded-2xl px-15 pt-10 pb-15 w-full max-w-2xl shadow-2xl flex justify-center items-center">
                <div className="w-full">
                    <h1 className="text-2xl text-white text-center">Select a date range</h1>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
                        <div className="w-full sm:w-auto relative">
                            <label className="block text-sm text-gray-400 mb-2">Date from</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    onChange={(event) => {
                                        setDateFrom(event.target.value)
                                    }}
                                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-white transition-colors [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none cursor-pointer"
                                />
                                <IoCalendarOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
                            </div>
                        </div>
                        <div className="w-full sm:w-auto relative">
                            <label className="block text-sm text-gray-400 mb-2">Date to</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    onChange={(event) => {
                                        setDateTo(event.target.value)
                                    }}
                                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-white transition-colors [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none cursor-pointer"
                                />
                                <IoCalendarOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center items-center gap-4">
                        <button
                            type="button"
                            onClick={() => { props.onClose() }}
                            className="cursor-pointer bg-transparent border border-[#333333] text-white text-base font-medium p-3 px-15 rounded-lg hover:border-white hover:bg-white/5 transition-all"
                        >
                            Cancel
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
                            className="cursor-pointer bg-white text-black text-base font-medium p-3 px-15 rounded-lg hover:bg-gray-200 transition-all"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}