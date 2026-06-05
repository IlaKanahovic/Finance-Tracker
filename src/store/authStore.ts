import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { loginRequest, registerRequest } from "../DAL/authRequests";

type User = {
    id: number
    email: string
    userName: string
    password: string
}

interface IInitialState {
    user: null | User
    token: null | string
}

interface IActions {
    register: (email: string, userName: string, password: string) => void
    login: (email: string, password: string) => void
    logout: () => void
}

interface IAuthState extends IInitialState, IActions { }

const initialState: IInitialState = {
    user: null,
    token: null
}

const authStore: StateCreator<IAuthState> = ((set) => ({
    ...initialState,
    register: async (email, userName, password) => {
        const reg = await registerRequest(email, userName, password) 

        if (reg.accessToken) {
            set({
                user: reg.user,
                token: reg.accessToken
            })
        } 
    },
    login: async (email, password) => {
        const log = await loginRequest(email, password)

        if (log.accessToken) {
            set({
                user: log.user,
                token: log.accessToken
            })
        }
    },
    logout: () => set({user: null, token: null}),
}))

export const useAuthStore = create<IAuthState>()(
    persist(authStore, {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({user: state.user, token: state.token})
    })
)

export const register = (email: string, userName: string, password: string) => 
    useAuthStore.getState().register(email, userName, password)

export const login = (email: string, password: string) => 
    useAuthStore.getState().login(email, password)

export const logout = () => useAuthStore.getState().logout()