// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs
import type {
	TablesInsert,
	TablesUpdate,
	Tables,
} from "@ecommerce/shared/supabase";

// * ---------- Tipos ----------
export type Product = Tables<"products">;

// * ---------- DTOs ----------
export type InsertProduct = TablesInsert<"products">;

export type UpdateProduct = TablesUpdate<"products">;
