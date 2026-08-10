import { Router } from "express";
import { GenericModel } from "../models/GenericModel.js";
import { GenericController } from "../controllers/GenericController.js";

export const userAdressesRoutes = Router();
const userAdressesModel = new GenericModel("user_adresses");
const userAdressesController = new GenericController(userAdressesModel);

userAdressesRoutes.get("/", userAdressesController.getAll);
userAdressesRoutes.get("/:id", userAdressesController.getById);
userAdressesRoutes.post("/", userAdressesController.create);
userAdressesRoutes.delete("/:id", userAdressesController.delete);
userAdressesRoutes.patch("/:id", userAdressesController.update);
