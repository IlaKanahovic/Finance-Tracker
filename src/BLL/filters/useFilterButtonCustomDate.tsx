import { useState } from "react";


export function useFilterButtonCustomDate() {
    const [openModalDateInputs, setOpenModalDateInputs] = useState(false)

    return { openModalDateInputs, setOpenModalDateInputs }
}