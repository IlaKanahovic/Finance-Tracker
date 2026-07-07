import { useState } from "react"
import { editUserName } from "../../../../DAL/authRequests"

export function AccountSetupNameInput() {
    const [name, setName] = useState(() => {
        const data = localStorage.getItem('auth-storage')
        if (!data) return ''
        const parsed = JSON.parse(data)
        return parsed?.state?.user?.userName || ''
    })
    const [status, setStatus] = useState('')

    const data = localStorage.getItem('auth-storage')
    if (!data) return <div> :( </div>
    const dataValue = JSON.parse(data)

    const handleEditName = async (name: string) => {
        const edit = await editUserName(name)
        if (edit.status === 200) {
            setStatus('Успешно')
        } else if (edit.status === 400) {
            setStatus('Введите корректное имя')
        } else if (edit.status === 401) {
            setStatus('Вы не авторизованы')
        } else if (edit.status === 404) {
            setStatus('Пользователь не найден')
        } else if (edit.status === 409) {
            setStatus('Имя занято')
        } else if (edit.status === 422) {
            setStatus('Имя некорректно')
        }
    }

    return (
        <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-gray-400 sm:hidden">User name</label>
            <input
                type="text"
                autoComplete="off"
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer hover:border-white hover:placeholder-white focus:border-white focus:placeholder-white"
            />
            {status && (
                <div className={`
    text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300
    ${status === 'Успешно' && 'text-green-400 border border-green-400/30 bg-green-400/10'}
    ${status === 'Введите корректное имя' && 'text-red-400 border border-red-400/30 bg-red-400/10'}
    ${status === 'Вы не авторизованы' && 'text-yellow-400 border border-yellow-400/30 bg-yellow-400/10'}
    ${status === 'Пользователь не найден' && 'text-orange-400 border border-orange-400/30 bg-orange-400/10'}
    ${status === 'Имя занято' && 'text-red-400 border border-red-400/30 bg-red-400/10'}
    ${status === 'Имя некорректно' && 'text-red-400 border border-red-400/30 bg-red-400/10'}
    ${!status && 'opacity-0'}`}>
                    {status}
                </div>
            )}
            <label className="block text-xs text-gray-500">
                Your username
            </label>
            <div className="pt-2">
                <button
                    type="button"
                    className="px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer hover:border-white hover:text-white"
                    onClick={async () => {
                        handleEditName(name)
                        dataValue.state.user.userName = name
                        localStorage.setItem('auth-storage', JSON.stringify(dataValue))
                    }}
                >
                    Edit user name
                </button>
            </div>
        </div>
    )
}