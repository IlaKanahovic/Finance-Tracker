import { useEffect, useState, useCallback } from "react";
import { getTransactions, type GetTransactions } from "../../DAL/api";

export function useTransactions() {
    const [dataTransactions, setDataTransactions] = useState<GetTransactions[] | null>(null)

    const loadTransactions = useCallback(() => {
        console.log('transactions')
        getTransactions()
            .then(json => {
                if (Array.isArray(json)) {
                    setDataTransactions(json)
                } else {
                    setDataTransactions([])
                }
            })
            .catch(error => {
                console.error('Failed to load transactions:', error)
                setDataTransactions([])
            })
    }, [])

    useEffect(() => {
        loadTransactions()
    }, [loadTransactions])

    return { dataTransactions, refreshTransactions: loadTransactions }
}