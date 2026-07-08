import { SettingsHeader } from "./SettingsHeader/SettingsHeader";
import { SettingsPreview } from "./SettingsPreview/SettingsPreview";
import { SettingsAccountSetup } from "./SettingsAccountSetup/SettingsAccountSetup";
import { SettingsSecuritySetup } from "./SettingsSecuritySetup/SettingsSecuritySetup";
import { SettingsPreferencesSetup } from "./SettingsPreferencesSetup/SettingsPreferencesSetup";
import { SettingsNotificationsSetup } from "./SettingsNotificationsSetup/SettingsNotificationsSetup";
import { SettingsDataSetup } from "./SettingsDataSetup/SettingsDataSetup";
import { SettingsAboutSetup } from "./SettingsAboutSetup/SettingsAboutSetup";
import { SettingsFooterSetup } from "./SettingsFooterSetup/SettingsFooterSetup";
import { useEffect } from "react";
import { useStatusStore } from "../../store/statusStore";

export function SettingsMain() {
    const setStatus = useStatusStore((state) => state.setStatus)
    useEffect(() => {
        setStatus('')
        return () => {
            setStatus('')
        }
    }, [setStatus])

    return (
        <div >
            <SettingsHeader />
            <SettingsPreview />
            <hr className="mt-8 border border-gray-800" />
            <SettingsAccountSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsSecuritySetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsPreferencesSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsNotificationsSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsDataSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsAboutSetup />
            <hr className="mt-8 border border-gray-800" />
            <SettingsFooterSetup />
        </div>
    )
}