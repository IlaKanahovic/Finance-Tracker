export function ExpensesItem() {
    return (
        <div className="flex justify-between items-center my-4">
            <p>*YEAR-MN-NM*</p>
            <div className="flex items-center">
                <div className="w-10 h-10 border border-white"></div>
                <div className="ml-3">
                    <p className="font-medium">*DECS-TITLE*</p>
                    <p className="text-xs font-medium text-gray-500">*DESCRIPTION*</p>
                </div>
            </div>
            <p>*CATEGORY*</p>
            <p>*AMOUNT*</p>
        </div>
    )
}