import { useTranslation } from "react-i18next"
import { DataSetupButtonDeleteTransactions } from "./Assist/DataSetupButtonDeleteTransactions"
import { DataSetupExport } from "./Assist/DataSetupExport"
import { DataSetupImport } from "./Assist/DataSetupImport"


export function SettingsDataSetup() {
    const { t } = useTranslation()

    return (
        <div className="max-w-2xl mx-auto text-(--text-main) mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-(--text-main)">{t('data')}</h1>
                <p className="text-sm text-(--text-secondary) mt-1 border-l-2 border-(--border-header-buttons) pl-3">
                    {t('manage_your_data')}
                </p>
            </div>
            <div className="space-y-8">
                <DataSetupExport />
                <DataSetupImport />
                <DataSetupButtonDeleteTransactions />
            </div>
        </div>
    )
}