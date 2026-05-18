import { useUpdatedTimeAPIRequastCurrency } from "./BLL/useUpdatedTimeAPIRequastCurrency";
import { Dashboard } from "./UI/Dashboard/Dashboard";
import { SittigsMain } from "./UI/Settings/SettingMain";


export function App() {
  useUpdatedTimeAPIRequastCurrency()

  return (
    <div>
      <Dashboard />
      <SittigsMain />
    </div>
  )
}
