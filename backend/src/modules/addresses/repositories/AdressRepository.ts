import { connection } from "@shared/infra/mysql/connection";
import { Address } from "../entities/Address";


interface CreateAdressDTO {
    user_id: number;
    zip_code: string;
    public_place: string;
    district: string;
    number: number;
    complement: string;
    city: string;
    state: string;
}


interface UpdateAdressDTO {
    id: number;
    user_id: number
    zip_code: string;
    public_place: string;
    district: string;
    number: number;
    complement: string;
    city: string;
    state: string;
}

class AdressRepository {

    public async create({ user_id, zip_code, public_place, district, number, complement, city, state }: CreateAdressDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO adresses (user_id, zip_code, public_place, district,
            number, complement, city, state) VALUES ('${user_id}', '${zip_code}', '${public_place}'
            '${district}','${number}', '${complement}', '${city}', '${state}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    };

    public async update({ id, user_id, zip_code, public_place, district, number,
        complement, city, state }: UpdateAdressDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE adresses SET user_id = '${user_id}', zip_code = '${zip_code}'
            public_place = '${public_place}, district = '${district}', number = '${number}'
            complement = '${complement}', city = '${city}', state = '${state}' WHERE id = ${id};`, (err, result, field) => {


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

            connection.query(`DELETE FROM adresses WHERE adresses.id = ${id}`, (err, result, field) => {

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

            connection.query(`SELECT * FROM adresses WHERE adresses.id = ${id} LIMIT 1;`, (err, result, field) => {


                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        });

    };

    public async index(): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM adresses`, (err, result) => {

                if (err) {
                    reject(err);
                }
                resolve(result);

            });

        });

    }
}

export { AdressRepository };