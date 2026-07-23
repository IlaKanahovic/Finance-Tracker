import { useTranslation } from "react-i18next"
import { notificationsPosition, setNotificationPosition } from "../../../../store/settingsStore"


export function NotificationsSetupPosition() {
    const { t } = useTranslation()
    const positionNotific = notificationsPosition()
    return (
        <div>
            <div className="mb-4 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('toast_position')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                hover:border-white hover:text-white ${positionNotific === 'top-center'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setNotificationPosition('top-center')}
                >
                    {t('position_top-center')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                hover:border-white hover:text-white ${positionNotific === 'bottom-center'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setNotificationPosition('bottom-center')}
                >
                    {t('position_bottom-center')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                hover:border-white hover:text-white ${positionNotific === 'bottom-right'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setNotificationPosition('bottom-right')}
                >
                    {t('position_bottom-right')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                hover:border-white hover:text-white ${positionNotific === 'bottom-left'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setNotificationPosition('bottom-left')}
                >
                    {t('position_bottom-left')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                hover:border-white hover:text-white ${positionNotific === 'top-right'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setNotificationPosition('top-right')}
                >
                    {t('position_top-right')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border border-gray-600 rounded-md text-gray-200 transition-all duration-300 cursor-pointer
                                hover:border-white hover:text-white ${positionNotific === 'top-left'
                            ? 'border-white text-white bg-white/5'
                            : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setNotificationPosition('top-left')}
                >
                    {t('position_top-left')}
                </button>
            </div>
        </div>
    )
}