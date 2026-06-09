const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
	res.send("Olá, Mundo!");
});

app.get("/api", (req, res) => {
	res.send({ frutas: ["Banana", "Maçã", "Abacaxi"] });
});

app.listen(port, () => {
	console.log(`Servidor de exemplo rodando na porta ${port}`);
});
