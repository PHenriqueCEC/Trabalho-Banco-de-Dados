import { Request, Response } from "express";
import { CategoriesDishesRepository } from "../repositories/CategoriesDishesRepository";



class CategoriesDishesController {

    private categoriesDishesRepository: CategoriesDishesRepository

    constructor(repository: CategoriesDishesRepository) {

        this.categoriesDishesRepository = repository;

    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { name } = request.body;

        await this.categoriesDishesRepository.create({
            name,
        });

        return response.status(200).json({});
    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { name } = request.body;
        const { id } = request.params;

        await this.categoriesDishesRepository.update({
            id: Number(id),
            name,
        });

        return response.status(200).json({});
    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const categoriesDishes = await this.categoriesDishesRepository.findAll();

        return response.status(200).json(categoriesDishes);
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const categoryDish = await this.categoriesDishesRepository.show(Number(id));

        return response.status(200).json(categoryDish);
    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.categoriesDishesRepository.delete(Number(id));

        return response.status(200).json({});
    }





}

export { CategoriesDishesController };