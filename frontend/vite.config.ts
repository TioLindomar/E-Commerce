import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	// * Necessário para fazer o deploy no Github Pages
	base: "/E-Commerce/",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
