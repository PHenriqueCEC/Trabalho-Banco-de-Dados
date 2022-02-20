import { ratingRepository } from "@shared/container";
import { Router } from "express";
import { RatingController } from "../controllers/RatingController";

const ratingRoutes = Router();


const categoryRestaurantsController = new RatingController(ratingRepository);


ratingRoutes.post("/", categoryRestaurantsController.create);
ratingRoutes.get("/", categoryRestaurantsController.index);
ratingRoutes.put("/:id", categoryRestaurantsController.update);
ratingRoutes.get("/:id", categoryRestaurantsController.show);
ratingRoutes.delete("/:id", categoryRestaurantsController.delete);


export { ratingRoutes };
