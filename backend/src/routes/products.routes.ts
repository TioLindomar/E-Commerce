import { Router } from "express";
import { GenericModel } from "../models/GenericModel.js";
import { GenericController } from "../controllers/GenericController.js";

export const productsRoutes = Router();

const productsModel = new GenericModel("products");
const producsController = new GenericController(productsModel);

productsRoutes.get("/", producsController.getAll);
productsRoutes.get("/:id", producsController.getById);
productsRoutes.post("/", producsController.create);
productsRoutes.delete("/:id", producsController.delete);
productsRoutes.patch("/:id", producsController.update);
