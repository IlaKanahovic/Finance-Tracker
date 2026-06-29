import { ButtonFiltersDays } from "./ButtonFiltersDays";
import { ButtonFiltersExport } from "./ButtonFiltersExport";
import { ButtonFiltersAddTransaction } from "./ButtonFiltersAddTransaction";
import { ButtonSearchFilter } from "./ButtonSearchFilter";
import { ButtonFilterCategory } from "./ButtonFilterCategory";
import type { DateFilterType } from "../../../assets/types/filterTypes";
import { filterByData, useFilterStore } from "../../../store/filterStore";
import { ButtonFiltersCustomDate } from "./ButtonFilterCustomDate";

export function Filters() {
    const dataFilter = useFilterStore((state) => state.dataFilter)

    const handleFilterClick = (value: DateFilterType) => {
        const currentFilter = useFilterStore.getState().dataFilter

        if (currentFilter === value) {
            filterByData('', null, null)
        } else {
            if (value === 'custom') {
            } else {
                filterByData(value, null, null)
            }
        }
    }

    return (
        <div className="space-y-4 mt-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                    <ButtonFilterCategory />

                    <div className="flex border border-[#2a2a2a]">
                        <ButtonFiltersDays
                            value="today"
                            label="Today"
                            isActive={dataFilter === 'today'}
                            onClick={handleFilterClick} />
                        <ButtonFiltersDays
                            value="7d"
                            label="7d"
                            isActive={dataFilter === '7d'}
                            onClick={handleFilterClick} />
                        <ButtonFiltersDays
                            value="30d"
                            label="30d"
                            isActive={dataFilter === '30d'}
                            onClick={handleFilterClick} />
                        <ButtonFiltersCustomDate 
                            value="custom"
                            label="Custom"
                            isActive={dataFilter === 'custom'}
                            onClick={handleFilterClick} />
                    </div>

                    <ButtonSearchFilter />
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <ButtonFiltersExport />
                    <ButtonFiltersAddTransaction />
                </div>
            </div>
        </div>
    )
}