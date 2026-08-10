import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "@/components/ui/toast";
import { useCreateProductMutation } from "@/hooks/api/useProducts";
import type { Json } from "@ecommerce/shared/supabase";
import type { InsertProduct } from "@ecommerce/shared/";
import { useState } from "react";

export default function Product() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [category, setCategory] = useState("tecnologia");
	const [attributes, setAttibutes] = useState<Json>({});

	const { mutate, isPending } = useCreateProductMutation();

	function handleSubmit(e: React.SubmitEvent) {
		e.preventDefault();

		const payload: InsertProduct = {
			name,
			price,
			attributes,
			category,
		};

		mutate(payload, {
			// Callbacks opcionais no momento do clique:
			onSuccess: () => {
				toast.add({
					type: "success",
					title: "Produto cadastrado com sucesso!",
				});
				setName("");
				setPrice(0);
				setCategory("");
				setAttibutes({});
			},
			onError: (error) => {
				toast.add({
					type: "error",
					title: `Erro ao cadastrar: ${error.message}`,
				});
			},
		});
	}

	return (
		<main>
			<h1>Tela de Produto Específico</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md border p-4 rounded">
				<Input
					type="text"
					placeholder="Nome do produto"
					value={name}
					onChange={(e) => setName(e.target.value)}
					disabled={isPending}
					required
					className="border p-2 rounded"
				/>

				<Input
					type="number"
					step="0.01"
					placeholder="Preço (R$)"
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
					disabled={isPending}
					required
					className="border p-2 rounded"
				/>

				<Button
					type="submit"
					disabled={isPending}
					className="bg-blue-600 text-white p-2 rounded flex items-center justify-center gap-2 disabled:bg-gray-400"
				>
					{isPending ? (
						<>
							<Spinner className="size-4 text-white" />
						</>
					) : (
						"Cadastrar Produto"
					)}
				</Button>
			</form>
		</main>
	);
}
