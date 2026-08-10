// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs
import type {
	TablesInsert,
	TablesUpdate,
	Tables,
} from "@ecommerce/shared/supabase";

// * ---------- Tipos ----------
export type Order = Tables<"orders">;

// * ---------- DTOs ----------
export type InsertOrder = TablesInsert<"orders">;

export type UpdateOrder = TablesUpdate<"orders">;
