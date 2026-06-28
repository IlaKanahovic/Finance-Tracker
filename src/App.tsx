import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./UI/Dashboard/Dashboard";
import { SettingsMain } from "./UI/Settings/SettingMain";
import { SignInMain } from "./UI/SignIn/SignInMain";
import { SignUpMain } from "./UI/SignUp/SignUpMain";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Profile } from "./UI/Profile/Profile";
import { useCurrencyStore } from "./store/currencyStore";
import { useEffect } from "react";

export function App() {
  const setRates = useCurrencyStore((state) => state.setRates)

  useEffect(() => {
    setRates()
  }, [setRates])

  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>} />
      <Route path="/settings" element={
        <ProtectedRoute>
          <SettingsMain />
        </ProtectedRoute>
      } />
      <Route path="/signIn" element={<SignInMain />} />
      <Route path="/signUp" element={<SignUpMain />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
    </Routes>
  )
}
