import { coordinates, size } from "src/@types/data";
import { create } from "zustand";

type Store = {
  startpoint: coordinates;
  filterArea: size;
};

export const useStore = create<Store>((set, get) => {
  return {
    startpoint: { x: 0, y: 0 },
    filterArea: { height: 0, width: 0 },
  };
});
