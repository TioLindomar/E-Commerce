// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs
import type {
	TablesInsert,
	TablesUpdate,
	Tables,
} from "@ecommerce/shared/supabase";

// * ---------- Tipos ----------
export type OrderItems = Tables<"order_items">;

// * ---------- DTOs ----------
export type InsertOrderItem = TablesInsert<"order_items">;

export type UpdateOrderItem = TablesUpdate<"order_items">;
