import { categoriesRestaurantsRoutes } from "@modules/categories_restaurants/routes/categoriesRestaurants.routes";
import { userRoutes } from "@modules/users/routes/users.routes";
import { adressRoutes } from "@modules/addresses/routes/Adress.routes";
import { drinksRoutes } from "@modules/drinks/routes/drinks.routes";
import { restaurantsRoutes } from "@modules/restaurants/routes/restaurants.routes";
import { Router } from "express";

const routes = Router();

routes.use("/categoriesRestaurants", categoriesRestaurantsRoutes);
routes.use("/users", userRoutes);
routes.use("/adresses", adressRoutes);
routes.use("/restaurants", restaurantsRoutes);
routes.use("/drinks", drinksRoutes);

export { routes };