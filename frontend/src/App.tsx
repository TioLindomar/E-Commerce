import { Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MainLayout from "./layouts/MainLayouts";
import { ThemeProvider } from "./theme/theme-provider";
import { Toaster } from "./components/ui/sonner";

function App() {
	return (
		// ? Renderização condicional de elementos: na rota "auth" alguns elementos não são renderizados, que no caso são a NavBar e o Footer
		<ThemeProvider>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Products />} />
					<Route path="/home" element={<Home />} />
				</Route>

				<Route path="/auth" element={<Auth />} />
			</Routes>
			<Toaster position="top-center" richColors/>

		</ThemeProvider>
	);
}

export default App;
