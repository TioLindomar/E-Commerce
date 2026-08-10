import { Router } from "express";
import { GenericModel } from "../models/GenericModel.js";
import { GenericController } from "../controllers/GenericController.js";

export const usersRoutes = Router();

const usersModel = new GenericModel("users");
const usersController = new GenericController(usersModel);

usersRoutes.get("/", usersController.getAll);
usersRoutes.get("/:id", usersController.getById);
usersRoutes.post("/", usersController.create);
usersRoutes.delete("/:id", usersController.delete);
usersRoutes.patch("/:id", usersController.update);
