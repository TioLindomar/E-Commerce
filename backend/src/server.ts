import cors from "cors";
import "dotenv/config";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

import { errorMiddleware } from "./middlewares/error.middleware.js";
import { apiRoutes } from "./routes/api.routes.js";
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // Janela de 1 minuto
    max: 100, // Limita cada IP a 100 requisições por minuto
    message: { error: "Muitas requisições feitas por este IP, tente novamente mais tarde." }
});

app.use(cors());
app.use(express.json());
app.use(apiRoutes);
app.use(errorMiddleware);
app.use('/', apiLimiter);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
