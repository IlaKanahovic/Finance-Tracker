import { DataSetupButtonDeleteTransactions } from "./Assist/DataSetupButtonDeleteTransactions"
import { DataSetupExport } from "./Assist/DataSetupExport"
import { DataSetupImport } from "./Assist/DataSetupImport"


export function SettingsDataSetup() {
    return (
        <div className="max-w-2xl mx-auto text-gray-100 mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Data</h1>
                <p className="text-sm text-gray-400 mt-1 border-l-2 border-gray-700 pl-3">
                    Manage your data, exports, and imports.
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