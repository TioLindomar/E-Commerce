import { Club, Diamond, Heart, Spade } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-between p-6 border-t-2 not-first:gap-8 sm:flex-row sm:grid-cols-5 sm:px-8 md:gap-8 lg:px-16">
			<div className="gap-4 sm:mr-4 flex-7 bg">
				<h1 className="mb-2 text-lg font-black">Logo</h1>
				<h5 className="">Vendemos de tudo</h5>
				<ul className="flex justify-start gap-2 mt-4 group-hover:text-accent">
					<Link to={"/"} className="inline font-medium w-fit hover:bg-accent">
						<Club />
					</Link>
					<Link to={"/"} className="inline font-medium w-fit hover:bg-accent">
						<Diamond />
					</Link>
					<Link to={"/"} className="inline font-medium w-fit hover:bg-accent">
						<Heart />
					</Link>
					<Link to={"/"} className="inline font-medium w-fit hover:bg-accent">
						<Spade />
					</Link>
				</ul>
			</div>
			<div className=" flex-2">
				<h4 className="mb-2 font-bold">Recursos</h4>
				<ul className="flex flex-col gap-2">
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit text-foreground hover:underline underline-offset-2"
					>
						Recursos principais
					</Link>
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit text-foreground hover:underline underline-offset-2"
					>
						Experiência Pro
					</Link>
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit text-foreground hover:underline underline-offset-2"
					>
						Integrações
					</Link>
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit text-foreground hover:underline underline-offset-2"
					>
						Melhores práticas
					</Link>
				</ul>
			</div>
			<div className="flex-2">
				<h4 className="mb-2 font-bold">Saiba Mais</h4>
				<ul className="flex flex-col gap-2">
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit hover:underline underline-offset-2"
					>
						Blog
					</Link>
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit hover:underline underline-offset-2"
					>
						Estudos <br />
						de caso
					</Link>
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit hover:underline underline-offset-2"
					>
						Histórias <br />
						de clientes
					</Link>
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit hover:underline underline-offset-2"
					>
						Melhores práticas
					</Link>
				</ul>
			</div>
			<div className="flex-2">
				<h4 className="mb-2 font-bold">Suporte</h4>
				<ul className="flex flex-col gap-2">
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit hover:underline underline-offset-2"
					>
						Contato
					</Link>
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit hover:underline underline-offset-2"
					>
						Suporte
					</Link>
					<Link
						to={"/"}
						className="inline text-sm font-medium w-fit hover:underline underline-offset-2"
					>
						Legal
					</Link>
				</ul>
			</div>
		</footer>
	);
}
