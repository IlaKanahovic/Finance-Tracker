import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IInitialState {
    targetCurrency: string
}

interface IActions {
    setTargetCurrency: (currentCustom: string) => void
}

interface ISettingsState extends IInitialState, IActions { }

const initialState: IInitialState = {
    targetCurrency: 'USD'
}

const settingsStore: StateCreator<ISettingsState> = ((set) => ({
    ...initialState,
    setTargetCurrency: (currencyCustom) => {
        set({ targetCurrency: currencyCustom })
    }
}))

export const useSettingsStore = create<ISettingsState>()(
    persist(settingsStore, {
        name: 'settings-store',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ targetCurrency: state.targetCurrency })
    })
)

export const targetCurrency = () => useSettingsStore((state) => state.targetCurrency)

export const setTargetCurrency = (currency: string) =>
    useSettingsStore.getState().setTargetCurrency(currency)