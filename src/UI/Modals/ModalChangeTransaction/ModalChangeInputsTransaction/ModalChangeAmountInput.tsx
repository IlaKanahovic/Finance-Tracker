import { useTranslation } from "react-i18next"

type ModalChangeAmountInputType = {
    setAmount: (value: string) => void
    amount: string
}

export function ModalChangeAmountInput(props: ModalChangeAmountInputType) {
    const { t } = useTranslation()

    return (
        <div className='mt-4'>
            <label
                htmlFor="amount"
                className="text-xl text-white font-medium block mb-2"
            > {t('mount')}
            </label>
            <input
                type="number"
                id="amount"
                name="amount"
                required
                placeholder="0.00"
                step="any"
                value={props.amount}
                className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white text-base placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors font-mono [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={(event) => props.setAmount(event.target.value)}
            />
        </div>
    )
}