import { Request, Response } from "express";
import { CoupomRepository } from "../repositories/CoupomRepository";



class CoupomController {

    private coupomRepository: CoupomRepository;

    constructor(Repository: CoupomRepository) {

        this.coupomRepository = Repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { name, description, value, status } = request.body;
        
        const coupomRestaurant = await this.coupomRepository.create({
            name,
            description, 
            value, 
            status
        });

        return response.status(201).json(coupomRestaurant);
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const coupom = await this.coupomRepository.show(Number(id));

        return response.json(coupom);

    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { name } = request.body;
        const { id } = request.params;

        await this.coupomRepository.update({
            id: Number(id),
            name,
        });

        return response.status(200).json();
    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const coupom = await this.coupomRepository.index();

        return response.json(coupom);
    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.coupomRepository.delete(Number(id));

        return response.status(200).json();
    }
}

export { CoupomController };