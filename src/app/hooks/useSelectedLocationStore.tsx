import { create } from "zustand";
import { Place, PlaceLocation } from "../lib/types";

type SelectedLocationStore = {
  place: Place | null;
  location: PlaceLocation | null;
  setPlace: (place: Place) => void;
  setLocation: (location: PlaceLocation) => void;
};

const useSelectedLocationStore = create<SelectedLocationStore>((set) => ({
  place: null,
  location: null,
  setPlace: (place: Place) => set({ place }),
  setLocation: (location: PlaceLocation) => set({ location }),
}));

export default useSelectedLocationStore;
