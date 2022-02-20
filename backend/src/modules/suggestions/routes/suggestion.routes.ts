import { suggestionRepository } from "@shared/container";
import { Router } from "express";
import { SuggestionController } from "../controllers/SuggestionController";

const suggestionRoutes = Router();


const suggestionController = new SuggestionController(suggestionRepository);


suggestionRoutes.post("/", suggestionController.create);
suggestionRoutes.get("/", suggestionRepository.index);
suggestionRoutes.put("/:id", suggestionRepository.update);
suggestionRoutes.get("/:id", suggestionRepository.show);
suggestionRoutes.delete("/:id", suggestionRepository.delete);


export { suggestionRoutes };
