import { create } from "zustand";
import { persist } from "zustand/middleware";

type IsFirstVisitedStore = {
  isFirstVisited: boolean;
  setVisited: () => void;
};

const useIsFirstVisitedStore = create(
  persist<IsFirstVisitedStore>(
    (set, get) => ({
      isFirstVisited: true,
      setVisited: () => set({ isFirstVisited: false }),
    }),
    { name: "isVisited" }
  )
);

export default useIsFirstVisitedStore;
