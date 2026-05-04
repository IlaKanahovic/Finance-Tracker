import { FaPlus } from "react-icons/fa6";

export function ButtonAddTransition() {
    return (
        <div className="p-4 w-16 h-16 mt-30 bg-(--card-bg) flex justify-center 
        items-center duration-300 border border-(--card-bg)
        hover:border-white ml-auto cursor-pointer">
            <FaPlus />
        </div>
    )
}