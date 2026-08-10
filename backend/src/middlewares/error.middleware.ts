// TODO | INTERPRETAR ESTE CÓDIGO
// * Classe de erro
export class AppError extends Error {
	constructor(
		public message: string,
		public status: number,
	) {
		super(message);
		this.name = "AppError";
	}
}

// * Middleware de erro
import type { Request, Response, NextFunction } from "express";

export function errorMiddleware(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	console.error(error);

	if (error instanceof AppError) {
		return res.status(error.status).json({
			message: error.message,
		});
	}

	return res.status(500).json({
		message: "Erro interno do servidor.",
	});
}
