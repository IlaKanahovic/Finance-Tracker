import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

export const ProtectedRoute = ( {children}: { children: React.ReactNode } ) => {
    const { token } = useAuthStore()

    if (!token) return <Navigate to="/signIn" replace />

    return children
}