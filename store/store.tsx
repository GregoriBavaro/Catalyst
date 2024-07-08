import { create } from "zustand";

interface HamburgerMenu {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

interface SplashScreen {
  isActive: boolean;
  setActive: (isOpen: boolean) => void;
}

export const useHamburgerMenu = create<HamburgerMenu>((set) => ({
  isOpen: false,
  setOpen: (isOpen: boolean) => set({ isOpen }),
}));

export const useSplashScreen = create<SplashScreen>((set) => ({
  isActive: true,
  setActive: (isActive: boolean) => set({ isActive }),
}));
