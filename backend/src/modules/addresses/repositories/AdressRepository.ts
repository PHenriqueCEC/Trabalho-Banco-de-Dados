import { connection } from "@shared/infra/mysql/connection";
import { Address } from "../entities/Address";


interface CreateAdressDTO {
    userId: number;
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
    complement: string;
}

class AdressRepository {

    public async create({ userId, zip_code, public_place, district, number, complement, city, state }: CreateAdressDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO adresses (userId) (zip_code) (public_place) (district)
            (number) (complement) (city) (state) VALUES ('${userId}')('${zip_code}')('${public_place}')
            ('${district}')('${number}')('${complement}')('${city}')('${state}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    };

    public async update({ id, complement }: UpdateAdressDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE adresses SET complement = '${complement}' WHERE id = ${id};`, (err, result, field) => {


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