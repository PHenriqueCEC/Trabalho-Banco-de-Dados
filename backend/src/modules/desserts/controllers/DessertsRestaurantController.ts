import { Request, Response } from "express";
import { DessertsRepository } from "../repositories/DessertsRepository";



class DessertsRestaurantController {

    private dessertsRepository: DessertsRepository;

    constructor(repository: DessertsRepository) {

        this.dessertsRepository = repository;

    }



    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const dessert = await this.dessertsRepository.findByRestaurant(Number(id));

        return response.status(200).json(dessert);
    }

}

export { DessertsRestaurantController };