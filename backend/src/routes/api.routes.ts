import { Router, type Request, type Response } from "express";
import { orderItemsRoutes } from "./order_items.routes.js";
import { ordersRoutes } from "./orders.routes.js";
import { productsRoutes } from "./products.routes.js";
import { userAdressesRoutes } from "./user_adresses.routes.js";
import { usersRoutes } from "./users.routes.js";

const router: Router = Router();

// * Rota Pública
router.get("/", (req: Request, res: Response) => {
	res.json({ system: "E-Commerce API", status: "online" });
});

// * Rotas de Instrumentos
router.use("/users", usersRoutes);
router.use("/products", productsRoutes);
router.use("/orders", ordersRoutes);
router.use("/order_items", orderItemsRoutes);
router.use("/user_adresses", userAdressesRoutes);

export { router as apiRoutes };
