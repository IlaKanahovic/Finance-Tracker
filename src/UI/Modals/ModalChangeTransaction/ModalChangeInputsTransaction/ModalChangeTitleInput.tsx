
type ModalChangeTitleInputType = {
    setTitle: (value: string) => void
    title: string
}

export function ModalChangeTitleInput(props: ModalChangeTitleInputType) {
    return (
        <div className='mt-4'>
            <label
                htmlFor="title"
                className="text-xl text-white font-medium block mb-2"
            > Title
            </label>
            <input
                type="text"
                id="title"
                name="title"
                required
                placeholder=""
                value={props.title}
                className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3
                text-white text-base placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors font-mono 
                [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={(event) => props.setTitle(event.target.value)}
            />
        </div>
    )
}