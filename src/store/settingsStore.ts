import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IInitialState {
    targetCurrency: string
    targetTheme: 'Dark' | 'Light'
    formatDate: 'DD.MM.YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD'
    languageFormat: 'en' | 'ru'
    weekStart: 'Monday' | 'Sunday',
    transactionsOnPage: '10' | '25' | '50' | 'All'
    notificationsSwitch: boolean
    notificationsPosition: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
    notificationsAnimation: 'animation_fade' | 'animation_slide' | 'animation_zoom'
}

interface IActions {
    setTargetCurrency: (currentCustom: string) => void
    setTargetTheme: (theme: 'Dark' | 'Light') => void
    setFormatDate: (format: 'DD.MM.YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD') => void
    setLanguageFormat: (language: 'en' | 'ru') => void
    setWeekStart: (day: 'Monday' | 'Sunday') => void
    setTransactionsOnPage: (onPage: '10' | '25' | '50' | 'All') => void
    setNotificationsSwitch: (switchNotific: boolean) => void
    setNotificationsPosition: (position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center') => void
    setNotificationsAnimation: (animation: 'animation_fade' | 'animation_slide' | 'animation_zoom') => void
    resetToDefaultSettings: () => void
}

interface ISettingsState extends IInitialState, IActions { }

const initialState: IInitialState = {
    targetCurrency: 'USD',
    targetTheme: 'Dark',
    formatDate: 'DD.MM.YYYY',
    languageFormat: 'en',
    weekStart: 'Monday',
    transactionsOnPage: 'All',
    notificationsSwitch: true,
    notificationsPosition: 'top-center',
    notificationsAnimation: 'animation_fade'
}

const settingsStore: StateCreator<ISettingsState> = ((set) => ({
    ...initialState,
    setTargetCurrency: (currencyCustom) => {
        set({ targetCurrency: currencyCustom })
    },
    setTargetTheme: (theme) => {
        set({ targetTheme: theme })
    },
    setFormatDate: (format) => {
        set({ formatDate: format })
    },
    setLanguageFormat: (language) => {
        set({ languageFormat: language })
    },
    setWeekStart: (day) => {
        set({ weekStart: day })
    },
    setTransactionsOnPage: (onPage) => {
        set({ transactionsOnPage: onPage })
    },
    setNotificationsSwitch: (switchNotific) => {
        set({ notificationsSwitch: switchNotific })
    },
    setNotificationsPosition: (position) => {
        set({ notificationsPosition: position })
    },
    setNotificationsAnimation: (animation) => {
        set({ notificationsAnimation: animation })
    },
    resetToDefaultSettings: () => {
        set({ targetCurrency: 'USD' })
        set({ targetTheme: 'Dark' })
        set({ formatDate: 'DD.MM.YYYY' })
        set({ languageFormat: 'en' })
        set({ weekStart: 'Monday'})
        set({ transactionsOnPage: 'All' })
        set({ notificationsSwitch: true })
        set({ notificationsPosition: 'top-center' })
        set({ notificationsAnimation: 'animation_fade'})
    }
}))

export const useSettingsStore = create<ISettingsState>()(
    persist(settingsStore, {
        name: 'settings-store',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => (
            {
                targetCurrency: state.targetCurrency,
                targetTheme: state.targetTheme,
                formatDate: state.formatDate,
                languageFormat: state.languageFormat,
                weekStart: state.weekStart,
                transactionsOnPage: state.transactionsOnPage,
                notificationsSwitch: state.notificationsSwitch,
                notificationsPosition: state.notificationsPosition,
                notificationsAnimation: state.notificationsAnimation
            }
        )
    })
)

export const targetCurrency = () => useSettingsStore((state) => state.targetCurrency)
export const setTargetCurrency = (currency: string) =>
    useSettingsStore.getState().setTargetCurrency(currency)

export const targetTheme = () => useSettingsStore((state) => state.targetTheme)
export const setTargetTheme = (theme: 'Dark' | 'Light') =>
    useSettingsStore.getState().setTargetTheme(theme)

export const formatDate = () => useSettingsStore((state) => state.formatDate)
export const setFormatDate = (format: 'DD.MM.YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD') =>
    useSettingsStore.getState().setFormatDate(format)

export const languageFormat = () => useSettingsStore((state) => state.languageFormat)
export const setLanguageFormat = (language: 'en' | 'ru') =>
    useSettingsStore.getState().setLanguageFormat(language)

export const weekStart = () => useSettingsStore((state) => state.weekStart)
export const setWeekStart = (day: 'Monday' | 'Sunday') =>
    useSettingsStore.getState().setWeekStart(day)

export const transactionsOnPage = () => useSettingsStore((state) => state.transactionsOnPage)
export const setTransactionsOnPage = (onPage: '10' | '25' | '50' | 'All') =>
    useSettingsStore.getState().setTransactionsOnPage(onPage)

export const notificationsSwitch = () => useSettingsStore((state) => state.notificationsSwitch)
export const setNotificationsSwitch = (switchNotific: boolean) =>
    useSettingsStore.getState().setNotificationsSwitch(switchNotific)

export const notificationsPosition = () => useSettingsStore((state) => state.notificationsPosition)
export const setNotificationPosition = (position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center') =>
    useSettingsStore.getState().setNotificationsPosition(position)

export const notificationsAnimation = () => useSettingsStore((state) => state.notificationsAnimation)
export const setNotificationsAnimation = (animation: 'animation_fade' | 'animation_slide' | 'animation_zoom') =>
    useSettingsStore.getState().setNotificationsAnimation(animation)

export const resetToDefaultSettings = () => useSettingsStore.getState().resetToDefaultSettings()