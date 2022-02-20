import { Request, Response } from "express";
import { AdressRepository } from "../repositories/AdressRepository";



class AdressController {

    private AdressRepository: AdressRepository;

    constructor(Repository: AdressRepository) {

        this.AdressRepository = Repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { user_id, zip_code, public_place, district, number, complement, city, state } = request.body;
        
        const adress = await this.AdressRepository.create({
            user_id,
            zip_code,
            public_place, 
            district, 
            number, 
            complement, 
            city, 
            state,
        });

        return response.status(201).json(adress);
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const adress = await this.AdressRepository.show(Number(id));

        return response.json(adress);

    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { user_id, zip_code, public_place, district, number,
            complement, city, state  } = request.body;
        const { id } = request.params;

        await this.AdressRepository.update({
            id: Number(id),
            user_id, 
            zip_code, 
            public_place, 
            district, 
            number,
            complement, 
            city, 
            state ,
        });

        return response.status(200).json();
    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const adress = await this.AdressRepository.index();

        return response.json(adress);
    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.AdressRepository.delete(Number(id));

        return response.status(200).json();
    }
}

export { AdressController };