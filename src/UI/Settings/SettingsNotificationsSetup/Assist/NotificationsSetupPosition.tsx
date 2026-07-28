import { useTranslation } from "react-i18next"
import { notificationsPosition, setNotificationPosition } from "../../../../store/settingsStore"


export function NotificationsSetupPosition() {
    const { t } = useTranslation()
    const positionNotific = notificationsPosition()
    return (
        <div>
            <div className="mb-4 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('toast_position')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                                hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${positionNotific === 'top-center'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setNotificationPosition('top-center')}
                >
                    {t('position_top-center')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                                hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${positionNotific === 'bottom-center'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setNotificationPosition('bottom-center')}
                >
                    {t('position_bottom-center')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                                hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${positionNotific === 'bottom-right'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setNotificationPosition('bottom-right')}
                >
                    {t('position_bottom-right')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                                hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${positionNotific === 'bottom-left'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setNotificationPosition('bottom-left')}
                >
                    {t('position_bottom-left')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                                hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${positionNotific === 'top-right'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setNotificationPosition('top-right')}
                >
                    {t('position_top-right')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer
                                hover:border-(--border-header-buttons-hover) hover:text-(--text-main) ${positionNotific === 'top-left'
                            ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                            : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setNotificationPosition('top-left')}
                >
                    {t('position_top-left')}
                </button>
            </div>
        </div>
    )
}