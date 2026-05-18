import Select from "react-select";
import { currencyList } from "../../assets/static-files/categoryOptions";
import { customStylesForReactSelect } from "../../assets/static-files/customStylesForReactSelect";
import { setTargetCurrency } from "../../store/settingsStore";

type CurrencyOption = {
    value: string;
    label: string;
}

type GroupedOption = {
    label: string;
    options: CurrencyOption[];
}

export function SittigsMain() {
    return (
        <div className="mt-10">
            <label
                htmlFor="currency"
                className="text-xl text-white font-medium block mb-2"
            > ВЫБЕРИТЕ ОСНОВНУЮ ВАЛЮТУ
            </label>
            <Select<CurrencyOption, false, GroupedOption>
                options={currencyList}
                styles={customStylesForReactSelect}
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