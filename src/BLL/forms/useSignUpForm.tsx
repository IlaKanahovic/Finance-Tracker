import { useState } from 'react'

interface FormErrors {
    fullName?: string
    email?: string
    userName?: string
    password?: string
    confirmPassword?: string
}

export function useSignUpForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState<FormErrors>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email) return 'Email обязателен'
        if (!emailRegex.test(email)) return 'Введите корректный email'
        return ''
    }

    const validatePassword = (password: string) => {
        if (!password) return 'Пароль обязателен'
        if (password.length < 6) return 'Пароль должен быть минимум 6 символов'
        if (!/[A-Z]/.test(password)) return 'Пароль должен содержать хотя бы одну заглавную букву'
        if (!/[0-9]/.test(password)) return 'Пароль должен содержать хотя бы одну цифру'
        return ''
    }

    const validateUserName = (userName: string) => {
        if (!userName) return 'Имя пользователя обязательно'
        if (userName.length < 3) return 'Имя пользователя минимум 3 символа'
        if (!/^[a-zA-Z0-9_]+$/.test(userName)) return 'Только буквы, цифры и "_"'
        return ''
    }

    const validateFullName = (fullName: string) => {
        if (!fullName) return 'Имя обязательно'
        if (fullName.length < 2) return 'Введите корректное имя'
        return ''
    }

    const validateConfirmPassword = (confirmPassword: string, password: string) => {
        if (!confirmPassword) return 'Подтвердите пароль'
        if (confirmPassword !== password) return 'Пароли не совпадают'
        return ''
    }

    const validateForm = () => {
        const newErrors: FormErrors = {
            fullName: validateFullName(fullName),
            email: validateEmail(email),
            userName: validateUserName(userName),
            password: validatePassword(password),
            confirmPassword: validateConfirmPassword(confirmPassword, password),
        }

        setErrors(newErrors)
        return !Object.values(newErrors).some(error => error)
    }

    const handleFullNameChange = (value: string) => {
        setFullName(value)
        if (touched.fullName) {
            setErrors(prev => ({ ...prev, fullName: validateFullName(value) }))
        }
    }

    const handleEmailChange = (value: string) => {
        setEmail(value)
        if (touched.email) {
            setErrors(prev => ({ ...prev, email: validateEmail(value) }))
        }
    }

    const handleUserNameChange = (value: string) => {
        setUserName(value)
        if (touched.userName) {
            setErrors(prev => ({ ...prev, userName: validateUserName(value) }))
        }
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value)
        if (touched.password) {
            setErrors(prev => ({ ...prev, password: validatePassword(value) }))
            if (touched.confirmPassword && confirmPassword) {
                setErrors(prev => ({
                    ...prev,
                    confirmPassword: validateConfirmPassword(confirmPassword, value)
                }))
            }
        }
    }

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value)
        if (touched.confirmPassword) {
            setErrors(prev => ({
                ...prev,
                confirmPassword: validateConfirmPassword(value, password)
            }))
        }
    }

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }))

        switch (field) {
            case 'fullName':
                setErrors(prev => ({ ...prev, fullName: validateFullName(fullName) }))
                break
            case 'email':
                setErrors(prev => ({ ...prev, email: validateEmail(email) }))
                break
            case 'userName':
                setErrors(prev => ({ ...prev, userName: validateUserName(userName) }))
                break
            case 'password':
                setErrors(prev => ({ ...prev, password: validatePassword(password) }))
                break
            case 'confirmPassword':
                setErrors(prev => ({
                    ...prev,
                    confirmPassword: validateConfirmPassword(confirmPassword, password)
                }))
                break
        }
    }

    const submitForm = async (registerFn: (email: string, userName: string, password: string) => void | Promise<void>, navigate: (delta: number) => void) => {
        setSubmitError(null)

        if (!validateForm()) {
            handleBlur('fullName')
            handleBlur('email')
            handleBlur('userName')
            handleBlur('password')
            handleBlur('confirmPassword')
            return false
        }

        setIsSubmitting(true)

        try {
            await registerFn(email, userName, password)
            navigate(-1)
            return true
        } catch (error) {
            setSubmitError('Ошибка при регистрации. Попробуйте позже.')
            return false
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        fullName,
        email,
        userName,
        password,
        confirmPassword,
        errors,
        touched,
        submitError,
        isSubmitting,
        setHandleName: handleFullNameChange,
        setHandleEmail: handleEmailChange,
        setHandleUserName: handleUserNameChange,
        setHandlePassword: handlePasswordChange,
        setHandleConfirmPassword: handleConfirmPasswordChange,
        handleBlur,
        submitForm,
    }
}