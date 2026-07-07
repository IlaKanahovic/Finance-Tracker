export const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
        return "Email is required"
    } else if (!emailRegex.test(email)) {
        return "Enter a valid email address"
    }
    return ""
}