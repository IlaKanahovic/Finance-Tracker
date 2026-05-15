import Select, { type SingleValue } from "react-select";
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

type ModalChangeCurrencyInputType = {
    setCurrency: (value: string) => void
    currency: string
}

export function ModalChangeCurrencyInput(props: ModalChangeCurrencyInputType) {
    const selectedOption = currencyList
        .flatMap(group => group.options)
        .find(option => option.value === props.currency);

    const handleChange = (selectedOption: SingleValue<CurrencyOption>) => {
        props.setCurrency(selectedOption?.value || '');
    };

    return (
        <div className='mt-4'>
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
                value={selectedOption}
                onChange={handleChange}
            />
        </div>
    )
}