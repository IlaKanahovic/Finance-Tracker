import { useEffect } from "react";
import { useCurrencyStore } from "../store/currencyStore";

export function useUpdatedTimeAPIRequastCurrency() {
    const rates = useCurrencyStore((state) => state.rates)
    const lastUpdated = useCurrencyStore((state) => state.lastUpdated)
    const setRates = useCurrencyStore((state) => state.setRates)

    const twoHours = 2 * 60 * 60 * 1000

    useEffect(() => {
        const now = Date.now()

        if (!rates || (now - Number(lastUpdated)) > twoHours) {
            setRates()
        }
    }, [rates, lastUpdated, setRates])
}