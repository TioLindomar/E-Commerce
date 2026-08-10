import { Router } from "express";
import { GenericModel } from "../models/GenericModel.js";
import { GenericController } from "../controllers/GenericController.js";

export const orderItemsRoutes = Router();

const orderItemsModel = new GenericModel("order_items");
const orderItemsController = new GenericController(orderItemsModel);

orderItemsRoutes.get("/", orderItemsController.getAll);
orderItemsRoutes.get("/:id", orderItemsController.getById);
orderItemsRoutes.post("/", orderItemsController.create);
orderItemsRoutes.delete("/:id", orderItemsController.delete);
orderItemsRoutes.patch("/:id", orderItemsController.update);
