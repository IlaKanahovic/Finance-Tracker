import { useTranslation } from "react-i18next"

export function DataSetupImport() {
    const { t } = useTranslation()

    return (
        <div>
            <div className="mb-4 pb-1 border-b border-(--border-header-buttons)">
                <span className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">{t('import')}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <button className="px-4 py-1.5 text-sm border border-(--border-header-buttons) rounded-md text-(--text-secondary) cursor-not-allowed opacity-50">
                    CSV
                </button>
                <button className="px-4 py-1.5 text-sm border border-(--border-header-buttons) rounded-md text-(--text-secondary) cursor-not-allowed opacity-50">
                    JSON
                </button>
            </div>
            <span className="text-xs text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-2 py-0.5 rounded-full">
                {t('comming_some')}
            </span>
        </div>
    )
}