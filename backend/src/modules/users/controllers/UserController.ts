import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";



class UserController {

    private UserRepository: UserRepository;

    constructor(Repository: UserRepository) {

        this.UserRepository = Repository;
    }

    public create = async (request: Request, response: Response): Promise<Response> => {

        const { name, type, email, license_plate, driver_license, password } = request.body;

        
        const User = await this.UserRepository.create({
            name,
            type,
            email,
            license_plate,
            driver_license,
            password,
        });

        return response.status(201).json(User);
    }

    public show = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        const User = await this.UserRepository.show(Number(id));

        return response.json(User);

    }

    public update = async (request: Request, response: Response): Promise<Response> => {

        const { password } = request.body;
        const { id } = request.params;

        await this.UserRepository.update({
            id: Number(id),
            password,
        });

        return response.status(200).json();
    }

    public index = async (request: Request, response: Response): Promise<Response> => {

        const User = await this.UserRepository.index();

        return response.json(User);
    }

    public delete = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        await this.UserRepository.delete(Number(id));

        return response.status(200).json();
    }
}

export { UserController };