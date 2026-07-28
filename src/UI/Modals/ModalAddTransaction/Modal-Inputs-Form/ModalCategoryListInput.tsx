import Select from "react-select";
import { categoryOptions, categoryOptionsRu } from "../../../../assets/static-files/categoryOptions";
import { useTranslation } from "react-i18next";
import { targetTheme } from "../../../../store/settingsStore";
import { customStylesForReactSelect, customStylesForReactSelectLight } from "../../../../assets/static-files/customStylesForReactSelect";


export function ModalCategoryListInput(props: { setCategory: (value: string) => void }) {
    const { t, i18n } = useTranslation()

    const targetLnCategory = () => {
        if (i18n.language === 'ru') return categoryOptionsRu
        if (i18n.language === 'en') return categoryOptions
    }

    const theme = targetTheme()

    const selectStyleForReactSelectTheme = () => {
        if (theme === 'Dark') return customStylesForReactSelect
        if (theme === 'Light') return customStylesForReactSelectLight
    }

    return (
        <div>
            <label
                htmlFor="category"
                className="text-xl text-(--text-main) font-medium block mb-2"
            > {t('category')}
            </label>
            <Select
                options={targetLnCategory()}
                styles={selectStyleForReactSelectTheme()}
                placeholder={t('select_category')}
                id="category"
                instanceId="category-select"
                required
                onChange={(selectedOption) => props.setCategory(selectedOption?.value || '')}
            />
        </div>
    )
}