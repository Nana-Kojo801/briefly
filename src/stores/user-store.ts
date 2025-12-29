import { type DataModel } from "@convex/_generated/dataModel"
import { create } from "zustand"

interface IUserStore {
    user: DataModel['users']['document'] | null

    actions: {
        setUser: (user: DataModel['users']['document'] | null) => void
    }
}

const useUserStore = create<IUserStore>()((set) => ({
    user: null,

    actions: {
        setUser: (user) => set({ user })
    }
}))

export const useUserStoreActions = () => useUserStore(state => state.actions)

export const useUser = () => useUserStore(state => {
    if (!state.user) throw Error("Unauthorized")
    return state.user
})