// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs
import type {
	TablesInsert,
	TablesUpdate,
	Tables,
} from "@ecommerce/shared/supabase";

// * ---------- Tipos ----------
export type UserAdress = Tables<"user_adresses">;

// * ---------- DTOs ----------
export type InsertUserAdress = TablesInsert<"user_adresses">;

export type UpdateUserAdress = TablesUpdate<"user_adresses">;
