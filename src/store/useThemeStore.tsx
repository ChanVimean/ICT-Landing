import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  mounted: false,

  setTheme: (theme: Theme) => {
    if (typeof window !== "undefined") {
      const body = document.body;

      // Remove old class if present
      body.classList.remove(theme === "light" ? "dark" : "light");

      // Add new class
      body.classList.add(theme);

      // Persist to localStorage
      localStorage.setItem("theme", theme);
    }

    set({ theme });
  },

  toggleTheme: () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    get().setTheme(newTheme);
  },

  initTheme: () => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      get().setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      get().setTheme(prefersDark ? "dark" : "light");
    }

    set({ mounted: true });
  },
}));
