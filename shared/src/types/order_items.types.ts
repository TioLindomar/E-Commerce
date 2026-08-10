// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs
import type {
	Tables,
	TablesInsert,
	TablesUpdate,
} from "@ecommerce/shared/supabase";

// * ---------- Tipos ----------
export type OrderItems = Tables<"order_items">;

// * ---------- DTOs ----------
export type InsertOrderItems = TablesInsert<"order_items">;

export type UpdateOrderItems = TablesUpdate<"order_items">;
