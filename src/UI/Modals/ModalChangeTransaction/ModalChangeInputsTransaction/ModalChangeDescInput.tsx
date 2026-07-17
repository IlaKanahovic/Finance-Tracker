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
                className="text-xl text-white font-medium block mb-2"
            > {t('description')}
            </label>
            <input
                type="text"
                id="description"
                name="description"
                required
                placeholder=""
                value={props.description}
                className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white text-base placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors font-mono"
                onChange={(event) => props.setDesc(event.target.value)}
            />
        </div>
    )
}