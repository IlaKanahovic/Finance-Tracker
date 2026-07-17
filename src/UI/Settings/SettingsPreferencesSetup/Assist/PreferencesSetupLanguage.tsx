import { useState } from "react";
import { useTranslation } from "react-i18next";

export function PreferencesSetupLanguage() {
    const { t, i18n } = useTranslation()
    const [activeLanguage, setActiveLanguage] = useState(i18n.language || 'en')

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('preferredLanguage', lng)
        setActiveLanguage(lng)
    }

    return (
        <div>
            <div className="mb-3 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('language')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer ${activeLanguage === 'en'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => changeLanguage('en')}>
                    {t('english')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer ${activeLanguage === 'ru'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => changeLanguage('ru')}>
                    {t('russian')}
                </button>
            </div>
        </div>
    )
}