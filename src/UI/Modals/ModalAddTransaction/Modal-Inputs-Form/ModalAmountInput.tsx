import { useTranslation } from "react-i18next"


export function ModalAmountInput(props: { setAmount: (value: string) => void }) {
    const { t } = useTranslation()

    return (
        <div>
            <label
                htmlFor="amount"
                className="text-xl text-(--text-main) font-medium block mb-2"
            > {t('amount')}
            </label>
            <input
                type="number"
                id="amount"
                name="amount"
                required
                placeholder="0.00"
                step="any"
                className="w-full bg-(--bg) border border-[#333333] rounded-lg px-4 py-3 text-(--text-main) text-base placeholder:text-(--text-placeholder) focus:outline-none focus:border-(--text-main) transition-colors font-mono [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={(event) => props.setAmount(event.target.value)}
            />
        </div>
    )
}