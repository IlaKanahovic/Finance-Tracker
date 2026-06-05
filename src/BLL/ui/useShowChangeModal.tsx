import { useState } from "react";


export function useShowChangeModal() {
    const [showChangeModal, setShowChangeModal] = useState(false)

    return { showChangeModal, setShowChangeModal }
}