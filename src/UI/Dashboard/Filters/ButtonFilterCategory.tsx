import { useRef } from "react"
import Select from "react-select"
import { categoryOptions, categoryOptionsRu } from "../../../assets/static-files/categoryOptions"
import { customStylesForReactSelectForFilter, customStylesForReactSelectForFilterLight } from "../../../assets/static-files/customStylesForReactSelect"
import { filterByCategory } from "../../../store/filterStore"
import { useTranslation } from "react-i18next"
import { targetTheme } from "../../../store/settingsStore"

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
    if (i18n.language === 'en') return categoryOptions
  }

  const theme = targetTheme()

  const selectStyleForReactSelectTheme = () => {
    if (theme === 'Dark') return customStylesForReactSelectForFilter
    if (theme === 'Light') return customStylesForReactSelectForFilterLight
  }

  return (
    <div className="flex items-center border border-(--border-filter-buttons) group hover:border-(--black-ili-white) transition-all duration-300 text-gray-700 hover:text-(--black-ili-white)">
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
          styles={selectStyleForReactSelectTheme()}
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