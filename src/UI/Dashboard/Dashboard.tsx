import { CardCurrentBalanceDashboard } from "./Dashboard-Cards/CardCurrentBalanceDashboard";
import { CardAvailableDashboard } from "./Dashboard-Cards/CardAvailableDashboard";
import { CardMonthlyChangeDashboard } from "./Dashboard-Cards/CardMonthlyChangeDashboard";
import { DashboardHeader } from "./Utils/DashboardHeader";
import { Filters } from "./Filters/Filters";
import { ExpensesMenu } from "./Dashboard-Menu-Expenses/ExpensesMenu";
import { ButtonAddTransition } from "./Utils/ButtonAddTransaction";
import { getActualCurrency } from "../../DAL/getCurrencyAPI";

export function Dashboard() {

    return (
        <div>
            <DashboardHeader />
            <div className="mt-14">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CardCurrentBalanceDashboard />
                    <CardAvailableDashboard />
                    <CardMonthlyChangeDashboard />
                </ul>
            </div>
            <Filters />
            <ExpensesMenu />
            <ButtonAddTransition />
            <button className="border border-red-700 p-10 cursor-pointer" onClick={getActualCurrency}>pizdaaaaa</button>
        </div>
    )
}