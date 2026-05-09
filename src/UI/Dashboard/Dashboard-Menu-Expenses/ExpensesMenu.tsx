import { ExpensesItem } from "./ExpensesItem";
import { ExpensesTitle } from "./ExpensesTitle";

export function ExpensesMenu() {
    return (
        <div className="mt-12">
            <div className="grid grid-cols-[80px_1fr_100px_90px] md:grid-cols-[100px_1fr_150px_120px] mb-3 px-2 text-gray-400 text-xs md:text-sm uppercase tracking-wider">                
                <ExpensesTitle title={"Date"} />
                <ExpensesTitle title={"Description"} />
                <ExpensesTitle title={"Category"} />
                <ExpensesTitle title={"Amount"} />
            </div>
            <div className="border border-[#2a2a2a] rounded-xl overflow-x-auto">
                <div className="min-w-full">
                    <ExpensesItem />
                </div>
            </div>
        </div>
    )
}
