import { Request, Response } from "express";
import { OrderRepository } from "../repositories/OrderRepository";



class OrderController {

    private orderRepository: OrderRepository;

    constructor(repository: OrderRepository) {
        this.orderRepository = repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const {
            restaurant_id, academic_id, motoboy_id, status,
            delivery_forecast, origin, destiny,
        } = request.body;

        await this.orderRepository.create({
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

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const drink = await this.orderRepository.show(Number(id));


        return response.status(200).json(drink);

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

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.orderRepository.delete(Number(id));

        return response.status(200).json({});

    }
}

export { OrderController };