import type { DateFilterType } from "../../../assets/types/filterTypes"
import { useFilterButtonCustomDate } from "../../../BLL/filters/useFilterButtonCustomDate"
import { ModalDateInputs } from "../../Modals/ModalDateInputs/ModalDateInputs"

type Props = {
    value: DateFilterType
    label: string
    isActive: boolean
    onClick: (value: DateFilterType) => void
}

export function ButtonFiltersCustomDate({ value, label, isActive, onClick }: Props) {
    const { openModalDateInputs, setOpenModalDateInputs } = useFilterButtonCustomDate()

    return (
        <div>
            <button
                className={`
                px-3 py-1.5 border border-(--bg) text-sm duration-300 font-medium
                ${isActive ? 'text-white border-white' : 'text-gray-700 hover:text-white hover:border-gray-100'}
                cursor-pointer
            `}
                onClick={() => {
                    onClick(value)
                    if (!isActive) {
                        setOpenModalDateInputs(true)
                    }
                }}
            >
                {label}
            </button>
            {openModalDateInputs && <ModalDateInputs
                onClose={() => setOpenModalDateInputs(false)}
            />}
        </div>
    )
}