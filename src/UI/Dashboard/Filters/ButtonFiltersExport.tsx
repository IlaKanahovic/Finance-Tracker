import { useTranslation } from "react-i18next";
import { useFilterButtonExport } from "../../../BLL/filters/useFilterButtonExport";
import { ModalExportTransactions } from "../../Modals/ModalExportTransactions/ModalExportTransactions";

export function ButtonFiltersExport() {
    const { openModalExport, setOpenModalExport } = useFilterButtonExport()
    const { t } = useTranslation()

    return (
        <div>
            <button
                className="px-3 py-1.5 border border-[#2a2a2a] text-sm duration-300 font-medium 
        text-gray-700 hover:text-white hover:border-gray-100 cursor-pointer"
                onClick={() => setOpenModalExport(true)}
            >
                {t('export')}
            </button>
            {
                openModalExport && <ModalExportTransactions
                    onClose={() => setOpenModalExport(false)}
                />
            }
        </div>
    )
}