import { useState, useEffect } from "react";
import type {
	CreateInstrumentDTO,
	UpdateInstrumentDTO,
} from "@/types/dtos/instrument.dto";
import { instrumentsApi } from "@/api/instruments.api";
import type { Instrument } from "@/types/entities";

export function useInstruments() {
	const [instrument, setInstrument] = useState<Instrument>();
	const [instruments, setInstruments] = useState<Instrument[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isSingleLoading, setIsSingleLoading] = useState(false);

	// * BUSCAR TODOS OS INSTRUMENTOS
	async function getAllInstruments() {
		setIsLoading(true);

		try {
			const data = await instrumentsApi.getAllInstruments();
			setInstruments(data);
		} catch (error) {
			console.error("Erro no hook:", error);
		} finally {
			setIsLoading(false);
		}
	}

	// * LISTAR INSTRUMENTO ESPECÍFICO
	async function getSingleInstrument(id: number) {
		const data = await instrumentsApi.getSingleInstrument(id);
		setInstrument(data);
	}

	useEffect(() => {
		getAllInstruments();
	}, []);

	// * ADICIONAR INSTRUMENTO
	async function createInstrument(dto: CreateInstrumentDTO) {
		try {
			await instrumentsApi.postInstrument(dto);
			await getAllInstruments();
		} catch (error) {
			console.error("Erro no hook:", error);
		}
	}

	// * DELETAR INSTRUMENTO
	async function deleteInstrument(id: number) {
		setIsSingleLoading(true);
		try {
			await instrumentsApi.deleteInstrument(id);
			await getAllInstruments();
		} catch (error) {
			console.error("Erro no hook:", error);
			throw error;
		} finally {
			setIsSingleLoading(false);
		}
	}

	// * ATUALIZAR INSTRUMENTO
	async function updateInstrument(id: number, dto: UpdateInstrumentDTO) {
		setIsSingleLoading(true);
		try {
			const data = await instrumentsApi.patchInstrument(id, dto);
			await getAllInstruments();
			return data;
		} finally {
			setIsSingleLoading(false);
		}
	}

	return {
		instrument,
		instruments,
		isLoading,
		isSingleLoading,
		createInstrument,
		deleteInstrument,
		updateInstrument,
		getSingleInstrument,
	};
}
