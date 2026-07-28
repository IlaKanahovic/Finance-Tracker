import { useTranslation } from "react-i18next"

type ModalChangeDescInputType = {
    setDesc: (value: string) => void
    description: string
}

export function ModalChangeDescInput(props: ModalChangeDescInputType) {
    const { t } = useTranslation()

    return (
        <div className='mt-4'>
            <label
                htmlFor="description"
                className="text-xl text-(--text-main) font-medium block mb-2"
            > {t('description')}
            </label>
            <input
                type="text"
                id="description"
                name="description"
                required
                placeholder=""
                value={props.description}
                 className="w-full bg-(--bg) border border-[#333333] rounded-lg px-4 py-3 text-(--text-main) text-base placeholder:text-(--text-placeholder) focus:outline-none focus:border-(--text-main) transition-colors font-mono [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={(event) => props.setDesc(event.target.value)}
            />
        </div>
    )
}