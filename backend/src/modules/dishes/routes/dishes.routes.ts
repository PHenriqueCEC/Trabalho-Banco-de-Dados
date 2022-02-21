import { dishesRepository } from "@shared/container";
import { Router } from "express";
import { DishesController } from "../controllers/DishesController";
import { DishesRestaurantController } from "../controllers/DishesRestaurantController";

const dishesRoutes = Router();

const dishesController = new DishesController(dishesRepository);
const dishesRestaurantController = new DishesRestaurantController(dishesRepository);

dishesRoutes.get("/restaurant/:id", dishesRestaurantController.show);

dishesRoutes.get("/", dishesController.index);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.put("/:id", dishesController.update);
dishesRoutes.post("/", dishesController.create);
dishesRoutes.delete("/:id", dishesController.delete);

export { dishesRoutes };