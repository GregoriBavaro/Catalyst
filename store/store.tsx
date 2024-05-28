import { create } from "zustand";

interface HamburgerMenu {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const useHamburgerMenu = create<HamburgerMenu>((set) => ({
  isOpen: false,
  setOpen: (isOpen: boolean) => set({ isOpen }),
}));
