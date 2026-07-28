import { useState } from "react"
import { editEmail } from "../../../DAL/authRequests"
import { useStatusStore } from "../../../store/statusStore"
import { useTranslation } from "react-i18next"
import toast from "react-hot-toast"

type Props = {
    onClose: () => void
    email: string
}

export function ModalCheckPassword(props: Props) {
    const [password, setPassword] = useState('')
    const { setStatus } = useStatusStore()
    const { t } = useTranslation()

    const data = localStorage.getItem('auth-storage')
    if (!data) return <div> :( </div>
    const dataValue = JSON.parse(data)

    const handleEditEmail = async (email: string, password: string) => {
        const edit = await editEmail(email, password)
        if (edit.status === 200) {
            setStatus('Успешно')
            toast.success(t('toast_email_updated'))
        } else if (edit.status === 400) {
            const data = await edit.json()
            setStatus(data.message)
            toast.error(data.message)
        } else if (edit.status === 401) {
            setStatus('Неверный пароль')
            toast.error(t('toast_password_incorrect'))
        } else if (edit.status === 404) {
            setStatus('Пользователь не найден')
            toast.error(t('toast_user_not_found'))
        } else if (edit.status === 409) {
            setStatus('Пользователь с таким email уже существует')
            toast.error(t('toast_email_taken'))
        }
    }

    return (
        <div className="fixed inset-0 bg-(--bg)/80 flex items-center justify-center z-50">
            <div className="bg-(--bg) border border-(--border-header-buttons) rounded-2xl px-15 pt-10 pb-15 w-full max-w-md shadow-2xl">
                <div className="w-full">
                    <h1 className="text-2xl text-(--text-main) text-center">{t('enter_your_password')}</h1>

                    <div className="mt-8">
                        <label className="block text-sm text-(--text-secondary) mb-2">{t('password')}</label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            className="w-full bg-(--bg) border border-(--border-header-buttons) rounded-lg px-4 py-3 text-(--text-main) text-base placeholder:text-(--text-secondary) focus:outline-none focus:border-(--border-header-buttons-hover) transition-colors"
                            placeholder={t('enter_your_password')}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="mt-8 flex justify-center items-center gap-4">
                        <button
                            type="button"
                            onClick={() => props.onClose()}
                            className="cursor-pointer bg-transparent border border-(--border-header-buttons) text-(--text-main) text-base font-medium p-3 px-15 rounded-lg hover:border-(--border-header-buttons-hover) hover:bg-(--text-expenses-item-hover) transition-all"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="button"
                            onClick={async () => {
                                await handleEditEmail(props.email, password)
                                props.onClose()
                                dataValue.state.user.email = props.email
                                localStorage.setItem('auth-storage', JSON.stringify(dataValue))
                            }}
                            className="cursor-pointer bg-(--black-ili-white) text-(--bg) text-base font-medium p-3 px-15 rounded-lg hover:opacity-80 transition-all"
                        >
                            {t('confirm')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}