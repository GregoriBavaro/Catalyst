import { create } from "zustand";

interface HamburgerMenu {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const useHamburgerMenu = create<HamburgerMenu>((set) => ({
  isOpen: false,
  setOpen: (isOpen: boolean) => set({ isOpen }),
}));

interface SplashScreen {
  isActive: boolean;
  setActive: (isOpen: boolean) => void;
}

export const useSplashScreen = create<SplashScreen>((set) => ({
  isActive: true,
  setActive: (isActive: boolean) => set({ isActive }),
}));

interface ParallaxScroll {
  isParallaxScroll: boolean;
  setParallaxScroll: (isStepsInView: boolean) => void;
}

export const useParallaxScroll = create<ParallaxScroll>((set) => ({
  isParallaxScroll: false,
  setParallaxScroll: (isParallaxScroll: boolean) => set({ isParallaxScroll }),
}));
