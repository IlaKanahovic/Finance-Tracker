import { useState } from "react"

export function useButtonTransaction() {
    const [openModalAddTransaction, setOpenModalAddTransaction] = useState<boolean>(false)
    return { openModalAddTransaction, setOpenModalAddTransaction }
}