import { useState } from "react"
import { ModalCheckPassword } from "../../../Modals/ModalCheckPassword/ModalCheckPassword"
import { validateEmail } from "../../../../assets/static-files/validateEmail"
import { useStatusStore } from "../../../../store/statusStore"
import { useTranslation } from "react-i18next"

export function AccountSetupEmailInput() {
    const [openModal, setOpenModal] = useState(false)
    const [email, setEmail] = useState(() => {
        const data = localStorage.getItem('auth-storage')
        if (!data) return ''
        const parsed = JSON.parse(data)
        return parsed?.state?.user?.email || ''
    })
    const [emailError, setEmailError] = useState("")

    const { status } = useStatusStore()

    const handleOpenModal = () => {
        if (email.length > 0) {
            setOpenModal(true)
        }
    }

    const { t } = useTranslation()

    return (
        <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-(--text-secondary) sm:hidden">{t('email')}</label>

            <input
                type="email"
                autoComplete="off"
                value={email}
                className={`w-full bg-(--bg) border rounded-md px-3 py-2 text-(--text-main) placeholder-(--text-secondary) focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-(--border-header-buttons-hover) hover:placeholder-(--text-main) focus:border-(--border-header-buttons-hover) focus:placeholder-(--text-main) ${emailError ? 'border-red-500 focus:border-red-500 hover:border-red-500' : 'border-(--border-header-buttons)'}`}
                onChange={(event) => {
                    setEmail(event.target.value)
                    const error = validateEmail(event.target.value)
                    setEmailError(error)
                }}
            />
            {emailError && (
                <p className="text-red-400 text-xs mt-1 animate-in fade-in duration-200">
                    {emailError}
                </p>
            )}

            {status && (
                <div className={`
        text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 animate-in fade-in 
        ${status === 'Успешно' && 'text-green-400 border border-green-400/30 bg-green-400/10'}
        ${status === 'Неверный пароль' && 'text-red-400 border border-red-400/30 bg-red-400/10'}
        ${status === 'Пользователь не найден' && 'text-orange-400 border border-orange-400/30 bg-orange-400/10'}
        ${status === 'Пользователь с таким email уже существует' && 'text-red-400 border border-red-400/30 bg-red-400/10'}
        ${status === 'Пароль обязателен' && 'text-yellow-400 border border-yellow-400/30 bg-yellow-400/10'}
        ${status === 'Email обязателен' && 'text-yellow-400 border border-yellow-400/30 bg-yellow-400/10'}
        ${status === 'Новый email совпадает с текущим' && 'text-yellow-400 border border-yellow-400/30 bg-yellow-400/10'}
    `}>
                    {t(`${status}`)}
                </div>
            )}

            <label className="block text-xs text-(--text-secondary)">
                {t('main_email')}
            </label>
            {openModal && email.length > 0 && (
                <ModalCheckPassword
                    onClose={() => setOpenModal(false)}
                    email={email}
                />
            )}
            <div className="flex flex-wrap gap-3 pt-2">
                <button
                    type="button"
                    onClick={() => handleOpenModal()}
                    className="px-4 py-1.5 text-sm border border-(--border-header-buttons) rounded-md text-(--text-main) transition-all duration-300 cursor-pointer hover:border-(--border-header-buttons-hover) hover:text-(--text-main)"
                >
                    {t('edit_email')}
                </button>
            </div>
        </div>
    )
}