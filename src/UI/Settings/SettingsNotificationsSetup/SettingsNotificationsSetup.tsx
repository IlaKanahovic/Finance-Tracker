import { useTranslation } from "react-i18next"
import {notificationsAnimation, notificationsSwitch, setNotificationsAnimation, setNotificationsSwitch} from "../../../store/settingsStore"
import toast from "react-hot-toast"
import { NotificationsSetupPosition } from "./Assist/NotificationsSetupPosition"

export function SettingsNotificationsSetup() {
    const { t } = useTranslation()
    const switchNotific = notificationsSwitch()
    const animationNotific = notificationsAnimation()

    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">{t('notifications')}</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    {t('manage_alerts')}
                </p>
            </div>

            <div className="space-y-8">
                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('toast_notifications')}</span>
                    </div>
                    <div className="flex items-center justify-between max-w-md">
                        <span className="text-sm text-gray-300">{t('show_toast_notifications')}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={switchNotific}
                                onChange={() => {
                                    const newState = !switchNotific
                                    setNotificationsSwitch(newState)
                                    toast(newState ? 'Уведомления включены' : 'Уведомления выключены')
                                }}
                            />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300 peer cursor-pointer after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 peer-checked:after:translate-x-5"></div>
                        </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{t('toast_description')}</p>
                </div>

                <NotificationsSetupPosition />

                <div>
                    <div className="mb-4 pb-1 border-b border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('toast_animation')}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button
                            className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                    hover:border-white hover:text-white ${animationNotific === 'animation_fade'
                                    ? 'border-white text-white bg-white/5'
                                    : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                                }`}
                            onClick={() => setNotificationsAnimation('animation_fade')}
                        >
                            {t('animation_fade')}
                        </button>
                        <button
                            className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                    hover:border-white hover:text-white ${animationNotific === 'animation_slide'
                                    ? 'border-white text-white bg-white/5'
                                    : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                                }`}
                            onClick={() => setNotificationsAnimation('animation_slide')}
                        >
                            {t('animation_slide')}
                        </button>
                        <button
                            className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                    hover:border-white hover:text-white ${animationNotific === 'animation_zoom'
                                    ? 'border-white text-white bg-white/5'
                                    : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                                }`}
                            onClick={() => setNotificationsAnimation('animation_zoom')}
                        >
                            {t('animation_zoom')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}