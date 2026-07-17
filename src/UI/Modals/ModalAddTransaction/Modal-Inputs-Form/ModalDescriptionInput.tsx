import { useTranslation } from "react-i18next"


export function ModalDescriptionInput(props: { setDesc: (value: string) => void }) {
    const { t } = useTranslation()

    return (
        <div>
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
                className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white text-base placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors font-mono"
                onChange={(event) => props.setDesc(event.target.value)}
            />
        </div>
    )
}

