import { GenericService } from "@/services/GenericService";
import type {
	Product,
	InsertProduct,
	UpdateProduct,
} from "@/types/products.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const productsService = new GenericService("/products");

// * BUSCAR TODOS
export function useProductsQuery() {
	return useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			const data = await productsService.getAll<Product>();
			return data;
		},
	});
}

// * BUSCAR POR ID
export function useProductByIdQuery(id: string) {
	return useQuery({
		queryKey: ["products", id],
		queryFn: async () =>
			await productsService.getById<Product>(`/products/${id}`),
		enabled: !!id, // Só executa se o ID existir
	});
}

// * CRIAR
export function useCreateProductMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (payload: InsertProduct) => {
			return await productsService.create<InsertProduct, Product>(payload);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});
}

// * ATUALIZAR
export function useUpdateProductMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, payload }: { id: string; payload: UpdateProduct }) => {
			return await productsService.patch<UpdateProduct, Product>(id, payload);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});
}

// * DELETAR
export function useDeleteProductMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: string) => {
			return await productsService.delete<Product>(id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});
}
