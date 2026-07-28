import Select, { type StylesConfig } from "react-select";
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

export function ModalCurrencyInput(props: { setCurrency: (value: string) => void }) {
    const { t, i18n } = useTranslation()

    const targetLnCategory = () => {
        if (i18n.language === 'ru') return currencyListRu
        if (i18n.language === 'en') return currencyList
    }

    const theme = targetTheme()

    const selectStyleForReactSelectTheme = (): StylesConfig<CurrencyOption, false, GroupedOption> => {
        if (theme === 'Dark') return customStylesForReactSelect as StylesConfig<CurrencyOption, false, GroupedOption>
        if (theme === 'Light') return customStylesForReactSelectLight as StylesConfig<CurrencyOption, false, GroupedOption>
        return customStylesForReactSelect as StylesConfig<CurrencyOption, false, GroupedOption>
    }
    return (
        <div>
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
                onChange={(selectedOption) => props.setCurrency(selectedOption?.value || '')}
            />
        </div>
    )
}