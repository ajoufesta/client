import { create } from "zustand";

type NavigationStore = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  setNavClose: () => void;
};

const UseNavigationStore = create<NavigationStore>((set) => ({
  navOpen: false,
  setNavOpen: (navOpen: boolean) => set({ navOpen }),
  setNavClose: () => set({ navOpen: false }),
}));

export default UseNavigationStore;
