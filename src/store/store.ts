import { create } from 'zustand';

type Store = {
  isSideBarOpen: boolean;
  setSideBarOpen: () => void;
  setSideBarClose: () => void;
};

export const useStore = create<Store>((set) => ({
  isSideBarOpen: false,
  setSideBarOpen: () => set({ isSideBarOpen: true }),
  setSideBarClose: () => set({ isSideBarOpen: false }),
}));
