import { Dessert } from "@modules/desserts/entities/Dessert";
import { Dish } from "@modules/dishes/entities/Dish";
import { Drink } from "@modules/drinks/entities/Drink";
import { OrdersDessertsRepository } from "@modules/orders_desserts/repositories/OrdersDessertsRepository";
import { OrdersDishesRepository } from "@modules/orders_dishes/repositories/OrderDishesRepository";
import { OrdersDrinksRepository } from "@modules/orders_drinks/repositories/OrdersDrinksRepository";
import { Request, Response } from "express";
import { OrderRepository } from "../repositories/OrderRepository";



class OrderController {

    private orderRepository: OrderRepository;

    private ordersDessertsRepository: OrdersDessertsRepository;

    private ordersDishesRepository: OrdersDishesRepository;

    private ordersDrinksRepository: OrdersDrinksRepository;

    constructor(ordersRepository: OrderRepository, ordersDishesRepository: OrdersDishesRepository, ordersDrinksRepository: OrdersDrinksRepository, ordersDessertsRepository: OrdersDessertsRepository) {
        this.orderRepository = ordersRepository;
        this.ordersDishesRepository = ordersDishesRepository;
        this.ordersDessertsRepository = ordersDessertsRepository;
        this.ordersDrinksRepository = ordersDrinksRepository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        try {

            const {
                restaurant_id, academic_id, status,
                delivery_forecast, origin, destiny, dishes, drinks, desserts,
            } = request.body;

            const order_id = await this.orderRepository.create({
                restaurant_id: Number(restaurant_id),
                academic_id: Number(academic_id),
                status,
                delivery_forecast: Number(delivery_forecast),
                origin,
                destiny,
            });


            Promise.resolve(
                dishes.forEach(async (dish: Dish) => {

                    await this.ordersDishesRepository.create({
                        order_id,
                        dish_id: dish.id,
                    });
                }),
            );

            Promise.resolve(
                drinks.forEach(async (drink: Drink) => {

                    await this.ordersDrinksRepository.create({
                        order_id,
                        drink_id: drink.id,
                    });
                }),
            );

            Promise.resolve(
                desserts.forEach(async (dessert: Dessert) => {

                    await this.ordersDessertsRepository.create({
                        order_id,
                        dessert_id: dessert.id,
                    });
                }),
            );


            return response.status(200).json({
                id: order_id,
            });

        } catch (err) {
            return response.status(400).json(err);
        }

    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const order = await this.orderRepository.show(Number(id));


        return response.status(200).json(order);

    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const drinks = await this.orderRepository.findAll();

        return response.status(200).json(drinks);

    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;
        const {
            restaurant_id, academic_id, motoboy_id, status,
            delivery_forecast, origin, destiny,
        } = request.body;

        await this.orderRepository.update({
            id: Number(id),
            restaurant_id: Number(restaurant_id),
            academic_id: Number(academic_id),
            motoboy_id: Number(motoboy_id),
            status,
            delivery_forecast: Number(delivery_forecast),
            origin,
            destiny,
        });

        return response.status(200).json({});

    }

    public updateStatus = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;
        const { status } = request.body;

        await this.orderRepository.updateStatus({
            id: Number(id),
            status: String(status),
        });

        return response.status(200).json({});

    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.orderRepository.delete(Number(id));

        return response.status(200).json({});

    }
}

export { OrderController };