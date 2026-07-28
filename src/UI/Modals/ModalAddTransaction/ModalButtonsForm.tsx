import { useTranslation } from "react-i18next"

export type Props = {
    isOpen: boolean
    onClose: () => void
}

export function ModalButtonsForm(props: Props) {
    const { t } = useTranslation()

    return (
        <div className="flex gap-4 pt-4">
            <button
                type="button"
                className="flex-1 duration-300 cursor-pointer bg-transparent border border-(--border-header-buttons) text-(--text-main) text-base font-medium py-3 rounded-lg hover:border-(--border-header-buttons-hover) hover:bg-(--text-expenses-item-hover) transition-all"
                onClick={() => { props.onClose() }}
            > {t('cancel')}
            </button>
            <button
                type="submit"
                className="flex-1 duration-300 cursor-pointer bg-(--black-ili-white) text-(--bg) text-base font-medium py-3 rounded-lg hover:opacity-80 transition-all"
            > {t('add')}
            </button>
        </div>
    )
}