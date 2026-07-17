import { useState } from "react"
import { usePasswordValidation } from "../../../BLL/valid/usePasswordValidation"
import { SettingSecurityTwoAuth } from "./Assist/SettingSecurityTwoAuth"
import { editPassword } from "../../../DAL/authRequests"
import { useTranslation } from "react-i18next"

export function SettingsSecuritySetup() {
    const [currentPas, setCurrentPas] = useState('')
    const [confirmPas, setConfirmPas] = useState('')
    const [newPas, setNewPas] = useState('')
    const [status, setStatus] = useState('')
    const { t } = useTranslation()

    const {
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
    } = usePasswordValidation()

    const handleEditPassword = async (curP: string, newP: string) => {
        const edit = await editPassword(curP, newP)
        if (edit.status === 200) {
            setCurrentPas('')
            setConfirmPas('')
            setNewPas('')
            setStatus('Успешно')
        } else if (edit.status === 400) {
            const data = await edit.json()
            setStatus(data.message)
        } else if (edit.status === 401) {
            setStatus('Неверный пароль')
        } else if (edit.status === 404) {
            setStatus('Пользователь не найден')
        }
    }

    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">{t('security')}</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    {t('keep_your_account')}
                </p>
            </div>
            <div className="space-y-8">
                <div>
                    <div className="mb-2 pb-1 border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('change_password')}</span>
                    </div>
                    <div className="space-y-4 max-w-md">
                        <div>
                            <input
                                type="password"
                                placeholder={t('current_password')}
                                value={currentPassword}
                                onChange={(e) => {
                                    handleCurrentPasswordChange(e.target.value)
                                    setCurrentPas(e.target.value)
                                }}
                                className={`w-full bg-black border rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white ${currentPasswordError ? 'border-red-500 focus:border-red-500 hover:border-red-500' : 'border-gray-700'}`}
                            />
                            {currentPasswordError && (
                                <p className="text-red-400 text-xs mt-1 animate-in fade-in duration-200">
                                    {currentPasswordError}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder={t('new_password')}
                                value={newPassword}
                                onChange={(e) => {
                                    handleNewPasswordChange(e.target.value)
                                    setConfirmPas(e.target.value)
                                }}
                                className={`w-full bg-black border rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white ${newPasswordError ? 'border-red-500 focus:border-red-500 hover:border-red-500' : 'border-gray-700'}`}
                            />
                            {newPasswordError && (
                                <p className="text-red-400 text-xs mt-1 animate-in fade-in duration-200">
                                    {newPasswordError}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder={t('confirm_new_password')}
                                value={confirmPassword}
                                onChange={(e) => {
                                    handleConfirmPasswordChange(e.target.value)
                                    setNewPas(e.target.value)
                                }}
                                className={`w-full bg-black border rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white ${confirmPasswordError ? 'border-red-500 focus:border-red-500 hover:border-red-500' : 'border-gray-700'}`}
                            />
                            {confirmPasswordError && (
                                <p className="text-red-400 text-xs mt-1 animate-in fade-in duration-200">
                                    {confirmPasswordError}
                                </p>
                            )}
                        </div>
                        <div className="flex gap-4 pt-2">
                            <button
                                type="button"
                                disabled={!isPasswordFormValid()}
                                onClick={() => handleEditPassword(currentPas, newPas)}
                                className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer ${isPasswordFormValid() ? 'border-gray-600 text-gray-200 hover:border-white hover:text-white' : 'border-gray-800 text-gray-600 cursor-not-allowed opacity-50'}`}
                            >
                                {t('update_password')}
                            </button>
                            <button
                                type="button"
                                className="px-4 py-1.5 text-sm text-blue-400 transition-all duration-300 cursor-pointer hover:text-white"
                            >
                                {t('reset_password')}
                            </button>
                        </div>
                        {status && (
                            <div className={`
                                text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 animate-in fade-in
                                ${status === 'Успешно' && 'text-green-400 border border-green-400/30 bg-green-400/10'}
                                ${status === 'Неверный пароль' && 'text-red-400 border border-red-400/30 bg-red-400/10'}
                                ${status === 'Пользователь не найден' && 'text-orange-400 border border-orange-400/30 bg-orange-400/10'}
                                ${status === 'Пароль должен содержать минимум 8 символов' && 'text-yellow-400 border border-yellow-400/30 bg-yellow-400/10'}
                                ${status === 'Пароль должен содержать заглавную букву' && 'text-yellow-400 border border-yellow-400/30 bg-yellow-400/10'}
                                ${status === 'Пароль должен содержать цифру' && 'text-yellow-400 border border-yellow-400/30 bg-yellow-400/10'}
                            `}>
                                {status}
                            </div>
                        )}
                    </div>
                </div>
                <div className="opacity-0"> {confirmPas} </div>
                <SettingSecurityTwoAuth />
            </div>
        </div>
    )
}