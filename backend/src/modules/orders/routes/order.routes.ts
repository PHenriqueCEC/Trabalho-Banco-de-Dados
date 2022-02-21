import {
 orderRepository, ordersDessertsRepository, ordersDishesRepository, ordersDrinksRepository, 
} from "@shared/container";
import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import { OrderRestaurantController } from "../controllers/OrderRestaurantController";
import { OrderUsersController } from "../controllers/OrderRestaurantController copy";

const orderRoutes = Router();

const orderController = new OrderController(orderRepository, ordersDishesRepository, ordersDrinksRepository, ordersDessertsRepository);
const orderRestaurantController = new OrderRestaurantController(orderRepository);
const orderUsersController = new OrderUsersController(orderRepository);

orderRoutes.get("/restaurant/:id", orderRestaurantController.show);
orderRoutes.get("/user/:id", orderUsersController.show);

orderRoutes.get("/", orderController.index);
orderRoutes.get("/:id", orderController.show);
orderRoutes.put("/:id", orderController.update);
orderRoutes.put("/status/:id", orderController.updateStatus);
orderRoutes.post("/", orderController.create);
orderRoutes.delete("/:id", orderController.delete);

export { orderRoutes };