// ? Roteamento GLOBAL das requisiçoes: quando uma requisição é feita num certo endpoint (Ex: http://localhost:3000/instruments), o arquivo router determina o que será executado com base no método da requisição (GET, POST, DELETE etc)

import { Router, type Request, type Response } from "express";
import { instrumentsRoutes } from "./instrument.routes.js";

const router = Router();

// * Rota Pública (não precisa de Auth)
router.get("/", (req: Request, res: Response) => {
	res.json({ system: "E-Commerce API", status: "online" });
});

// * Rotas de Instrumentos
router.use("/instruments", instrumentsRoutes);

export { router as apiRoutes };
