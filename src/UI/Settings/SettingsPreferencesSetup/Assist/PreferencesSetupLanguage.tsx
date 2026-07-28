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
            <div className="mb-3 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('language')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer ${language === 'en'
                        ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                        : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setLanguageFormat('en')}>
                    {t('english')}
                </button>
                <button
                    className={`px-4 py-1.5 text-sm border rounded-md transition-all duration-300 cursor-pointer ${language === 'ru'
                        ? 'border-(--border-header-buttons-hover) text-(--text-main) bg-(--text-expenses-item-hover)'
                        : 'border-(--border-header-buttons) text-(--text-secondary) hover:border-(--border-header-buttons-hover) hover:text-(--text-main)'
                        }`}
                    onClick={() => setLanguageFormat('ru')}>
                    {t('russian')}
                </button>
            </div>
        </div>
    )
}