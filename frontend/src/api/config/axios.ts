import { create } from "axios";

// * Instanciando Axios
export const api = create({
	baseURL: import.meta.env.VITE_API_URL,
});

