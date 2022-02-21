import { dessertsRepository } from "@shared/container";
import { Router } from "express";
import { DessertsController } from "../controllers/DessertsController";
import { DessertsRestaurantController } from "../controllers/DessertsRestaurantController";


const dessertsRoutes = Router();

const dessertsController = new DessertsController(dessertsRepository);
const dessertsRestaurantController = new DessertsRestaurantController(dessertsRepository);

dessertsRoutes.get("/restaurant/:id", dessertsRestaurantController.show);

dessertsRoutes.get("/", dessertsController.index);
dessertsRoutes.get("/:id", dessertsController.show);
dessertsRoutes.put("/:id", dessertsController.update);
dessertsRoutes.post("/", dessertsController.create);
dessertsRoutes.delete("/:id", dessertsController.delete);

export { dessertsRoutes };