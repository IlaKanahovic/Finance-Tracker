import Select, { type SingleValue, type StylesConfig } from "react-select";
import { currencyList, currencyListRu } from "../../../../assets/static-files/categoryOptions";
import { customStylesForReactSelect, customStylesForReactSelectLight } from "../../../../assets/static-files/customStylesForReactSelect";
import { useTranslation } from "react-i18next";
import { targetTheme } from "../../../../store/settingsStore";

type CurrencyOption = {
    value: string;
    label: string;
}

type GroupedOption = {
    label: string;
    options: CurrencyOption[];
}

type ModalChangeCurrencyInputType = {
    setCurrency: (value: string) => void
    currency: string
}

export function ModalChangeCurrencyInput(props: ModalChangeCurrencyInputType) {
    const { t, i18n } = useTranslation()

    const targetLnCategory = () => {
        if (i18n.language === 'ru') return currencyListRu
        if (i18n.language === 'ru') return currencyList
    }

    const selectedOption = currencyList
        .flatMap(group => group.options)
        .find(option => option.value === props.currency)

    const handleChange = (selectedOption: SingleValue<CurrencyOption>) => {
        props.setCurrency(selectedOption?.value || '')
    }

    const theme = targetTheme()

    const selectStyleForReactSelectTheme = (): StylesConfig<CurrencyOption, false, GroupedOption> => {
        if (theme === 'Dark') return customStylesForReactSelect as StylesConfig<CurrencyOption, false, GroupedOption>
        if (theme === 'Light') return customStylesForReactSelectLight as StylesConfig<CurrencyOption, false, GroupedOption>
        return customStylesForReactSelect as StylesConfig<CurrencyOption, false, GroupedOption>
    }

    return (
        <div className='mt-4'>
            <label
                htmlFor="currency"
                className="text-xl text-(--text-main) font-medium block mb-2"
            > {t('currency')}
            </label>
            <Select<CurrencyOption, false, GroupedOption>
                options={targetLnCategory()}
                styles={selectStyleForReactSelectTheme()}
                placeholder={t('select_currency')}
                id="currency"
                instanceId="currency-select"
                required
                value={selectedOption}
                onChange={handleChange}
            />
        </div>
    )
}