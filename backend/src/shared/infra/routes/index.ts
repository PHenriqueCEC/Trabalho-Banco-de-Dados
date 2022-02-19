import { categoriesRestaurantsRoutes } from "@modules/categories_restaurants/routes/categoriesRestaurants.routes";
import { restaurantsRoutes } from "@modules/restaurants/routes/restaurants.routes";
import { Router } from "express";

const routes = Router();

routes.use("/categoriesRestaurants", categoriesRestaurantsRoutes);
routes.use("/restaurants", restaurantsRoutes);

export { routes };