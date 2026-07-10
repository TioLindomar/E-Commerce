import { Router } from "express";
import {
	getInstruments,
	createInstrument,
	deleteInstrument,
	updateInstrument,
	getSingleInstrument,
} from "../controllers/instrument.controller.js";

export const instrumentsRoutes = Router();

instrumentsRoutes.get("/", getInstruments);
instrumentsRoutes.get("/:id", getSingleInstrument);
instrumentsRoutes.post("/", createInstrument);
instrumentsRoutes.delete("/:id", deleteInstrument);
instrumentsRoutes.patch("/:id", updateInstrument);
