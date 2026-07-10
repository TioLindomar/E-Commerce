// ? MODEL: Comunicação direta com o banco (queries) e regras de negócio. Aqui, apenas retorna dados e não trata erros

import { supabase } from "../config/supabase.js";
import type { Instrument } from "../types/instruments.types.js";

// BUSCAR TODOS OS INSTRUMENTOS
export async function modelGetInstruments() {
	const { data, error } = await supabase.from("instruments").select();
	if (error) throw error;
	return data;
}

// BUSCA INSTRUMENTO ESPECÍFICO
export async function modelGetSingleInstrument(id: number) {
	const { data, error } = await supabase
		.from("instruments")
		.select()
		.eq("id", id)
		.maybeSingle();
	if (error) throw error;
	return data;
}

// CRIAR INSTRUMENTO
export async function modelCreateInstrument(instrument: Instrument) {
	const { data, error } = await supabase
		.from("instruments")
		.insert(instrument)
		.select()
		.single();
	if (error) throw error;
	return data;
}

// DELETAR INSTRUMENTO
export async function modelDeleteInstrument(id: number) {
	const { data, error } = await supabase
		.from("instruments")
		.delete()
		.eq("id", id)
		.select();
	if (error) throw error;
	return data;
}

// ATUALIZAR INSTRUMENTO
export async function modelUpdateInstrument(
	id: number,
	data: Record<string, unknown>,
) {
	const { data: instrument, error } = await supabase
		.from("instruments")
		.update(data)
		.eq("id", id)
		.select()
		.single();

	if (error) throw error;

	return instrument;
}
