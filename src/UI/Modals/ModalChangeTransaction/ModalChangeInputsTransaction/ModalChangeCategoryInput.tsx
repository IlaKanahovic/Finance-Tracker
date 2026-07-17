import Select, { type SingleValue } from "react-select";
import { categoryOptions, categoryOptionsRu } from "../../../../assets/static-files/categoryOptions";
import { customStylesForReactSelect } from "../../../../assets/static-files/customStylesForReactSelect";
import { useTranslation } from "react-i18next";

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

    return (
        <div className='mt-4'>
            <label
                htmlFor="category"
                className="text-xl text-white font-medium block mb-2"
            > {t('category')}
            </label>
            <Select<CategoryOption>
                options={targetLnCategory()}
                styles={customStylesForReactSelect}
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