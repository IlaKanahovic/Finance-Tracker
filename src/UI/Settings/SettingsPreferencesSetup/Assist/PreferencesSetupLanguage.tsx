import { useTranslation } from "react-i18next";
import { languageFormat, setLanguageFormat } from "../../../../store/settingsStore";
import { useEffect } from "react";

export function PreferencesSetupLanguage() {
    const { t, i18n } = useTranslation()
    const language = languageFormat()

    useEffect(() => {
        i18n.changeLanguage(language)
        localStorage.setItem('preferredLanguage', language)
    }, [language])


    return (
        <div>
            <div className="mb-3 pb-1 border-b border-gray-800">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('language')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer ${language === 'en'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setLanguageFormat('en')}>
                    {t('english')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer ${language === 'ru'
                        ? 'border-white text-white bg-white/5'
                        : 'border-gray-600 text-gray-200 hover:border-white hover:text-white'
                        }`}
                    onClick={() => setLanguageFormat('ru')}>
                    {t('russian')}
                </button>
            </div>
        </div>
    )
}