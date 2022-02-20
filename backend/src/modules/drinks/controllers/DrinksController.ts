import { Request, Response } from "express";
import { DrinksRepository } from "../repositories/DrinksRepository";



class DrinksController {

    private drinksRepository: DrinksRepository;

    constructor(repository: DrinksRepository) {
        this.drinksRepository = repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { name, restaurant_id, value } = request.body;

        await this.drinksRepository.create({
            name,
            value: Number(value),
            restaurant_id: Number(restaurant_id),
        });

        return response.status(200).json({});

    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const drink = await this.drinksRepository.show(Number(id));


        return response.status(200).json(drink);

    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const drinks = await this.drinksRepository.findAll();

        return response.status(200).json(drinks);

    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;
        const { name, restaurant_id, value } = request.body;

        await this.drinksRepository.update({
            id: Number(id),
            name,
            restaurant_id: Number(restaurant_id),
            value: Number(value),
        });

        return response.status(200).json({});

    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.drinksRepository.delete(Number(id));

        return response.status(200).json({});

    }
}

export { DrinksController };