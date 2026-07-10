// ? CONTROLLER: lida com as requisições e respostas

import type { Request, Response, NextFunction } from "express";
import {
	modelGetInstruments,
	modelCreateInstrument,
	modelDeleteInstrument,
	modelUpdateInstrument,
	modelGetSingleInstrument,
} from "../models/instruments.model.js";
import { AppError } from "../middlewares/error.middleware.js";

// BUSCA TODOS OS INSTRUMENTOS
export async function getInstruments(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const instruments = await modelGetInstruments();

		res.json(instruments);
	} catch (error) {
		next(error);
	}
}

// BUSCA INSTRUMENTO ESPECÍFICO
export async function getSingleInstrument(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const id = Number(req.params.id);
		const instrument = await modelGetSingleInstrument(id);

		if (!instrument) {
			throw new AppError("Instrumento não encontrado.", 404);
		}

		res.json(instrument);
	} catch (error) {
		next(error);
	}
}

// CRIA UM INSTRUMENTO
export async function createInstrument(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const instrument = await modelCreateInstrument(req.body);

		res.status(201).json({
			message: "Instrumento criado com sucesso!",
			data: instrument,
		});
	} catch (error) {
		next(error);
	}
}

// DELETA UM INSTRUMENTO
export async function deleteInstrument(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const id = Number(req.params.id);
		const deletedInstrument = await modelDeleteInstrument(id);
		res.status(200).json({
			message: "instrumento deletado com sucesso!",
			data: deletedInstrument,
		});
	} catch (error) {
		next(error);
	}
}

// ATUALIZA UM INSTRUMENTO
export async function updateInstrument(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		console.log("PARAMS:", req.params);
		console.log("BODY:", req.body);
		const id = Number(req.params.id);
		const instrument = await modelUpdateInstrument(id, req.body);
		res.status(200).json({
			message: "instrumento atualizado com sucesso!",
			data: instrument,
		});
	} catch (error) {
		console.error(error);
		next(error);
	}
}
