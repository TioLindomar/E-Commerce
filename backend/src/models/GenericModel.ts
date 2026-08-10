import { supabase } from "../config/supabase.js";
import type { Database } from "@ecommerce/shared/supabase";

// Tipos das tabelas do banco
export type TableName = keyof Database["public"]["Tables"];
export type TableRow<T extends TableName> =
	Database["public"]["Tables"][T]["Row"];
export type TableInsert<T extends TableName> =
	Database["public"]["Tables"][T]["Insert"];
export type TableUpdate<T extends TableName> =
	Database["public"]["Tables"][T]["Update"];

export class GenericModel<T extends TableName> {
	private tableName: T;

	constructor(tableName: T) {
		this.tableName = tableName;
	}

	// * BUSCAR TODOS
	public async getAll(): Promise<TableRow<T>[]> {
		const { data, error } = await supabase.from(this.tableName).select("*");

		if (error) throw error;
		return data as unknown as TableRow<T>[];
	}

	// * BUSCAR POR ID
	public async getById(id: string): Promise<TableRow<T>> {
		const { data, error } = await supabase
			.from(this.tableName)
			.select("*")
			.eq("id" as any, id)
			.single();

		if (error) throw error;
		return data as unknown as TableRow<T>;
	}
	// * CRIAR
	public async create(payload: TableInsert<T>): Promise<TableRow<T>> {
		const { data, error } = await supabase
			.from(this.tableName)
			.insert(payload as any)
			.select()
			.single();

		if (error) throw error;
		return data as unknown as TableRow<T>;
	}

	// * ATUALIZAR
	public async update(
		id: string,
		payload: TableUpdate<T>,
	): Promise<TableRow<T>> {
		const { data, error } = await supabase
			.from(this.tableName)
			.update(payload as any)
			.eq("id" as any, id)
			.select()
			.single();

		if (error) throw error;
		return data as unknown as TableRow<T>;
	}

	// * DELETAR
	public async delete(id: string): Promise<TableRow<T>> {
		const { data, error } = await supabase
			.from(this.tableName)
			.delete()
			.eq("id" as any, id)
			.select()
			.single();

		if (error) throw error;
		return data as unknown as TableRow<T>;
	}
}
