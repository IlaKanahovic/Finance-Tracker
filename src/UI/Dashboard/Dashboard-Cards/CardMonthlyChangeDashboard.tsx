import { useTransactions } from "../../../BLL/useTransactions"

export function CardMonthlyChangeDashboard() {
    const { dataTransactions } = useTransactions()

    return (
        <li className="p-4 bg-(--card-bg) rounded-lg">
            <p className="text-[#A0A0A0] text-xs mb-1">MONTHLY CHANGE</p>
            <p className="text-2xl font-semibold">*PRICE*</p>
            <div className="flex flex-wrap justify-between items-center gap-x-4">
                <p className="text-[#A0A0A0] text-xs">I his mounth vs last</p>
                {dataTransactions === null
                    ? <p className="text-[#A0A0A0] text-xs"> No transaction </p>
                    : <p className="text-[#A0A0A0] text-xs"> {dataTransactions.length} transactions</p>}
            </div>
        </li>
    )
}