import { Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./pages/Products";
import MainLayout from "./layouts/MainLayouts";
import { Toaster } from "./components/ui/toast";
import Product from "./pages/Product";
import { useEffect } from "react";
import { useThemeStore } from "./context/themeStore";
import { useAuthStore } from "./context/authStore";
import { supabase } from "./api/config/supabase";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// Tempo que o dado é considerado "fresco", ou seja, nenhuma nova
			// requisição HTTP será feita se o usuário voltar para essa tela.
			staleTime: 1000 * 60 * 5, // ? 5 minutos
		},
	},
});

function App() {
	const theme = useThemeStore((state) => state.theme);

	// * Checar tema do usuário na primeira inicialização OU quando há mudanças
	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]); // Toda vez que o Zustand mudar o 'theme', o useEffect roda de novow

	// * Checar se usuário está logado
	const setUser = useAuthStore((state) => state.setUser);
	const setInitialized = useAuthStore((state) => state.setInitialized);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setUser(session?.user ?? null);
			setInitialized(true);
			console.log("LOG DO USEEFFECT DO APP.TSX: ", session);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null);
		});

		return () => subscription.unsubscribe();
	}, []);

	// Se ainda não leu o HD na primeira vez, segura a tela branca ou mostra um logo
	const isInitialized = useAuthStore((state) => state.isInitialized);
	if (!isInitialized) return null;

	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				// ? Renderização condicional de elementos: na rota "auth" alguns // ? elementos não são
				renderizados, que no caso são a NavBar e o Footer
				<Route element={<MainLayout />}>
					<Route path="/" element={<Products />} />
					<Route path="/home" element={<Home />} />
					<Route path="/product" element={<Product />} />
				</Route>
				<Route path="/auth" element={<Auth />} />
			</Routes>
			<Toaster />
		</QueryClientProvider>
	);
}

export default App;
