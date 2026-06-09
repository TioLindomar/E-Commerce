import { LogOut, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Field } from "../ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "../ui/input-group";
import { Button } from "../ui/button";
import ThemeBtn from "./ThemeBtn";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useWindowWidth } from "@/hooks/useWindowSize";
import { Separator } from "../ui/separator";
import { Link } from "react-router";

export default function NavBar() {
	const width = useWindowWidth();

	return (
		<nav className="flex items-center justify-between gap-3 py-4 text-center">
			<p className="font-black">Logo</p>

			<Field className="ml-2 max-w-125 sm:ml-0">
				<InputGroup className="border-2">
					<InputGroupInput placeholder="Pesquisar" />
					<InputGroupAddon align={"inline-end"}>
						<Search className="text-foreground" />
					</InputGroupAddon>
				</InputGroup>
			</Field>

			{width > 600 ? (
				<>
					<div className="flex gap-3 ">
						<a
							href="#"
							className="hover:text-foreground hover:underline underline-offset-2"
						>
							Produtos
						</a>
						<a
							href="#"
							className="hover:text-foreground hover:underline underline-offset-2"
						>
							Categorias
						</a>
						<a
							href="#"
							className="hover:text-foreground hover:underline underline-offset-2"
						>
							Sobre
						</a>
					</div>
					<div className="flex">
						<Button variant={"ghost"}>
							<User />
						</Button>
						<Button variant={"ghost"}>
							<ShoppingCart />
						</Button>
						<ThemeBtn />
					</div>
				</>
			) : (
				<Drawer direction="right">
					<DrawerTrigger className="ml-2">
						<Menu />
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader className="flex flex-row items-center justify-between ">
							<DrawerTitle className="font-black">Logo</DrawerTitle>

							<div>
								<ThemeBtn />
							</div>
						</DrawerHeader>
						<ul className="flex flex-col p-4 gap-1.5">
							<Link
								to={"/auth"}
								className="p-1 text-base rounded-sm hover:text-foreground hover:bg-accent"
							>
								Produtos
							</Link>

							<Link
								to={"/auth"}
								className="p-1 text-base rounded-sm hover:text-foreground hover:bg-accent"
							>
								Categorias
							</Link>

							<Link
								to={"/auth"}
								className="p-1 text-base rounded-sm hover:text-foreground hover:bg-accent"
							>
								Sobre
							</Link>

							<Separator className="my-2" />

							<Link
								to={"/auth"}
								className="text-base hover:text-foreground hover:bg-accent p-1 rounded-sm flex gap-1.5 items-center"
							>
								<User className="size-4 " />
								Conta
							</Link>

							<Link
								to={"/auth"}
								className="text-base hover:text-foreground hover:bg-accent p-1 rounded-sm flex gap-1.5 items-center"
							>
								<ShoppingCart className="size-4 " />
								Carrinho
							</Link>

							<Separator className="my-2" />

							<Link
								to={"/auth"}
								className="text-base hover:bg-accent p-1 rounded-sm flex gap-1.5 items-center text-red-600 hover:text-red-400"
							>
								<LogOut className="size-4" />
								Sair
							</Link>
						</ul>
					</DrawerContent>
				</Drawer>
			)}

			{/* <ThemeBtn/> */}
		</nav>
	);
}
