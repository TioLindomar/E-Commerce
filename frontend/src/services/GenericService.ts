import { axios } from "@/config/axios";

export class GenericService {
	private route: string;

	constructor(route: string) {
		this.route = route;
	}

	// * BUSCAR TODOS
	public async getAll<T>(): Promise<T[]> {
		const response = await axios.get(this.route);
		return response.data;
	}

	// * BUSCAR POR ID
	public async getById<T>(id: string): Promise<T> {
		const response = await axios.get(`${this.route}/${id}`);
		return response.data;
	}

	// * CRIAR
	public async create<TPayloadType, TResponseType>(
		payload: TPayloadType,
	): Promise<TResponseType> {
		const response = await axios.post(this.route, payload);
		console.log(response.data);

		return response.data;
	}

	// * DELETAR
	public async delete<T>(id: string): Promise<T> {
		const response = await axios.delete(`${this.route}/${id}`);
		return response.data;
	}

	// * ATUALIZAR
	public async patch<TPayloadType, TResponseType>(
		id: string,
		payload: TPayloadType,
	): Promise<TResponseType> {
		const response = await axios.patch(`${this.route}/${id}`, payload);
		return response.data;
	}
}
