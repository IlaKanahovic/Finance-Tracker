import { useTranslation } from "react-i18next"
import { PreferencesSetupCurrency } from "./Assist/PreferencesSetupCurrency"
import { PreferencesSetupDateFormat } from "./Assist/PreferencesSetupDateFormat"
import { PreferencesSetupLanguage } from "./Assist/PreferencesSetupLanguage"
import { PreferencesSetupTheme } from "./Assist/PreferencesSetupTheme"
import { PreferencesSetupTransactionOnPage } from "./Assist/PreferencesSetupTransactionOnPage"
import { PreferencesSetupWeekStart } from "./Assist/PreferencesSetupWeekStart"

export function SettingsPreferencesSetup() {
    const { t } = useTranslation()

    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">{t('preferences')}</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    {t('customaize_application')}
                </p>
            </div>
            <div className="space-y-6">
                <PreferencesSetupCurrency />
                <PreferencesSetupTheme />
                <PreferencesSetupDateFormat />
                <PreferencesSetupWeekStart />
                <PreferencesSetupLanguage />
                <PreferencesSetupTransactionOnPage />
            </div>
        </div>
    )
}