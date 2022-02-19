import { Request, Response } from "express";
import { RatingRepository } from "../repositories/RatingRepository";



class RatingController {

    private ratingRepository: RatingRepository;

    constructor(Repository: RatingRepository) {

        this.ratingRepository = Repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { grade, description } = request.body;
        
        const rating = await this.ratingRepository.create({
            grade,
            description,
        });

        return response.status(201).json(rating);
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const rating = await this.ratingRepository.show(Number(id));

        return response.json(rating);

    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { description } = request.body;
        const { id } = request.params;

        await this.ratingRepository.update({
            id: Number(id),
            description,
        });

        return response.status(200).json();
    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const rating = await this.ratingRepository.index();

        return response.json(rating);
    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.ratingRepository.delete(Number(id));

        return response.status(200).json();
    }
}

export { RatingController };