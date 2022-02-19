import { connection } from "@shared/infra/mysql/connection";
import { Restaurant } from "../entities/Restaurant";


interface CreateRestaurantDTO {
    name: string;
    category_restaurant_id: number;
}


interface UpdateRestaurantDTO {
    id: number;
    name: string;
    category_restaurant_id: number;
}

class RestaurantsRepository {

    public async create({ name, category_restaurant_id }: CreateRestaurantDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO restaurants (name, category_restaurant_id) VALUES ('${name}','${category_restaurant_id}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    };

    public async update({ id, name, category_restaurant_id }: UpdateRestaurantDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE restaurants SET name = '${name}', category_restaurant_id = '${category_restaurant_id}' WHERE id = ${id};`, (err, result, field) => {


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

            connection.query(`DELETE FROM restaurants WHERE restaurants.id = ${id}`, (err, result, field) => {

                if (err) {
                    reject(err);
                    throw new Error(err.message);
                }
                resolve(result);
            });
        });


    };

    public async show(id: number): Promise<Restaurant> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM restaurants WHERE restaurants.id = ${id} LIMIT 1;`, (err, result, field) => {


                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        });

    };

    public async findAll(): Promise<Restaurant[]> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM restaurants`, (err, result) => {

                if (err) {
                    reject(err);
                }
                resolve(result);

            });

        });

    }
}

export { RestaurantsRepository };