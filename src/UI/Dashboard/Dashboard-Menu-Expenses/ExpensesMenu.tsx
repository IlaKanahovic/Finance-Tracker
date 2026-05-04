import { ExpensesItem } from "./ExpensesItem";
import { ExpensesTitle } from "./ExpensesTitle";

export function ExpensesMenu() {
    return (
        <div>
            <div className="mt-12 mb-4 flex justify-between">
                <ExpensesTitle title={"Date"}/>
                <ExpensesTitle title={"Description"}/>
                <ExpensesTitle title={"Category"}/>
                <ExpensesTitle title={"Amount"}/>
            </div>
            <div className="px-2 border border-[#2a2a2a]">
                <ExpensesItem />
                <ExpensesItem />
                <ExpensesItem />
                <ExpensesItem />
            </div>
        </div>
    )
}