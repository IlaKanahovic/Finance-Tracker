import { create, type StateCreator } from "zustand"

interface IInitialStae {
    dataFilter: '' | 'today' | '7d' | '30d' | 'custom'
    datefrom: string | null
    dateTo: string | null
    categoryFilter: string | null
    searchFilter: string
}


interface IActions {
    filterByData: (selectedData: '' | 'today' | '7d' | '30d' | 'custom', dateFrom: string | null, dateTo: string | null) => void
    filterByCategory: (category: string | null) => void
    filterBySearch: (searchText: string) => void
}

interface IFilterStore extends IInitialStae, IActions { }

const initialState: IInitialStae = {
    dataFilter: '',
    datefrom: '',
    dateTo: '',
    categoryFilter: null,
    searchFilter: ''
}

const filterStore: StateCreator<IFilterStore> = ((set) => ({
    ...initialState,
    filterByData: (selectedData, dateFrom, dateTo) => {
        set({ dataFilter: selectedData })
        set({ datefrom: dateFrom })
        set({ dateTo: dateTo })
    },
    filterByCategory: (category) => {
        set({ categoryFilter: category })
    },
    filterBySearch: (searchText) => {
        set({ searchFilter: searchText })
    }
}))

export const useFilterStore = create<IFilterStore>()(
    filterStore
)

export const dataFilter = () => useFilterStore((state) => state.dataFilter)
export const datefrom = () => useFilterStore((state) => state.datefrom)
export const dateTo = () => useFilterStore((state) => state.dateTo)
export const categoryFilter = () => useFilterStore((state) => state.categoryFilter)
export const searchFilter = () => useFilterStore((state) => state.searchFilter)

export const filterByData = (selectedData: '' | 'today' | '7d' | '30d' | 'custom', dateFrom: string | null, dateTo: string | null) =>
    useFilterStore.getState().filterByData(selectedData, dateFrom, dateTo)

export const filterByCategory = (category: string | null) =>
    useFilterStore.getState().filterByCategory(category)

export const filterBySearch = (searchText: string) =>
    useFilterStore.getState().filterBySearch(searchText)
