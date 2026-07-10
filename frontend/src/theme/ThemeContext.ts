// ? Link da documentação do React: https://react.dev/learn/passing-data-deeply-with-context#context-an-alternative-to-passing-props

import { createContext } from "react";
export type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
};

export const ThemeProviderContext =
	createContext<ThemeProviderState>(initialState);
