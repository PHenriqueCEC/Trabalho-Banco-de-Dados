import { Request, Response } from "express";
import { DishesRepository } from "../repositories/DishesRepository";



class DishesRestaurantController {

    private dishesRepository: DishesRepository;

    constructor(repository: DishesRepository) {

        this.dishesRepository = repository;
    }



    public show = async (request: Request, response: Response):Promise<Response> => {

        const { id } = request.params;

        const dish = await this.dishesRepository.findByRestaurant(Number(id));

        return response.status(200).json(dish);

    }



}

export { DishesRestaurantController };