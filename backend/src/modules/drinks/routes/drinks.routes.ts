import { drinksRespository } from "@shared/container";
import { Router } from "express";
import { DrinksController } from "../controllers/DrinksController";
import { DrinksRestaurantController } from "../controllers/DrinksRestaurantController";

const drinksRoutes = Router();

const drinksController = new DrinksController(drinksRespository);
const drinksRestaurantController = new DrinksRestaurantController(drinksRespository);

drinksRoutes.get("/restaurant/:id", drinksRestaurantController.show);

drinksRoutes.get("/", drinksController.index);
drinksRoutes.get("/:id", drinksController.show);
drinksRoutes.put("/:id", drinksController.update);
drinksRoutes.post("/", drinksController.create);
drinksRoutes.delete("/:id", drinksController.delete);

export { drinksRoutes };