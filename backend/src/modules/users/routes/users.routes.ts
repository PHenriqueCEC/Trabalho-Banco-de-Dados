import { userRepository } from "@shared/container";
import { Router } from "express";
import { UserController } from "../controllers/UserController";

const UserRoutes = Router();


const userController = new UserController(userRepository);


UserRoutes.post("/", userController.create);
UserRoutes.get("/", userController.index);
UserRoutes.put("/:id", userController.update);
UserRoutes.get("/:id", userController.show);
UserRoutes.delete("/:id", userController.delete);


export { UserRoutes };
