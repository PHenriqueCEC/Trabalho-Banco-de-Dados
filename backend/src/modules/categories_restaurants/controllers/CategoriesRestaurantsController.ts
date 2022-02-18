import { Request, Response } from "express";
import { CategoriesRestaurantsRepository } from "../repositories/CategoriesRestaurantsRepository";



class CategoriesRestaurantsController {

    private categoriesRestaurantsRepository: CategoriesRestaurantsRepository;

    constructor(Repository: CategoriesRestaurantsRepository) {

        this.categoriesRestaurantsRepository = Repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { name } = request.body;
        
        const categoryRestaurant = await this.categoriesRestaurantsRepository.create({
            name,
        });

        return response.status(201).json(categoryRestaurant);
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const categoriesRestaurants = await this.categoriesRestaurantsRepository.show(Number(id));

        return response.json(categoriesRestaurants);

    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { name } = request.body;
        const { id } = request.params;

        await this.categoriesRestaurantsRepository.update({
            id: Number(id),
            name,
        });

        return response.status(200).json();
    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const categoriesRestaurants = await this.categoriesRestaurantsRepository.index();

        return response.json(categoriesRestaurants);
    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.categoriesRestaurantsRepository.delete(Number(id));

        return response.status(200).json();
    }
}

export { CategoriesRestaurantsController };