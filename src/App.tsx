import { Route, Routes } from "react-router-dom";
import { useUpdatedTimeAPIRequastCurrency } from "./BLL/useUpdatedTimeAPIRequastCurrency";
import { Dashboard } from "./UI/Dashboard/Dashboard";
import { SettingsMain } from "./UI/Settings/SettingMain";


export function App() {
  useUpdatedTimeAPIRequastCurrency()

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<SettingsMain />} />
    </Routes>
  )
}
