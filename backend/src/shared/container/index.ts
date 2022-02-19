import "@modules/categories_restaurants/entities/CategoryRestaurant";
import "@modules/restaurants/entities/Restaurant";
import "@modules/users/entities/User";
import "@modules/users_restaurants/entities/UserRestaurant";
import "@modules/suggestions/entities/Suggestion";
import "@modules/addresses/entities/Address";
import "@modules/categories_dishes/entities/CategoryDish";
import "@modules/dishes/entities/Dish";
import "@modules/drinks/entities/Drink";
import "@modules/desserts/entities/Dessert";
import "@modules/orders/entities/Order";
import "@modules/orders_desserts/entities/OrderDessert";
import "@modules/orders_dishes/entities/OrderDish";
import "@modules/orders_drinks/entities/OrderDrink";
import "@modules/coupons/entities/Coupon";
import "@modules/rating/entities/Rating";
import "@modules/restaurants_rating_orders/entities/RestaurantRatingOrder";

import { CategoriesRestaurantsRepository } from "@modules/categories_restaurants/repositories/CategoriesRestaurantsRepository";
import { UserRepository } from "@modules/users/repositories/UserRepository";
import { AdressRepository } from "@modules/addresses/repositories/AdressRepository";



const categoriesRestaurantsRepository = new CategoriesRestaurantsRepository();
const userRepository = new UserRepository();
const adressRepository = new AdressRepository();


export {
    categoriesRestaurantsRepository,
    userRepository,
    adressRepository,

};