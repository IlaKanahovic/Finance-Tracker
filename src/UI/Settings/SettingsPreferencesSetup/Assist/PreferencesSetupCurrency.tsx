import Select from "react-select";
import { customStylesForReactSelectForSettings } from "../../../../assets/static-files/customStylesForReactSelect";
import { currencyList } from "../../../../assets/static-files/categoryOptions";
import { setTargetCurrency } from "../../../../store/settingsStore";

type CurrencyOption = {
    value: string;
    label: string;
}

type GroupedOption = {
    label: string;
    options: CurrencyOption[];
}

export function PreferencesSetupCurrency() {
    return (
        <div>
            <div className="mb-3 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Primary currency</span>
            </div>
            <Select<CurrencyOption, false, GroupedOption>
                options={currencyList}
                styles={customStylesForReactSelectForSettings}
                placeholder="Select currency..."
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