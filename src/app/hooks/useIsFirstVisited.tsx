import { create } from "zustand";

type IsFirstVisitedStore = {
  isFirstVisited: boolean;
  setVisited: () => void;
};

const useIsFirstVisitedStore = create<IsFirstVisitedStore>()((set) => ({
  isFirstVisited: true,
  setVisited: () => set({ isFirstVisited: false }),
}));

export default useIsFirstVisitedStore;
