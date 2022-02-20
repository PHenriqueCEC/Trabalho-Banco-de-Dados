import { connection } from "@shared/infra/mysql/connection";
import { Coupon } from "../entities/Coupon";


interface CreateCoupomDTO {
    name: string;
    description: string;
    value: number;
    status: boolean;
}


interface UpdateCoupomDTO {
    id: number;
    restaurant_id: number;
    name: string;
}

class CoupomRepository {

    public async create({ name, description, value, status }: CreateCoupomDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO coupons (name, description, values, status) VALUES 
            ('${name}', '${description}', '${value}', '${status}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    };

    public async update({ id, restaurant_id, name }: UpdateCoupomDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE coupons SET restaurante_id = '${restaurant_id}', 
            name = '${name}' WHERE id = ${id};`, (err, result, field) => {


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

            connection.query(`DELETE FROM coupons WHERE coupons.id = ${id}`, (err, result, field) => {

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

            connection.query(`SELECT * FROM coupons WHERE coupons.id = ${id} LIMIT 1;`, (err, result, field) => {


                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        });

    };

    public async index(): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM coupons`, (err, result) => {

                if (err) {
                    reject(err);
                }
                resolve(result);

            });

        });

    }
}

export { CoupomRepository };