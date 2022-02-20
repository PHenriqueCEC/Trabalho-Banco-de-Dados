import { connection } from "@shared/infra/mysql/connection";
import { Dessert } from "../entities/Dessert";

interface CreateDessertDTO {
    name: string;
    value: number;
    restaurant_id: number;
}

interface UpdateDessertDTO {
    id: number;
    name: string;
    value: number;
    restaurant_id: number;
}
class DessertsRepository {

    public async create({ name, value, restaurant_id }: CreateDessertDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO desserts (name,value, restaurant_id) VALUES ('${name}',${value},${restaurant_id});`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async update({
        id, name, value, restaurant_id,
    }: UpdateDessertDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE desserts SET name = '${name}', value = ${value}, restaurant_id = ${restaurant_id} WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async delete(id: number): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`DELETE FROM desserts WHERE id = ${id} LIMIT 1;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async show(id: number): Promise<Dessert> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM desserts WHERE id = ${id} LIMIT 1;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result[0]);
                }
            });
        });
    }

    public async findAll(): Promise<Dessert[]> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM desserts;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async findByRestaurant(restaurant_id: number): Promise<Dessert[]> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM desserts WHERE restaurant_id = ${restaurant_id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export { DessertsRepository };