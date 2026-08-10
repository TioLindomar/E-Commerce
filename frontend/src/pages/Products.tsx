import ProductCard from "@/components/custom/ProductCard";
import { Spinner } from "@/components/ui/spinner";
import {
	useDeleteProductMutation,
	useProductsQuery,
	useUpdateProductMutation,
} from "@/hooks/api/useProducts";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DialogForm from "@/components/custom/DialogForm";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import type { Product } from "@ecommerce/shared";
import { toast } from "@/components/ui/toast";

export default function Products() {
	const { data: products, isLoading } = useProductsQuery();

	const [productBeingEdited, setProductBeingEdited] = useState<Product | null>(null);
	const [productBeingDeleted, setProductBeingDeleted] = useState<Product | null>(null);
	const [deleteError, setDeleteError] = useState(false);
	const { mutate: mutateUpdate } = useUpdateProductMutation();
	const { mutate: mutateDelete, isPending: isDeleting } = useDeleteProductMutation();
	function handleUpdateProduct(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!productBeingEdited) return;

		// Recupera os dados que o usuário digitou nos inputs do modal
		const formData = new FormData(e.currentTarget);

		mutateUpdate(
			{
				id: productBeingEdited.id,
				payload: {
					name: formData.get("name") as string,
					price: Number(formData.get("price")),
					// category: formData.get("category") as string,
					// attributes: productBeingEdited.attributes,
				},
			},
			{
				onSuccess: () => {
					toast.add({
						type: "success",
						title: "Produto atualizado com sucesso!",
					});

					setProductBeingEdited(null);
				},
				onError: (error) => {
					toast.add({
						type: "error",
						title: `Erro ao atualizar: ${error.message}`,
					});
				},
			},
		);
	}

	function handleDeleteProduct(id: string) {
		mutateDelete(id, {
			onSuccess: () => {
				setDeleteError(false);
				setProductBeingDeleted(null);
				toast.add({
					type: "success",
					title: "Produto deletado com sucesso!",
				});
			},
			onError: (error) => {
				setDeleteError(true);
				console.log(error);
			},
		});
	}

	return (
		<main className="flex flex-col items-center justify-center gap-6">
			{/* Modal para atualizar produto */}
			<Dialog
				open={productBeingEdited !== null}
				onOpenChange={(isOpen) => !isOpen && setProductBeingEdited(null)}
			>
				<DialogContent className="sm:max-w-sm">
					<DialogHeader>
						<DialogTitle>Editar Produto</DialogTitle>
					</DialogHeader>

					<DialogForm onSubmit={handleUpdateProduct}>
						<FieldGroup>
							<Field>
								<Label htmlFor="name-input">Nome</Label>
								<Input id="name-input" name="name" defaultValue={productBeingEdited?.name} />
							</Field>
							<Field>
								<Label htmlFor="price-input">Preço</Label>
								<Input id="price-input" name="price" defaultValue={productBeingEdited?.price} />
							</Field>
						</FieldGroup>
						<DialogFooter>
							<DialogClose render={<Button variant="outline">Cancelar</Button>} />

							<Button type="submit">Salvar mudanças</Button>
						</DialogFooter>
					</DialogForm>
				</DialogContent>
			</Dialog>
			{/* // Modal para deletar produto */}
			<Dialog
				open={productBeingDeleted !== null}
				onOpenChange={(isOpen) => {
					if (!isOpen) {
						setProductBeingDeleted(null);
						setDeleteError(false);
					}
				}}
			>
				<DialogContent className="sm:max-w-sm">
					<DialogHeader>
						{deleteError && <p className="text-destructive">Erro ao deletar</p>}
						<DialogTitle>Deseja mesmo deletar este produto?</DialogTitle>
					</DialogHeader>

					<DialogFooter>
						<DialogClose render={<Button variant="secondary">Cancelar</Button>} />
						{/* productBeingDeleted?.id as string */}
						<Button onClick={() => handleDeleteProduct("uiui")} variant={"destructive"}>
							{isDeleting ? "Deletando..." : "Deletar"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 auto-rows-fr lg:gap-4 gap-2 my-8">
				{isLoading ? (
					<Spinner className="size-8" />
				) : (
					products?.map((p) => {
						return (
							<ProductCard
								key={p.id}
								product={p}
								onEditClick={() => setProductBeingEdited(p)}
								onDeleteClick={() => setProductBeingDeleted(p)}
								isDeleting={isDeleting}
								canDelete
								canEdit
							/>
						);
					})
				)}
			</div>
		</main>
	);
}
