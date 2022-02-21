import { Request, Response } from "express";
import { RestaurantsRepository } from "../repositories/RestaurantsRepository";

class RestaurantsController{

    private restaurantsRepository: RestaurantsRepository;

    constructor(Repository: RestaurantsRepository) {

        this.restaurantsRepository = Repository;
    }

    public create = async (request: Request, response: Response):Promise<Response> => {

        const { name, category_restaurant_id, address } = request.body;

        await this.restaurantsRepository.create({
            name,
            category_restaurant_id,
            address,
        });

        return response.status(200).json({});
    }

    public update = async (request: Request, response: Response):Promise<Response> => {

        const { id } = request.params;
        const { name, category_restaurant_id, address } = request.body;

        await this.restaurantsRepository.update({
            id: Number(id),
            name,
            category_restaurant_id,
            address,
        });

        return response.status(200).json();
    }

    public show= async (request: Request, response: Response):Promise<Response> => {

        const { id } = request.params;

        const restaurant = await this.restaurantsRepository.show(Number(id));
    
        return response.status(200).json(restaurant);
    }

    public index = async (request: Request, response: Response):Promise<Response> => {

        const restaurants = await this.restaurantsRepository.findAll();
    
        return response.status(200).json(restaurants);
        
    }

    public delete = async (request: Request, response: Response):Promise<Response> => {

        const { id } = request.params;

        await this.restaurantsRepository.delete(Number(id));
    
        return response.status(200).json({});
    }
}

export { RestaurantsController };