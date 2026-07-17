import { useTranslation } from "react-i18next"

export function SettingsPreview() {
    const { t } = useTranslation()

    return (
        <div className="mt-18">
            <h1 className="text-2xl">{t('prof_preferences')}</h1>
            <p className="mt-4 text-xs text-gray-400">{t('description_settings')}</p>
        </div>
    )
}