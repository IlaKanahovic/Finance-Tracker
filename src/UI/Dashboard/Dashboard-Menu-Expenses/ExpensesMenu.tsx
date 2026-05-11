import ExpensesItem from "./ExpensesItemList";
import { ExpensesTitle } from "./ExpensesTitle";

export function ExpensesMenu() {
    return (
        <div className="mt-12">
            <div className="hidden sm:grid sm:grid-cols-[1fr_2fr_1.2fr_1fr] mb-3 px-2 text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                <ExpensesTitle title={"Date"} />
                <ExpensesTitle title={"Description"} />
                <ExpensesTitle title={"Category"} />
                <div className="text-right">
                    <ExpensesTitle title={"Amount"} />
                </div>
            </div>
            <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
                <ExpensesItem />
            </div>
        </div>
    )
}