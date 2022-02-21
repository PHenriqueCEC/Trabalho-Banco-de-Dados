import { Request, Response } from "express";
import { DrinksRepository } from "../repositories/DrinksRepository";



class DrinksRestaurantController {

    private drinksRepository: DrinksRepository;

    constructor(repository: DrinksRepository) {
        this.drinksRepository = repository;
    }



    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const drink = await this.drinksRepository.findByRestaurant(Number(id));


        return response.status(200).json(drink);

    }

}

export { DrinksRestaurantController };