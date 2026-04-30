export function ButtonFiltersDays(props) {
    return (
        <button className="px-3 py-1.5 border border-[var(--bg)] text-sm duration-300 font-medium  text-gray-700 hover:text-white hover:border-gray-100">
            { props.name }
        </button>
    )
}