import Select from "react-select";
import { customStylesForReactSelectForSettings, customStylesForReactSelectForSettingsLight } from "../../../../assets/static-files/customStylesForReactSelect";
import { currencyList, currencyListRu } from "../../../../assets/static-files/categoryOptions";
import { setTargetCurrency, targetTheme } from "../../../../store/settingsStore";
import { useTranslation } from "react-i18next";

type CurrencyOption = {
    value: string;
    label: string;
}

type GroupedOption = {
    label: string;
    options: CurrencyOption[];
}

export function PreferencesSetupCurrency() {
    const { t, i18n } = useTranslation()

    const targetLnCategory = () => {
        if (i18n.language === 'ru') return currencyListRu
        if (i18n.language === 'en') return currencyList
    }

    const theme = targetTheme()

    const selectStyleForReactSelectTheme = () => {
        if (theme === 'Dark') return customStylesForReactSelectForSettings
        if (theme === 'Light') return customStylesForReactSelectForSettingsLight
    }

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('primary_currency')}</span>
            </div>
            <Select<CurrencyOption, false, GroupedOption>
                options={targetLnCategory()}
                styles={selectStyleForReactSelectTheme()}
                placeholder={t('select_currency')}
                id="currency"
                instanceId="currency-select"
                required
                onChange={(selectedOption) => {
                    if (selectedOption) {
                        setTargetCurrency(selectedOption.value)
                    }
                }}
            />
        </div>
    )
}