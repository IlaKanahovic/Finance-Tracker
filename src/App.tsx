import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./UI/Dashboard/Dashboard";
import { SettingsMain } from "./UI/Settings/SettingMain";
import { SignInMain } from "./UI/SignIn/SignInMain";
import { SignUpMain } from "./UI/SignUp/SignUpMain";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Profile } from "./UI/Profile/Profile";
import { useUpdatedTimeAPIRequastCurrency } from "./BLL/currency/useUpdatedTimeAPIRequastCurrency";
import { Suspense } from "react";

export function App() {
  useUpdatedTimeAPIRequastCurrency()

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  )
}
