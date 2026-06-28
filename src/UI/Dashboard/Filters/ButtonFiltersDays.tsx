import type { DateFilterType } from "../../../assets/types/filterTypes"

type Props = {
    value: DateFilterType
    label: string
    isActive: boolean
    onClick: (value: DateFilterType) => void
}

export function ButtonFiltersDays({ value, label, isActive, onClick }: Props) {
    return (
        <button
            className={`
                px-3 py-1.5 border border-(--bg) text-sm duration-300 font-medium
                ${isActive ? 'text-white border-white' : 'text-gray-700 hover:text-white hover:border-gray-100'}
                cursor-pointer
            `}
            onClick={() => onClick(value)}
        >
            {label}
        </button>
    )
}