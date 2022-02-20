import { Request, Response } from "express";
import { DessertsRepository } from "../repositories/DessertsRepository";



class DessertsController {

    private dessertsRepository: DessertsRepository;

    constructor(repository: DessertsRepository) {

        this.dessertsRepository = repository;

    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { name, value, restaurant_id } = request.body;

        await this.dessertsRepository.create({
            name,
            value,
            restaurant_id,
        });

        return response.status(200).json();
    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { name, value, restaurant_id } = request.body;
        const { id } = request.params;

        await this.dessertsRepository.update({
            id: Number(id),
            name,
            value,
            restaurant_id,
        });

        return response.status(200).json();
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const dessert = await this.dessertsRepository.show(Number(id));

        return response.status(200).json(dessert);
    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const dessert = await this.dessertsRepository.findAll();

        return response.status(200).json(dessert);

    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.dessertsRepository.delete(Number(id));

        return response.status(200).json();
    }
}

export { DessertsController };