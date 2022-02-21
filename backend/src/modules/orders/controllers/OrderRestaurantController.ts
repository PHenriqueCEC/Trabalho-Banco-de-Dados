import { Dessert } from "@modules/desserts/entities/Dessert";
import { Dish } from "@modules/dishes/entities/Dish";
import { Drink } from "@modules/drinks/entities/Drink";
import { OrdersDessertsRepository } from "@modules/orders_desserts/repositories/OrdersDessertsRepository";
import { OrdersDishesRepository } from "@modules/orders_dishes/repositories/OrderDishesRepository";
import { OrdersDrinksRepository } from "@modules/orders_drinks/repositories/OrdersDrinksRepository";
import { Request, Response } from "express";
import { OrderRepository } from "../repositories/OrderRepository";



class OrderRestaurantController {

    private orderRepository: OrderRepository;

    constructor(ordersRepository: OrderRepository) {
        this.orderRepository = ordersRepository;
    }


    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const drink = await this.orderRepository.findByRestaurant(Number(id));


        return response.status(200).json(drink);

    }

 
}

export { OrderRestaurantController };