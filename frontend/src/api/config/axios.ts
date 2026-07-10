import { create } from "axios";

// * Instanciando Axios
export const api = create({
	baseURL: "http://localhost:3000/",
});

