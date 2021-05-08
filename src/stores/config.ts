import create from "zustand"

export type ConfigStoreProps = {
    showConfigBanner: boolean
    setShowConfigBanner: (show: boolean) => void
}

export const useConfigStore = create<ConfigStoreProps>((set) => ({
    showConfigBanner: true,
    setShowConfigBanner: (show: boolean) => set({ showConfigBanner: show }),
}))
