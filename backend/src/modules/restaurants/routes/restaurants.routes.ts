import { restaurantsRepository } from "@shared/container";
import { Router } from "express";
import { RestaurantsController } from "../controllers/RestaurantsController";


const restaurantsRoutes = Router();

const restaurantsController = new RestaurantsController(restaurantsRepository);

restaurantsRoutes.get("/", restaurantsController.index);
restaurantsRoutes.get("/:id", restaurantsController.show);
restaurantsRoutes.put("/:id", restaurantsController.update);
restaurantsRoutes.post("/", restaurantsController.create);
restaurantsRoutes.delete("/:id", restaurantsController.delete);


export { restaurantsRoutes };