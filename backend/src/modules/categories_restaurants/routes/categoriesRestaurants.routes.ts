import { categoriesRestaurantsRepository } from "@shared/container";
import { Router } from "express";
import { CategoriesRestaurantsController } from "../controllers/CategoriesRestaurantsController";

const categoriesRestaurantsRoutes = Router();


const categoryRestaurantsController = new CategoriesRestaurantsController(categoriesRestaurantsRepository);


categoriesRestaurantsRoutes.post("/", categoryRestaurantsController.create);
categoriesRestaurantsRoutes.get("/", categoryRestaurantsController.index);
categoriesRestaurantsRoutes.put("/:id", categoryRestaurantsController.update);
categoriesRestaurantsRoutes.get("/:id", categoryRestaurantsController.show);
categoriesRestaurantsRoutes.delete("/:id", categoryRestaurantsController.delete);


export { categoriesRestaurantsRoutes };
