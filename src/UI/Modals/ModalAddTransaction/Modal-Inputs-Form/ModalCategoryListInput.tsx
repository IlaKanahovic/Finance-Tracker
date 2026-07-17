import Select from "react-select";
import { categoryOptions, categoryOptionsRu } from "../../../../assets/static-files/categoryOptions";
import { customStylesForReactSelect } from "../../../../assets/static-files/customStylesForReactSelect";
import { useTranslation } from "react-i18next";


export function ModalCategoryListInput(props: { setCategory: (value: string) => void }) {
    const { t, i18n } = useTranslation()

    const targetLnCategory = () => {
        if (i18n.language === 'ru') return categoryOptionsRu
        if (i18n.language === 'ru') return categoryOptions
    }

    return (
        <div>
            <label
                htmlFor="category"
                className="text-xl text-white font-medium block mb-2"
            > {t('category')}
            </label>
            <Select
                options={targetLnCategory()}
                styles={customStylesForReactSelect}
                placeholder={t('select_category')}
                id="category"
                instanceId="category-select"
                required
                onChange={(selectedOption) => props.setCategory(selectedOption?.value || '')}
            />
        </div>
    )
}