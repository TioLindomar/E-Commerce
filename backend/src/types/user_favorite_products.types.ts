// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs
import type {
	TablesInsert,
	TablesUpdate,
	Tables,
} from "@ecommerce/shared/supabase";

// * ---------- Tipos ----------
export type UserFavoriteProduct = Tables<"user_favorite_products">;

// * ---------- DTOs ----------
export type InsertUserFavoriteProduct = TablesInsert<"user_favorite_products">;

export type UpdateUserFavoriteProduct = TablesUpdate<"user_favorite_products">;
