import { create } from "axios";

// * Instanciando Axios
export const axios = create({
	baseURL: import.meta.env.VITE_API_URL,
});

