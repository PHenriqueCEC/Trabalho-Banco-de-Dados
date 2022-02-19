import { Request, Response } from "express";
import { SuggestionRepository } from "../repositories/SuggestionRepository";



class SuggestionController {

    private suggestionRepository: SuggestionRepository;

    constructor(Repository: SuggestionRepository) {

        this.suggestionRepository = Repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { description } = request.body;
        
        const suggestion = await this.suggestionRepository.create({
            description,
        });

        return response.status(201).json(suggestion);
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const suggestion = await this.suggestionRepository.show(Number(id));

        return response.json(suggestion);

    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { description } = request.body;
        const { id } = request.params;

        await this.suggestionRepository.update({
            id: Number(id),
            description,
        });

        return response.status(200).json();
    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const suggestion = await this.suggestionRepository.index();

        return response.json(suggestion);
    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.suggestionRepository.delete(Number(id));

        return response.status(200).json();
    }
}

export { SuggestionController };