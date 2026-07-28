import Select, { type SingleValue } from "react-select";
import { categoryOptions, categoryOptionsRu } from "../../../../assets/static-files/categoryOptions";
import { customStylesForReactSelect, customStylesForReactSelectLight } from "../../../../assets/static-files/customStylesForReactSelect";
import { useTranslation } from "react-i18next";
import { targetTheme } from "../../../../store/settingsStore";

type CategoryOption = {
    value: string;
    label: string;
};

type ModalChangeCategotyInputType = {
    setCategory: (value: string) => void
    category: string
}

export function ModalChangeCategotyInput(props: ModalChangeCategotyInputType) {
    const { t, i18n } = useTranslation()

    const selectedOption = categoryOptions.find(option => option.value === props.category)
    const handleChange = (selectedOption: SingleValue<CategoryOption>) => {
        props.setCategory(selectedOption?.value || '')
    }

    const targetLnCategory = () => {
        if (i18n.language === 'ru') return categoryOptionsRu
        if (i18n.language === 'ru') return categoryOptions
    }

    const theme = targetTheme()

    const selectStyleForReactSelectTheme = () => {
        if (theme === 'Dark') return customStylesForReactSelect
        if (theme === 'Light') return customStylesForReactSelectLight
    }

    return (
        <div className='mt-4'>
            <label
                htmlFor="category"
                className="text-xl text-(--text-main) font-medium block mb-2"
            > {t('category')}
            </label>
            <Select<CategoryOption>
                options={targetLnCategory()}
                styles={selectStyleForReactSelectTheme()}
                placeholder={t('select_category')}
                id="category"
                instanceId="category-select"
                required
                value={selectedOption}
                onChange={handleChange}
            />
        </div>
    )
}