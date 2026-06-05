import { useEffect, useState, useRef } from "react"

export function useCurrentBalanceCard(dataTransactions: any) {
    const [lastUpdateTime, setLastUpdateTime] = useState("")
    const isInitialLoad = useRef(true)
    const prevDataRef = useRef<any>(dataTransactions)

    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false
            prevDataRef.current = dataTransactions
            return
        }

        if (prevDataRef.current !== dataTransactions) {
            const now = new Date()
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            setLastUpdateTime(time)
            prevDataRef.current = dataTransactions
        }
    }, [dataTransactions])

    return lastUpdateTime
}