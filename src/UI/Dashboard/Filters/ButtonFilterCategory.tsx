import { useRef } from "react"
import Select from "react-select"
import { categoryOptions, categoryOptionsRu } from "../../../assets/static-files/categoryOptions"
import { customStylesForReactSelectForFilter } from "../../../assets/static-files/customStylesForReactSelect"
import { filterByCategory } from "../../../store/filterStore"
import { useTranslation } from "react-i18next"

export function ButtonFilterCategory() {
  const { t, i18n } = useTranslation()
  const selectRef = useRef<any>(null)

  const handleReset = () => {
    if (selectRef.current) {
      selectRef.current.clearValue()
    }
  }

  const targetLnCategory = () => {
    if (i18n.language === 'ru') return categoryOptionsRu
    if (i18n.language === 'ru') return categoryOptions
  }

  return (
    <div className="flex items-center border border-[#333333] bg-[#0A0A0A] group hover:border-gray-100 transition-all duration-300 text-gray-700 hover:text-white">
      <label
        htmlFor="category"
        className="font-medium text-sm px-3 py-1.5 whitespace-nowrap cursor-pointer"
        onClick={handleReset}
      >
        {t('category')}
      </label>
      <div className="flex-1 min-w-35">
        <Select
          ref={selectRef}
          options={targetLnCategory()}
          styles={customStylesForReactSelectForFilter}
          placeholder=""
          id="category"
          instanceId="category-select"
          isSearchable={false}
          onChange={(event) => filterByCategory(event?.value || '')}
        />
      </div>
    </div>
  )
}