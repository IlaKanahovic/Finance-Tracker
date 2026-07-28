import { useTranslation } from "react-i18next"

type ModalChangeButtonFormType = {
    onClose: () => void
}

export function ModalChangeButtonsForm(props: ModalChangeButtonFormType) {
    const { t } = useTranslation()

    return (
        <div className="mt-8 flex justify-center items-center">
            <button
                type="button"
                className="cursor-pointer bg-transparent border border-(--border-header-buttons) text-(--text-main) 
                text-base font-medium p-3 px-15 rounded-lg hover:border-(--border-header-buttons-hover) hover:bg-(--text-expenses-item-hover) transition-all mr-4"
                onClick={() => {
                    props.onClose()
                }}
            >
                {t('cancel')}
            </button>
            <button
                className="cursor-pointer bg-(--black-ili-white) text-(--bg) text-base font-medium p-3 px-15 rounded-lg hover:opacity-80 transition-all"
                type="submit"
            >
                {t('edit')}
            </button>
        </div>
    )
}