import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./UI/Dashboard/Dashboard";
import { SettingsMain } from "./UI/Settings/SettingMain";
import { SignInMain } from "./UI/SignIn/SignInMain";
import { SignUpMain } from "./UI/SignUp/SignUpMain";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Profile } from "./UI/Profile/Profile";
import { useUpdatedTimeAPIRequastCurrency } from "./BLL/currency/useUpdatedTimeAPIRequastCurrency";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Toaster } from 'react-hot-toast';
import { notificationsAnimation, notificationsPosition, notificationsSwitch, targetTheme } from "./store/settingsStore";
import { useAuthStore } from "./store/authStore";

export function App() {
  useUpdatedTimeAPIRequastCurrency()
  const { t } = useTranslation()
  const notificEnabled = notificationsSwitch()
  const notificPosition = notificationsPosition()
  const notificAnimation = notificationsAnimation()
  const token = useAuthStore((state) => state.token)
  const navigate = useNavigate()

  const theme = targetTheme()
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'Light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
  }, [theme])

  useEffect(() => {
    const path = window.location.pathname
    console.log('🔵 App: path =', path, 'token =', token)

    if (!token && path !== '/signIn' && path !== '/signUp') {
      console.log('🔴 App: нет токена, редирект на /signIn')
      navigate('/signIn')
    } else if (token && (path === '/signIn' || path === '/signUp')) {
      console.log('🟢 App: токен есть, редирект на /')
      navigate('/')
    }
  }, [token, navigate])

  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
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

      {notificEnabled && (
        <Toaster
          position={notificPosition}
          toastOptions={{
            duration: 2000,
            className: `toast-${notificAnimation}`,
            style: {
              background: '#1A1A1A',
              color: '#FFFFFF',
              border: '1px solid #333333',
              borderRadius: '12px',
              padding: '12px 20px',
              fontSize: '14px',
              fontWeight: 500,
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
            },
            success: {
              style: {
                background: '#1A1A1A',
                border: '1px solid #4CAF50',
              },
              iconTheme: {
                primary: '#4CAF50',
                secondary: '#FFFFFF',
              },
            },
            error: {
              style: {
                background: '#1A1A1A',
                border: '1px solid #EF4444',
              },
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      )}
    </Suspense>
  )
}
