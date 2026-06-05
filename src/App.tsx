import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./UI/Dashboard/Dashboard";
import { SettingsMain } from "./UI/Settings/SettingMain";
import { SignInMain } from "./UI/SignIn/SignInMain";
import { SignUpMain } from "./UI/SignUp/SignUpMain";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<SettingsMain />} />
      <Route path="/signIn" element={<SignInMain />} />
      <Route path="/signUp" element={<SignUpMain />} />
    </Routes>
  )
}
