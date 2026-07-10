import { Outlet } from "react-router";
import NavBar from "@/components/custom/NavBar";
import Footer from "@/components/custom/Footer";

export default function MainLayout() {
	return (
		<>
			<NavBar />

			<main className="lg:px-16 px-4">
				<Outlet />{" "}
				{/* // ? "Outlet" é como um placeholder para o conteúdo que será renderizado*/}
			</main>

			<Footer />
		</>
	);
}
