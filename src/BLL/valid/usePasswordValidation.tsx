import { useState } from "react"
import { validateConfirmPassword, validateCurrentPassword, validateNewPassword } from "../../assets/static-files/passwordValidation"

export function usePasswordValidation() {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [currentPasswordError, setCurrentPasswordError] = useState("")
    const [newPasswordError, setNewPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const handleCurrentPasswordChange = (value: string) => {
        setCurrentPassword(value)
        const error = validateCurrentPassword(value)
        setCurrentPasswordError(error)
    }

    const handleNewPasswordChange = (value: string) => {
        setNewPassword(value)
        const error = validateNewPassword(value)
        setNewPasswordError(error)
        if (confirmPassword) {
            const confirmError = validateConfirmPassword(confirmPassword, value)
            setConfirmPasswordError(confirmError)
        }
    }

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value)
        const error = validateConfirmPassword(value, newPassword)
        setConfirmPasswordError(error)
    }

    const isPasswordFormValid = () => {
        return (
            currentPassword.length > 0 &&
            newPassword.length >= 6 &&
            confirmPassword.length > 0 &&
            currentPasswordError === "" &&
            newPasswordError === "" &&
            confirmPasswordError === ""
        )
    }

    return {
        currentPassword,
        newPassword,
        confirmPassword,
        currentPasswordError,
        newPasswordError,
        confirmPasswordError,
        handleCurrentPasswordChange,
        handleNewPasswordChange,
        handleConfirmPasswordChange,
        isPasswordFormValid
    }
}