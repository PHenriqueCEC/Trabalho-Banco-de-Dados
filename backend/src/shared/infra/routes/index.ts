import { categoriesDishesRoutes } from "@modules/categories_dishes/routes/categoriesDishes.routes";
import { categoriesRestaurantsRoutes } from "@modules/categories_restaurants/routes/categoriesRestaurants.routes";
import { userRoutes } from "@modules/users/routes/users.routes";
import { adressRoutes } from "@modules/addresses/routes/Adress.routes";
import { dishesRoutes } from "@modules/dishes/routes/dishes.routes";
import { drinksRoutes } from "@modules/drinks/routes/drinks.routes";
import { restaurantsRoutes } from "@modules/restaurants/routes/restaurants.routes";
import { Router } from "express";
import { dessertsRoutes } from "@modules/desserts/routes/desserts.routes";
import { orderRoutes } from "@modules/orders/routes/order.routes";

const routes = Router();

routes.use("/categoriesRestaurants", categoriesRestaurantsRoutes);
routes.use("/users", userRoutes);
routes.use("/adresses", adressRoutes);
routes.use("/restaurants", restaurantsRoutes);
routes.use("/drinks", drinksRoutes);
routes.use("/categoriesDishes", categoriesDishesRoutes);
routes.use("/dishes", dishesRoutes);
routes.use("/desserts", dessertsRoutes);
routes.use("/orders", orderRoutes);

export { routes };