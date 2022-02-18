import { categoriesRestaurantsRoutes } from "@modules/categories_restaurants/routes/categoriesRestaurants.routes";
import { Router } from "express";

const routes = Router();


routes.use("/categoriesRestaurants", categoriesRestaurantsRoutes);

export { routes };