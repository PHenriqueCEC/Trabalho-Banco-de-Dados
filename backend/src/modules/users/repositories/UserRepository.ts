import { connection } from "@shared/infra/mysql/connection";
import { User } from "../entities/User";


interface CreateUserDTO {
    name: string;
    type: number;
    email: string,
    license_plate: string;
    driver_license: string;
    password: string;
}


interface UpdateUserDTO {
    id: number;
    name: string;
    type: number;
    email: string,
    license_plate: string;
    driver_license: string;
    password: string;

}

class UserRepository {

    public async create({
        name, type, email, license_plate, driver_license, password,
    }: CreateUserDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO users (name, type, email, license_plate, driver_license, 
                password)  VALUES ('${name}', '${type}', '${email}', 
            '${license_plate}', '${driver_license}', '${password}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    };

    public async update({
        id, password, driver_license, email, license_plate, name, type,
    }: UpdateUserDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE users SET password = '${password}', name = '${name}', driver_license = '${driver_license}', email = '${email}', license_plate = '${license_plate}', type = ${type} WHERE id = ${id};`, (err, result, field) => {


                if (err) {
                    reject(err);
                    throw new Error(err.message);
                }
                resolve(result);
            });

        });


    }

    public async delete(id: number): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`DELETE FROM users WHERE users.id = ${id}`, (err, result, field) => {

                if (err) {
                    reject(err);
                    throw new Error(err.message);
                }
                resolve(result);
            });
        });


    };

    public async show(id: number): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM users WHERE users.id = ${id} LIMIT 1;`, (err, result, field) => {


                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        });

    };

    public async index(): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM users`, (err, result) => {

                if (err) {
                    reject(err);
                }
                resolve(result);

            });

        });

    }
}

export { UserRepository };