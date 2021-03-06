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
import { SuggestionRepository } from "@modules/suggestions/repositories/SuggestionRepository";
import { RatingRepository } from "@modules/rating/repositories/RatingRepository";
import { RestaurantsRepository } from "@modules/restaurants/repositories/RestaurantsRepository";
import { DrinksRepository } from "@modules/drinks/repositories/DrinksRepository";
import { AdressRepository } from "@modules/addresses/repositories/AdressRepository";
import { CoupomRepository } from "@modules/coupons/repositories/CoupomRepository";
import { OrderRepository } from "@modules/orders/repositories/OrderRepository";
import { CategoriesDishesRepository } from "@modules/categories_dishes/repositories/CategoriesDishesRepository";
import { DishesRepository } from "@modules/dishes/repositories/DishesRepository";
import { DessertsRepository } from "@modules/desserts/repositories/DessertsRepository";
import { OrdersDessertsRepository } from "@modules/orders_desserts/repositories/OrdersDessertsRepository";
import { OrdersDishesRepository } from "@modules/orders_dishes/repositories/OrderDishesRepository";
import { OrdersDrinksRepository } from "@modules/orders_drinks/repositories/OrdersDrinksRepository";




const categoriesRestaurantsRepository = new CategoriesRestaurantsRepository();
const userRepository = new UserRepository();
const adressRepository = new AdressRepository();
const suggestionRepository = new SuggestionRepository();
const ratingRepository = new RatingRepository();
const coupomRepository = new CoupomRepository();
const restaurantsRepository = new RestaurantsRepository();
const drinksRespository = new DrinksRepository();
const orderRepository = new OrderRepository();
const categoriesDishesRepository = new CategoriesDishesRepository();
const dishesRepository = new DishesRepository();
const dessertsRepository = new DessertsRepository();
const ordersDessertsRepository = new OrdersDessertsRepository();
const ordersDishesRepository = new OrdersDishesRepository();
const ordersDrinksRepository = new OrdersDrinksRepository();

export {
    categoriesRestaurantsRepository,
    userRepository,
    adressRepository,
    suggestionRepository,
    ratingRepository,
    coupomRepository,
    restaurantsRepository,
    drinksRespository,
    orderRepository,
    categoriesDishesRepository,
    dishesRepository,
    dessertsRepository,
    ordersDessertsRepository,
    ordersDishesRepository,
    ordersDrinksRepository,
};