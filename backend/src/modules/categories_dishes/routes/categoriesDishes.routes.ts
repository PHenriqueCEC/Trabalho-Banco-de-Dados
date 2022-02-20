import { categoriesDishesRepository } from "@shared/container";
import { Router } from "express";
import { CategoriesDishesController } from "../controllers/CategoriesDishesController";


const categoriesDishesRoutes = Router();

const categoriesDishesContreller = new CategoriesDishesController(categoriesDishesRepository);

categoriesDishesRoutes.get("/", categoriesDishesContreller.index);
categoriesDishesRoutes.get("/:id", categoriesDishesContreller.show);
categoriesDishesRoutes.put("/:id", categoriesDishesContreller.update);
categoriesDishesRoutes.post("/", categoriesDishesContreller.create);
categoriesDishesRoutes.delete("/:id", categoriesDishesContreller.delete);

export { categoriesDishesRoutes };