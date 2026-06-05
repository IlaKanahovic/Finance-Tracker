import { PreferencesSetupCurrency } from "./Assist/PreferencesSetupCurrency"
import { PreferencesSetupDateFormat } from "./Assist/PreferencesSetupDateFormat"
import { PreferencesSetupLanguage } from "./Assist/PreferencesSetupLanguage"
import { PreferencesSetupTheme } from "./Assist/PreferencesSetupTheme"
import { PreferencesSetupTransactionOnPage } from "./Assist/PreferencesSetupTransactionOnPage"
import { PreferencesSetupWeekStart } from "./Assist/PreferencesSetupWeekStart"

export function SettingsPreferencesSetup() {
    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Preferences</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    Customize your application experience.
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