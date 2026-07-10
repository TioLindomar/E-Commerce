import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import type {
	CreateInstrumentDTO,
	UpdateInstrumentDTO,
} from "@/types/instruments.types";
import { useInstruments } from "@/hooks/api/useInstruments";
import { toast } from "sonner";

interface Product {
	id: number;
	name: string;
	price: number;
}

export default function Home() {
	const [roupas, setRoupas] = useState<Product[]>([]);
	const [produto, setProduto] = useState<Product | null>(null);
	const [addedInstrumentName, setAddedInstrumentName] = useState("");
	const [updatedInstrumentName, setUpdatedInstrumentName] = useState("");
	const [instrumentId, setInstrumentId] = useState("");

	const {
		instrument,
		instruments,
		isLoading,
		isSingleLoading,
		createInstrument,
		deleteInstrument,
		updateInstrument,
		getSingleInstrument,
	} = useInstruments();

	// * ADICIONAR INSTRUMENTO
	async function handleAddInstrument() {
		const dto: CreateInstrumentDTO = {
			name: addedInstrumentName,
		};
		await createInstrument(dto);
		setAddedInstrumentName("");
	}

	// * ATUALIZAR INSTRUMENTO
	async function handleUpdateInstrument(id: number) {
		if (updatedInstrumentName === "") {
			return toast.error("Insira um novo nome para o instrumento");
		}
		const dto: UpdateInstrumentDTO = {
			name: updatedInstrumentName,
		};
		try {
			await updateInstrument(id, dto);
			setUpdatedInstrumentName("");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				switch (error.response?.status) {
					case 404:
						toast.error("Instrumento não encontrado.");
						break;

					case 400:
						toast.error(error.response.data.message);
						break;

					case 500:
						toast.error("Erro interno do servidor.");
						break;

					default:
						toast.error("Ocorreu um erro inesperado.");
				}
			}
			console.log(error);
			toast.error("Erro ao atualizar.");
		}
	}

	// * BUSCAR INSTRUMENTO ESPECÍFICO
	async function handleGetInstrument(stringId: string) {
		const id = Number(stringId);
		try {
			await getSingleInstrument(id);
			toast.success("Instrumento encontrado!");
			// TODO | ANALISAR ESTE CÓDIGO ABAIXO
		} catch (error) {
			if (axios.isAxiosError(error)) {
				switch (error.response?.status) {
					case 404:
						toast.error("Instrumento não encontrado.");
						break;

					case 400:
						toast.error(error.response.data.message);
						break;

					case 500:
						toast.error("Erro interno do servidor.");
						break;

					default:
						toast.error("Ocorreu um erro inesperado.");
				}
			}
		}
	}

	// ! LISTAR PRODUTOS DIRETAMENTE DO BACKEND
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get<Product[]>(
				"http://localhost:3000/products",
			);
			// console.log("Produtos diretos do backend:", response.data);
			setRoupas(response.data);
		};
		fetchProducts();
	}, []);

	// ! LISTAR PRODUTO ESPECÍFICO DIRETAMENTE DO BACKEND
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get("http://localhost:3000/products/2");
				// console.log("Produto específico direto do backend:", response);
				setProduto(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProduct();
	}, []);

	return (
		<main className="flex flex-col items-center justify-center h-screen gap-6">
			<div>
				<h1 className="text-center font-black text-2xl">Roupa Específica</h1>

				<ul className="flex gap-2 items-start justify-center flex-wrap">
					{
						<li>
							{produto?.name} - R$ {produto?.price}
						</li>
					}
				</ul>
			</div>
			<div>
				<h1 className="text-center font-black text-2xl">Lista de Roupas</h1>

				<ul className="flex gap-2 items-start justify-center flex-wrap">
					{roupas.map((roupa, index) => {
						return <li key={index}>{roupa.name}</li>;
					})}
				</ul>
			</div>
			<div className="flex flex-col w-full">
				<h1 className="text-center font-black text-2xl">
					Lista de Instrumentos
				</h1>
				<ol className="flex gap-2 items-center justify-center">
					{isLoading ? (
						<Spinner className="size-5 my-2" />
					) : (
						<div className="flex flex-1 flex-col">
							{instruments.map((instrument, index) =>
								isSingleLoading ? (
									<Spinner key={index} className="size-5 my-2" />
								) : (
									<div key={index} className="flex gap-3">
										<li className="flex flex-1">{instrument.name} </li>

										<Dialog>
											<DialogTrigger asChild>
												<Button>
													<Pencil />
												</Button>
											</DialogTrigger>
											<DialogContent className="sm:max-w-sm">
												<form
													onSubmit={(e) => {
														console.log("DISPAROU");
														e.preventDefault();
														handleUpdateInstrument(instrument.id);
													}}
												>
													<DialogHeader className="mb-4">
														<DialogTitle>Editar Instrumento</DialogTitle>
													</DialogHeader>
													<FieldGroup>
														<Field>
															<Label htmlFor="name-1">Nome</Label>
															<Input
																id="name-1"
																placeholder="Nome atualizado"
																value={updatedInstrumentName}
																className="flex flex-3"
																required
																onChange={(e) => {
																	setUpdatedInstrumentName(e.target.value);
																	console.log(e);
																}}
															></Input>
														</Field>
													</FieldGroup>
													<DialogFooter>
														<DialogClose asChild>
															<Button variant="outline">Cancel</Button>
														</DialogClose>
														<Button
															type="submit"
															onClick={() => console.log("BOTÃO DISPAROU")}
														>
															Save changes
														</Button>
													</DialogFooter>
												</form>
											</DialogContent>
										</Dialog>

										<Button
											variant={"destructive"}
											onClick={() => deleteInstrument(instrument.id)}
										>
											<Trash2 />
										</Button>
									</div>
								),
							)}
						</div>
					)}
				</ol>
			</div>
			<Input
				placeholder="Nome do instrumento"
				value={addedInstrumentName}
				onChange={(e) => setAddedInstrumentName(e.target.value)}
			></Input>
			<Button onClick={() => handleAddInstrument()}>
				Adicionar instrumento
			</Button>
			<h1>
				Buscar Instrumento por ID:{" "}
				{instrument?.name || "Instrumento não encontrado!"}
			</h1>
			<Field orientation={"horizontal"}>
				<Input
					placeholder="ID do instrumento"
					value={instrumentId}
					onChange={(e) => setInstrumentId(e.target.value)}
				/>
				<Button onClick={() => handleGetInstrument(instrumentId)}>
					Buscar
				</Button>
			</Field>
			<Button onClick={() => toast.error("Este é um exemplo de toast de erro")}>
				Toaster
			</Button>
		</main>
	);
}
