import Select from "react-select";
import { currencyList, currencyListRu } from "../../../../assets/static-files/categoryOptions";
import { customStylesForReactSelect } from "../../../../assets/static-files/customStylesForReactSelect";
import { useTranslation } from "react-i18next";

type CurrencyOption = {
    value: string;
    label: string;
}

type GroupedOption = {
    label: string;
    options: CurrencyOption[];
}

export function ModalCurrencyInput(props: { setCurrency: (value: string) => void }) {
    const { t, i18n } = useTranslation()

    const targetLnCategory = () => {
        if (i18n.language === 'ru') return currencyListRu
        if (i18n.language === 'en') return currencyList
    }

    return (
        <div>
            <label
                htmlFor="currency"
                className="text-xl text-white font-medium block mb-2"
            > {t('currency')}
            </label>
            <Select<CurrencyOption, false, GroupedOption>
                options={targetLnCategory()}
                styles={customStylesForReactSelect}
                placeholder={t('select_currency')}
                id="currency"
                instanceId="currency-select"
                required
                onChange={(selectedOption) => props.setCurrency(selectedOption?.value || '')}
            />
        </div>
    )
}