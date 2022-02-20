import { categoriesDishesRoutes } from "@modules/categories_dishes/routes/categoriesDishes.routes";
import { categoriesRestaurantsRoutes } from "@modules/categories_restaurants/routes/categoriesRestaurants.routes";
import { drinksRoutes } from "@modules/drinks/routes/drinks.routes";
import { restaurantsRoutes } from "@modules/restaurants/routes/restaurants.routes";
import { Router } from "express";

const routes = Router();

routes.use("/categoriesRestaurants", categoriesRestaurantsRoutes);
routes.use("/restaurants", restaurantsRoutes);
routes.use("/drinks", drinksRoutes);
routes.use("/categoriesDishes", categoriesDishesRoutes);

export { routes };