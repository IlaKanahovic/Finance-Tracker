import { useState } from 'react'

interface FormErrors {
    emailOrUsername?: string
    password?: string
}

export function useSignInForm() {
    const [emailOrUsername, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<FormErrors>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateEmailOrUsername = (value: string) => {
        if (!value) return 'Email или имя пользователя обязательно'
        if (value.length < 3) return 'Минимум 3 символа'
        return ''
    }

    const validatePassword = (value: string) => {
        if (!value) return 'Пароль обязателен'
        if (value.length < 6) return 'Пароль должен быть минимум 6 символов'
        return ''
    }

    const validateForm = () => {
        const newErrors: FormErrors = {
            emailOrUsername: validateEmailOrUsername(emailOrUsername),
            password: validatePassword(password),
        }

        setErrors(newErrors)
        return !Object.values(newErrors).some(error => error)
    }

    const handleEmailOrUsernameChange = (value: string) => {
        setEmailOrUsername(value)
        if (touched.emailOrUsername) {
            setErrors(prev => ({ ...prev, emailOrUsername: validateEmailOrUsername(value) }))
        }
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value)
        if (touched.password) {
            setErrors(prev => ({ ...prev, password: validatePassword(value) }))
        }
    }

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }))

        switch (field) {
            case 'emailOrUsername':
                setErrors(prev => ({ ...prev, emailOrUsername: validateEmailOrUsername(emailOrUsername) }))
                break
            case 'password':
                setErrors(prev => ({ ...prev, password: validatePassword(password) }))
                break
        }
    }

    const submitForm = async (loginFn: (emailOrUsername: string, password: string) => void, navigate: (path: string) => void) => {
        setSubmitError(null)

        if (!validateForm()) {
            handleBlur('emailOrUsername')
            handleBlur('password')
            return
        }

        setIsSubmitting(true)

        try {
            await loginFn(emailOrUsername, password)
            navigate('/')
        } catch (error) {
            setSubmitError('Ошибка при входе. Проверьте данные или попробуйте позже.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        emailOrUsername,
        password,
        errors,
        touched,
        submitError,
        isSubmitting,
        setHandleEmailOrUsername: handleEmailOrUsernameChange,
        setHandlePassword: handlePasswordChange,
        handleBlur,
        submitForm,
    }
}