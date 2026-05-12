
type ModalChangeButtonFormType = {
    onClose: () => void
}

export function ModalChangeButtonsForm(props: ModalChangeButtonFormType) {
    return (
        <div className="mt-8 flex justify-center items-center">
            <button
                type="button"
                className="cursor-pointer bg-transparent border border-[#333333] text-white 
                text-base font-medium p-3 px-15 rounded-lg hover:border-white hover:bg-white/5 transition-all mr-4"
                onClick={() => {
                    props.onClose()
                }}
            >
                Cancel
            </button>
            <button
                className="cursor-pointer bg-white text-black text-base font-medium p-3 px-15 rounded-lg hover:bg-gray-200 transition-all"
                type="submit"
            >
                Change
            </button>
        </div>
    )
}