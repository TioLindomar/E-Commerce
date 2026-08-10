// src/store/useThemeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark" | "system";

interface ThemeStore {
	theme: Theme;
	setTheme: (newTheme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
	persist(
		(set) => ({
			theme: "system",
			setTheme: (newTheme) => set({ theme: newTheme }),
		}),
		{
			// O nome da chave que ficará salva no Local Storage do navegador
			name: "ecommerce-theme-storage",
		},
	),
);
