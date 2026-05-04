
type Props = {
    name: string
}

export function ButtonFiltersDays(props: Props) {
    return (
        <button className="px-3 py-1.5 border border-(--bg) text-sm duration-300 font-medium 
        text-gray-700 hover:text-white hover:border-gray-100 cursor-pointer">
            {props.name}
        </button>
    )
}