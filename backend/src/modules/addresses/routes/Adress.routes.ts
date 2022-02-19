import { adressRepository } from "@shared/container";
import { Router } from "express";
import { AdressController } from "../controllers/AdressController";

const adressRoutes = Router();


const adressController = new AdressController(adressRepository);


adressRoutes.post("/", adressController.create);
adressRoutes.get("/", adressController.index);
adressRoutes.put("/:id", adressController.update);
adressRoutes.get("/:id", adressController.show);
adressRoutes.delete("/:id", adressController.delete);


export { adressRoutes };
