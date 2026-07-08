export const validateCurrentPassword = (password: string): string => {
    if (!password) {
        return "Current password is required"
    }
    return ""
}

export const validateNewPassword = (password: string): string => {
    if (!password) {
        return "Password is required"
    } else if (password.length < 6) {
        return "Password must be at least 6 characters"
    } else if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter"
    } else if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number"
    }
    return ""
}

export const validateConfirmPassword = (password: string, newPassword: string): string => {
    if (!password) {
        return "Please confirm your password"
    } else if (password !== newPassword) {
        return "Passwords do not match"
    }
    return ""
}