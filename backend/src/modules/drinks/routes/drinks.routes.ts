import { drinksRespository } from "@shared/container";
import { Router } from "express";
import { DrinksController } from "../controllers/DrinksController";

const drinksRoutes = Router();

const drinksController = new DrinksController(drinksRespository);

drinksRoutes.get("/", drinksController.index);
drinksRoutes.get("/:id", drinksController.show);
drinksRoutes.put("/:id", drinksController.update);
drinksRoutes.post("/", drinksController.create);
drinksRoutes.delete("/:id", drinksController.delete);

export { drinksRoutes };