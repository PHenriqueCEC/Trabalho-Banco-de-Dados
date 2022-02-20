import { dessertsRepository } from "@shared/container";
import { Router } from "express";
import { DessertsController } from "../controllers/DessertsController";


const dessertsRoutes = Router();

const dessertsController = new DessertsController(dessertsRepository);

dessertsRoutes.get("/", dessertsController.index);
dessertsRoutes.get("/:id", dessertsController.show);
dessertsRoutes.put("/:id", dessertsController.update);
dessertsRoutes.post("/", dessertsController.create);
dessertsRoutes.delete("/:id", dessertsController.delete);

export { dessertsRoutes };