import { useEffect, useState } from "react";
import { getTransactions, type GetTransactions} from "../DAL/api";


export function useTransactions() {
    const [dataTransactions, setDataTransactions] = useState<GetTransactions[] | null>(null)

    useEffect(() => {
        console.log('transactions')

        getTransactions()
            .then(json => setDataTransactions(json))
    }, [])

    return { dataTransactions }
}