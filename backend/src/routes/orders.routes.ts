import { Router } from "express";
import { GenericModel } from "../models/GenericModel.js";
import { GenericController } from "../controllers/GenericController.js";

export const ordersRoutes = Router();
const ordersModel = new GenericModel("orders");
const ordersController = new GenericController(ordersModel);

ordersRoutes.get("/", ordersController.getAll);
ordersRoutes.get("/:id", ordersController.getById);
ordersRoutes.post("/", ordersController.create);
ordersRoutes.delete("/:id", ordersController.delete);
ordersRoutes.patch("/:id", ordersController.update);
