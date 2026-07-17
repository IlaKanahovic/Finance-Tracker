import { useTranslation } from "react-i18next";
import ExpensesItem from "./ExpensesItemList";

export function ExpensesMenu() {
    const { t } = useTranslation()

    return (
        <div className="mt-12">
            <div className="hidden sm:grid sm:grid-cols-[1fr_2fr_1.2fr_1fr] mb-3 px-2 text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                <p className="text-sm font-medium text-gray-500 "> {t('date')} </p>
                <p className="text-sm font-medium text-gray-500 "> {t("description")} </p>
                <p className="text-sm font-medium text-gray-500 "> {t("category")} </p>
                <div className="text-right">
                    <p className="text-sm font-medium text-gray-500 "> {t("amount")} </p>
                </div>
            </div>
            <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
                <ExpensesItem />
            </div>
        </div>
    )
}