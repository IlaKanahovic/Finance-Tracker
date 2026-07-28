import { useTranslation } from "react-i18next"

type ModalChangeTitleInputType = {
    setTitle: (value: string) => void
    title: string
}

export function ModalChangeTitleInput(props: ModalChangeTitleInputType) {
    const { t } = useTranslation()

    return (
        <div className='mt-4'>
            <label
                htmlFor="title"
                className="text-xl text-(--text-main) font-medium block mb-2"
            > {t('title')}
            </label>
            <input
                type="text"
                id="title"
                name="title"
                required
                placeholder=""
                value={props.title}
                className="w-full bg-(--bg) border border-[#333333] rounded-lg px-4 py-3 text-(--text-main) text-base placeholder:text-(--text-placeholder) focus:outline-none focus:border-(--text-main) transition-colors font-mono [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={(event) => props.setTitle(event.target.value)}
            />
        </div>
    )
}