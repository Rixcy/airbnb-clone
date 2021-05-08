import create from "zustand"

export type ConfigStoreProps = {
    showConfigBanner: boolean
    setShowConfigBanner: (show: boolean) => void
    acceptedCookies: boolean
    acceptCookies: () => void
}

export const useConfigStore = create<ConfigStoreProps>((set) => ({
    showConfigBanner: true,
    setShowConfigBanner: (show: boolean) => set({ showConfigBanner: show }),
    acceptedCookies: false,
    acceptCookies: () => set({ acceptedCookies: true }),
}))
