import { connection } from "@shared/infra/mysql/connection";


interface CreateDrinkDTO {
    name: string;
    value: number;
    restaurant_id: number;
}

interface UpdateDrinkDTO {
    id: number;
    name: string;
    value: number;
    restaurant_id: number;
}

class DrinksRepository {


    public async create({ name, restaurant_id, value }: CreateDrinkDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO drinks (name,value,restaurant_id) VALUES ('${name}',${value},${restaurant_id});`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async update({
        id, name, restaurant_id, value,
    }: UpdateDrinkDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE drinks SET name = '${name}', value = ${value}, restaurant_id = ${restaurant_id} WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async show(id: number): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM drinks WHERE id = ${id} LIMIT 1;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async findAll(): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM drinks;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async findByRestaurant(restaurant_id: number): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM drinks WHERE restaurant_id = ${restaurant_id};`, (err, result, fields) => {

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

            connection.query(`DELETE FROM drinks WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export { DrinksRepository };