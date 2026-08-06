import { useEffect } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { Dashboard } from './UI/Dashboard/Dashboard';
import { SettingsMain } from './UI/Settings/SettingMain';
import { SignInMain } from './UI/SignIn/SignInMain';
import { SignUpMain } from './UI/SignUp/SignUpMain';
import { Profile } from './UI/Profile/Profile';

export function App() {
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    if (!token && path !== '/signIn' && path !== '/signUp') {
      navigate('/signIn');
    }
  }, [token, navigate]);

  return (
    <Routes>
      <Route path="/" element={token ? <Dashboard /> : <Navigate to="/signIn" />} />
      <Route path="/settings" element={token ? <SettingsMain /> : <Navigate to="/signIn" />} />
      <Route path="/profile" element={token ? <Profile /> : <Navigate to="/signIn" />} />
      <Route path="/signIn" element={<SignInMain />} />
      <Route path="/signUp" element={<SignUpMain />} />
    </Routes>
  );
}