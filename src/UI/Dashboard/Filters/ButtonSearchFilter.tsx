import { FaSearch } from "react-icons/fa";
import { filterBySearch } from "../../../store/filterStore";
import { useTranslation } from "react-i18next";

export function ButtonSearchFilter() {
    const { t } = useTranslation()

    return (
        <div className="relative flex items-center w-full sm:w-66.25 lg:w-66.25">
            <input
                type="text"
                placeholder={t('search_placeholder')}
                className="w-full px-3 py-1.5 pl-8 text-sm duration-300 text-gray-700
                                    border border-(--border-filter-buttons) focus:outline-none focus:ring-1
                                    focus:ring-(--black-ili-white) focus:border-(--black-ili-white) hover:border-(--black-ili-white) 
                                    transition-colors placeholder:text-gray-700
                                    focus:placeholder:text-(--black-ili-white) focus:text-(--black-ili-white)
                                    hover:placeholder:text-(--black-ili-white) cursor-pointer"
                onChange={(event) => filterBySearch(event.target.value)}
            />
            <FaSearch className="absolute left-2.5 w-4 h-4 text-gray-400" />
        </div>
    )
}