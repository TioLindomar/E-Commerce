import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 3000;

import { apiRoutes } from "./routes/api.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
	}),
);
app.use(express.json());
app.use(apiRoutes);
app.use(errorMiddleware);

app.get("/", (req, res) => {
	res.send("Olá, Mundo!");
});

app.get("/api", (req, res) => {
	res.send({ roupas: ["Camiseta", "Calça cargo", "Boné"] });
});

// * Retornar lista de produtos
app.get("/products", (req, res) => {
	res.json([
		{ id: 1, name: "T-Shirt", price: 59.99 },
		{ id: 2, name: "Cargo Pants", price: 120.0 },
		{ id: 3, name: "Cap", price: 35.5 },
		{ id: 4, name: "Hoodie", price: 150.0 },
		{ id: 5, name: "Sneakers", price: 299.9 },
		{ id: 6, name: "Socks", price: 15.0 },
		{ id: 7, name: "Jacket", price: 250.0 },
		{ id: 8, name: "Shorts", price: 45.0 },
		{ id: 9, name: "Belt", price: 25.0 },
		{ id: 10, name: "Backpack", price: 180.0 },
	]);
});

app.get("/products/:id", (req, res) => {
	const id = Number(req.params.id);
	const products = [
		{ id: 1, name: "T-Shirt", price: 59.99 },
		{ id: 2, name: "Cargo Pants", price: 120.0 },
		{ id: 3, name: "Cap", price: 35.5 },
		{ id: 4, name: "Hoodie", price: 150.0 },
		{ id: 5, name: "Sneakers", price: 299.9 },
		{ id: 6, name: "Socks", price: 15.0 },
		{ id: 7, name: "Jacket", price: 250.0 },
		{ id: 8, name: "Shorts", price: 45.0 },
		{ id: 9, name: "Belt", price: 25.0 },
		{ id: 10, name: "Backpack", price: 180.0 },
	];

	const requestedProduct = products.find((product) => product.id === id);

	// Retorna 404 se a busca falhar
	if (!requestedProduct) {
		return res.status(404).json({ error: "Produto não encontrado." });
	}

	res.json(requestedProduct);
});

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
