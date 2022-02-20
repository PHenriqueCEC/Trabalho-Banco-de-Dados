import { coupomRepository } from "@shared/container";
import { Router } from "express";
import { CoupomController } from "../controllers/CoupomController";

const coupomRoutes = Router();


const coupomController = new CoupomController(coupomRepository);


coupomRoutes.post("/", coupomController.create);
coupomRoutes.get("/", coupomController.index);
coupomRoutes.put("/:id", coupomController.update);
coupomRoutes.get("/:id", coupomController.show);
coupomRoutes.delete("/:id", coupomController.delete);


export { coupomController };
