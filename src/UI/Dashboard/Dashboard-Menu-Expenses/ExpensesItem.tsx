import { useTransactions } from "../../../BLL/useTransactions";

export function ExpensesItem() {
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
        <div>
            {dataTransactions.map((data) => {
                return (
                    <div
                        key={data.id}
                        className="grid grid-cols-[80px_1fr_100px_90px] md:grid-cols-[100px_1fr_150px_120px] items-center py-3 px-2 border-b border-[#2a2a2a] last:border-b-0"
                    >
                        <p className="text-white text-sm truncate min-w-0">
                            {data.date}
                        </p>
                        <div className="flex items-center gap-2 min-w-0">
                            <div className="min-w-0 flex-1">
                                <p className="text-white font-medium text-sm md:text-base truncate">
                                    {data.title}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        <p className="text-white/80 text-sm truncate min-w-0">
                            {data.category}
                        </p>
                        <p className="text-white font-mono text-sm truncate min-w-0 text-right md:text-left">
                            {data.amount}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}