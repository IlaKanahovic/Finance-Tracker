import Select from "react-select";
import { categoryOptions } from "../../assets/static-files/categoryOptionsByModalTransaction";
import { customStylesForReactSelect } from "../../assets/static-files/customStylesForReactSelect";

export function ModalCategoryListInput(props: { setCategory: (value: string) => void } ) {
    return (
        <div>
            <label
                htmlFor="category"
                className="text-xl text-white font-medium block mb-2"
            > Category
            </label>
            <Select
                options={categoryOptions}
                styles={customStylesForReactSelect}
                placeholder="Select category..."
                id="category"
                instanceId="category-select"
                onChange={(selectedOption) => props.setCategory(selectedOption?.value || '')}
            />
        </div>
    )
}