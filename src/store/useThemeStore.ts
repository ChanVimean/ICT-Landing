"use client";

import { create } from "zustand";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light", // default

  setTheme: (theme) => {
    // Update Zustand state
    set({ theme });

    // Update <html> class
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }

    // Persist in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  },

  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "light" ? "dark" : "light";

      // Update DOM + localStorage
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(next);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", next);
      }

      return { theme: next };
    }),
}));
