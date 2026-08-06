import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { token } = useAuthStore()

    console.log('🔵 ProtectedRoute: token =', token)

    if (!token) {
        console.log('🔴 ProtectedRoute: нет токена, редирект на /signIn')
        return <Navigate to="/signIn" replace />
    }

    console.log('🟢 ProtectedRoute: токен есть, показываем children')
    return children
}