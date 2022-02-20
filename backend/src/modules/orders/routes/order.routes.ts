import { orderRepository } from "@shared/container";
import { Router } from "express";
import { OrderController } from "../controllers/OrderController";

const orderRoutes = Router();

const orderController = new OrderController(orderRepository);

orderRoutes.get("/", orderController.index);
orderRoutes.get("/:id", orderController.show);
orderRoutes.put("/:id", orderController.update);
orderRoutes.post("/", orderController.create);
orderRoutes.delete("/:id", orderController.delete);

export { orderRoutes };