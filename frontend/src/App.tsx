import { Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NavBar from "./components/custom/NavBar";

function App() {
	return (
		<main className="lg:px-16 px-4">
			<NavBar />
			<Routes>
				<Route path="/auth" element={<Auth />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</main>
	);
}

export default App;

