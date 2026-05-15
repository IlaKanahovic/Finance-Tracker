import Select, { type SingleValue } from "react-select";
import { categoryOptions } from "../../../../assets/static-files/categoryOptions";
import { customStylesForReactSelect } from "../../../../assets/static-files/customStylesForReactSelect";

type CategoryOption = {
    value: string;
    label: string;
};

type ModalChangeCategotyInputType = {
    setCategory: (value: string) => void
    category: string
}

export function ModalChangeCategotyInput(props: ModalChangeCategotyInputType) {
    const selectedOption = categoryOptions.find(option => option.value === props.category);

    const handleChange = (selectedOption: SingleValue<CategoryOption>) => {
        props.setCategory(selectedOption?.value || '');
    };

    return (
        <div className='mt-4'>
            <label
                htmlFor="category"
                className="text-xl text-white font-medium block mb-2"
            > Category
            </label>
            <Select<CategoryOption>
                options={categoryOptions}
                styles={customStylesForReactSelect}
                placeholder="Select category..."
                id="category"
                instanceId="category-select"
                required
                value={selectedOption}
                onChange={handleChange}
            />
        </div>
    )
}