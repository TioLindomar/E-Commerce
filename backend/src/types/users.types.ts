// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs
import type {
	TablesInsert,
	TablesUpdate,
	Tables,
} from "@ecommerce/shared/supabase";

// * ---------- Tipos ----------
export type User = Tables<"users">;

// * ---------- DTOs ----------
export type InsertUser = TablesInsert<"users">;

export type UpdateUser = TablesUpdate<"users">;
