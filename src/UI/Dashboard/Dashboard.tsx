import { CardCurrentBalanceDashboard } from "./Dashboard-Cards/CardCurrentBalanceDashboard";
import { CardAvailableDashboard } from "./Dashboard-Cards/CardTopCategoryDashboard";
import { CardMonthlyChangeDashboard } from "./Dashboard-Cards/CardMonthlyChangeDashboard";
import { DashboardHeader } from "./Dashboard-Header/DashboardHeader";
import { Filters } from "./Filters/Filters";
import { ExpensesMenu } from "./Dashboard-Menu-Expenses/ExpensesMenu";
import { ButtonAddTransition } from "./Utils/ButtonAddTransaction";

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
        </div>
    )
}