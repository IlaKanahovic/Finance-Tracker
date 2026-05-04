
type Props = {
    name: string
}

export function ButtonFiltersRight(props: Props) {
    return (
        <button className="px-4 py-1.5 text-sm font-medium duration-300 text-gray-700 border
        border-[#2a2a2a]  hover:text-white hover:border-gray-100 whitespace-nowrap
        cursor-pointer">
            {props.name}
        </button>
    )
}