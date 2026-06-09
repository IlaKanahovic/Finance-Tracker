export type Props = {
    isOpen: boolean
    onClose: () => void
}

export function ModalButtonsForm(props: Props) {
    return (
        <div className="flex gap-4 pt-4">
            <button
                type="button"
                className="flex-1 cursor-pointer bg-transparent border border-[#333333] text-white text-base font-medium py-3 rounded-lg hover:border-white hover:bg-white/5 transition-all"
                onClick={() => { props.onClose() }}
            > Cancel
            </button>
            <button
                type="submit"
                className="flex-1 cursor-pointer bg-white text-black text-base font-medium py-3 rounded-lg hover:bg-gray-200 transition-all"
            > Add
            </button>
        </div>
    )
}