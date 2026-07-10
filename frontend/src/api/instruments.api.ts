import { api } from "./config/axios";
import type {
	CreateInstrumentDTO,
	UpdateInstrumentDTO,
} from "../types/instruments.types";

export const instrumentsApi = {
	// * BUSCAR TODOS OS INSTRUMENTOS
	async getAllInstruments() {
		const response = await api.get("/instruments");
		return response.data;
	},

	// * BUSCAR INSTRUMENTO ESPECÍFICO
	async getSingleInstrument(id: number) {
		const response = await api.get(`/instruments/${id}`);
		console.log("Log da busca de instrumento:", response.data);

		return response.data;
	},

	// * CRIAR INSTRUMENTO
	async postInstrument(instrument: CreateInstrumentDTO) {
		const response = await api.post("/instruments", instrument);
		return response.data;
	},

	// * DELETAR INSTRUMENTO
	async deleteInstrument(id: number) {
		const response = await api.delete(`/instruments/${id}`);
		return response.data;
	},

	// * ATUALIZAR INSTRUMENTO
	async patchInstrument(id: number, instrument: UpdateInstrumentDTO) {
		const response = await api.patch(`/instruments/${id}`, instrument);
		return response.data;
	},
};
