import { useTransactions } from "../../../BLL/useTransactions";
import { ExpensesItem } from "./ExpensesItem";

export default function ExpensesItemList() {
    const { dataTransactions } = useTransactions()

    if (!dataTransactions) {
        return (
            <div className="p-20 flex items-center justify-center">
                <h1 className="text-white font-medium text-3xl">loading...</h1>
            </div>
        )
    }

    if (dataTransactions.length === 0) {
        return (
            <div className="p-20 flex items-center justify-center">
                <h1 className="text-white font-medium text-3xl">No transactions(</h1>
            </div>
        )
    }

    return (
        <div className="divide-y divide-[#2a2a2a]">
            {dataTransactions.map((data) => {
                return (
                    <ExpensesItem data={data} key={data.id} />
                )
            })}
        </div>
    )
}
