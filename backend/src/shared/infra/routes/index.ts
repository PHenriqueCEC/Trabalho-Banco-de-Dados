import { categoriesRestaurantsRoutes } from "@modules/categories_restaurants/routes/categoriesRestaurants.routes";
import { UserRoutes } from "@modules/users/routes/users.routes";
import { adressRoutes } from "@modules/addresses/routes/Adress.routes";

import { Router } from "express";

const routes = Router();


routes.use("/categoriesRestaurants", categoriesRestaurantsRoutes);
routes.use("/users", UserRoutes);
routes.use("/adresses", adressRoutes);

export { routes };