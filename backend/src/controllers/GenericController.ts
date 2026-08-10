import type { Request, Response } from "express";
import type { GenericModel, TableName } from "../models/GenericModel.js";

export class GenericController<T extends TableName> {
	private model: GenericModel<T>;

	constructor(model: GenericModel<T>) {
		this.model = model;
	}

	// * BUSCAR TODOS
	public getAll = async (req: Request, res: Response): Promise<Response> => {
		try {
			const data = await this.model.getAll();
			return res.json(data);
		} catch (error: any) {
			return res.status(500).json({ error: error.message });
		}
	};

	// * BUSCAR POR ID
	public getById = async (req: Request, res: Response): Promise<Response> => {
		try {
			const id = String(req.params.id);
			const data = await this.model.getById(id);
			return res.json(data);
		} catch (error: any) {
			return res.status(404).json({ error: "Registro não encontrado." });
		}
	};

	// * CRIAR
	public create = async (req: Request, res: Response): Promise<Response> => {
		try {
			const data = await this.model.create(req.body);
			return res.status(201).json(data);
		} catch (error: any) {
			return res.status(400).json({ error: error.message });
		}
	};

	// * ATUALIZAR
	public update = async (req: Request, res: Response): Promise<Response> => {
		try {
			const id = String(req.params.id);
			const data = await this.model.update(id, req.body);
			return res.json(data);
		} catch (error: any) {
			return res.status(400).json({ error: error.message });
		}
	};

	// * DELETAR
	public delete = async (req: Request, res: Response): Promise<Response> => {
		try {
			const id = String(req.params.id);
			await this.model.delete(id);
			return res.status(204).send();
		} catch (error: any) {
			return res.status(400).json({ error: error.message });
		}
	};
}
