import { userRepository } from "@shared/container";
import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRoutes = Router();


const userController = new UserController(userRepository);


userRoutes.post("/", userController.create);
userRoutes.get("/", userController.index);
userRoutes.put("/:id", userController.update);
userRoutes.get("/:id", userController.show);
userRoutes.delete("/:id", userController.delete);


export { userRoutes };
