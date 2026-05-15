import Select from "react-select";
import { currencyList } from "../../../../assets/static-files/categoryOptions";
import { customStylesForReactSelect } from "../../../../assets/static-files/customStylesForReactSelect";

type CurrencyOption = {
    value: string;
    label: string;
}

type GroupedOption = {
    label: string;
    options: CurrencyOption[];
}

export function ModalCurrencyInput(props: { setCurrency: (value: string) => void } ) {
    return (
        <div>
            <label
                htmlFor="currency"
                className="text-xl text-white font-medium block mb-2"
            > Currency
            </label>
            <Select<CurrencyOption, false, GroupedOption>
                options={currencyList}
                styles={customStylesForReactSelect}
                placeholder="Select currency..."
                id="currency"
                instanceId="currency-select"
                required
                onChange={(selectedOption) => props.setCurrency(selectedOption?.value || '')}
            />
        </div>
    )
}