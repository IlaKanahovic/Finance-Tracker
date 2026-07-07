import { create } from 'zustand'

interface StatusStore {
    status: string
    setStatus: (status: string) => void
}

export const useStatusStore = create<StatusStore>((set) => ({
    status: '',
    setStatus: (status) => set({ status })
}))