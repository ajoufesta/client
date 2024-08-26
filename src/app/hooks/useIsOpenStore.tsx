import { create } from 'zustand';

type IsOpenStore = {
  isNavOpen: boolean;
  isSectionBarOpen: boolean;
  isDayOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
  setIsSectionBarOpen: (isSectionBarOpen: boolean) => void;
  setIsDayOpen: (isDayOpen: boolean) => void;
};

const useIsOpenStore = create<IsOpenStore>((set) => ({
  isNavOpen: false,
  isSectionBarOpen: false,
  isDayOpen: false,
  setIsNavOpen: (isNavOpen: boolean) => set({ isNavOpen }),
  setIsSectionBarOpen: (isSectionBarOpen: boolean) => set({ isSectionBarOpen }),
  setIsDayOpen: (isDayOpen: boolean) => set({ isDayOpen }),
}));

export default useIsOpenStore;
