import { useTranslation } from "react-i18next";
import { AccountSetupNameInput } from "./Assist/AccountSetupNameInput";
import { AccountSetupEmailInput } from "./Assist/AcoountSetupEmailInput";

export function SettingsAccountSetup() {
    const { t } = useTranslation()

    return (
        <div className="max-w-2xl mx-auto text-(--text-main) mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-(--text-main)">{t('account')}</h1>
                <p className="text-sm text-(--text-secondary) mt-1 border-l-2 border-(--border-header-buttons) pl-3">
                    {t('personal_info')}
                </p>
            </div>
            <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6 mb-2 pb-1 border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('username')}</span>
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('email')}</span>
            </div>
            <form>
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 mb-6">
                    <AccountSetupNameInput />
                    <AccountSetupEmailInput />
                </div>
            </form>
        </div>
    )
}