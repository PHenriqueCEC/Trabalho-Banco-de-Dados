import { Request, Response } from "express";
import { DishesRepository } from "../repositories/DishesRepository";



class DishesController {

    private dishesRepository: DishesRepository;

    constructor(repository: DishesRepository) {

        this.dishesRepository = repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const {
            name,
            restaurant_id,
            category_dishes_id,
            value,
            ingredients,
            description,
        } = request.body;

        await this.dishesRepository.create({
            name,
            restaurant_id,
            category_dishes_id,
            value,
            ingredients,
            description,
        });

        return response.status(200).json({});
    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const {
            name,
            restaurant_id,
            category_dishes_id,
            value,
            ingredients,
            description,
        } = request.body;

        const { id } = request.params;

        await this.dishesRepository.update({
            id: Number(id),
            name,
            restaurant_id,
            category_dishes_id,
            value,
            ingredients,
            description,
        });

        return response.status(200).json({});
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const dish = await this.dishesRepository.show(Number(id));

        return response.status(200).json(dish);

    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.dishesRepository.delete(Number(id));

        return response.status(200).json({});

    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const dishes = await this.dishesRepository.findAll();

        return response.status(200).json(dishes);

    }


}

export { DishesController };