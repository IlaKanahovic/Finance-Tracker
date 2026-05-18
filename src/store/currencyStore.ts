import { create, type StateCreator } from "zustand"
import { getActualCurrency, type GetActualCurrency } from "../DAL/getCurrencyAPI"
import { createJSONStorage, persist } from "zustand/middleware"

interface IActions {
    setRates: () => Promise<void>
    convertCurrency: (amount: number, currentCurrency: string, customCurrencySelection: string) => number
}

interface IInitialState {
    rates: GetActualCurrency | null
    lastUpdated: number | null
    currencyBase: string
}

interface ICurrencyState extends IActions, IInitialState { }

const initialState: IInitialState = {
    rates: null,
    lastUpdated: null,
    currencyBase: 'USD'
}

const currencyStore:
    StateCreator<
        ICurrencyState
    > = ((set, get) => ({
        ...initialState,
        setRates: async () => {
            const data = await getActualCurrency()
            set({ rates: data.conversion_rates })
            set({ lastUpdated: Date.now() })
        },
        convertCurrency: (amount, currentCurrency, customCurrencySelection) => {
            const { rates } = get()

            if (!rates) return amount
            if (currentCurrency === customCurrencySelection) return amount

            let rateFromCurrent = rates[currentCurrency as keyof GetActualCurrency]
            let amountIsUSD = amount / Number(rateFromCurrent)  
            let rateCustomTarget = rates[customCurrencySelection as keyof GetActualCurrency]

            const result = amountIsUSD * Number(rateCustomTarget)  

            return result
        }
    }))

export const useCurrencyStore = create<ICurrencyState>()(
    persist(currencyStore, {
        name: 'currency-storage',
        storage: createJSONStorage(() => localStorage)
    })
)

export const rates = () => useCurrencyStore((state) => state.rates)
export const lastUpdated = () => useCurrencyStore((state) => state.lastUpdated)
export const setRates = () => useCurrencyStore.getState().setRates
export const convertCurrency = (amount: number, currentCurrency: string, customCurrencySelection: string) => 
    useCurrencyStore.getState().convertCurrency(amount, currentCurrency, customCurrencySelection)