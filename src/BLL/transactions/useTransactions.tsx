import { useEffect, useState } from "react";
import { getTransactions, type GetTransactions } from "../../DAL/api";


export function useTransactions() {
    const [dataTransactions, setDataTransactions] = useState<GetTransactions[] | null>(null)

    useEffect(() => {
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

    return { dataTransactions }
}