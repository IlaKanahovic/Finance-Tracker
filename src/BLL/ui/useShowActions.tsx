import { useState } from "react"


export function useShowActions() {
    const [showActions, setShowActions] = useState(false)

    return {showActions, setShowActions}
}