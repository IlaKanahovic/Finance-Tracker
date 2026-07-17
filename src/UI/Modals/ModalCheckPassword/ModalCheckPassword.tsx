import { useState } from "react"
import { editEmail } from "../../../DAL/authRequests"
import { useStatusStore } from "../../../store/statusStore"
import { useTranslation } from "react-i18next"

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
        } else if (edit.status === 400) {
            const data = await edit.json()
            setStatus(data.message)
        } else if (edit.status === 401) {
            setStatus('Неверный пароль')
        } else if (edit.status === 404) {
            setStatus('Пользователь не найден')
        } else if (edit.status === 409) {
            setStatus('Пользователь с таким email уже существует')
        }
    }

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#0A0A0A] border border-[#333333] rounded-2xl px-15 pt-10 pb-15 w-full max-w-md shadow-2xl">
                <div className="w-full">
                    <h1 className="text-2xl text-white text-center">{t('enter_your_password')}</h1>

                    <div className="mt-8">
                        <label className="block text-sm text-gray-400 mb-2">{t('password')}</label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white text-base placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors"
                            placeholder={t('enter_your_password')}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="mt-8 flex justify-center items-center gap-4">
                        <button
                            type="button"
                            onClick={() => props.onClose()}
                            className="cursor-pointer bg-transparent border border-[#333333] text-white text-base font-medium p-3 px-15 rounded-lg hover:border-white hover:bg-white/5 transition-all"
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
                            className="cursor-pointer bg-white text-black text-base font-medium p-3 px-15 rounded-lg hover:bg-gray-200 transition-all"
                        >
                            {t('confirm')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}