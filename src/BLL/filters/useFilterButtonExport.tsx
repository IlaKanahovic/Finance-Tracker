import { useState } from "react"

export function useFilterButtonExport() {
    const [openModalExport, setOpenModalExport] = useState(false)

    return { openModalExport, setOpenModalExport }
}