import { connection } from "@shared/infra/mysql/connection";
import { CategoryRestaurant } from "../entities/CategoryRestaurant";


interface CreateCategoryRestaurantDTO {
    name: string;
}


interface UpdateCategoryRestaurantDTO {
    id: number;
    name: string;
}

class CategoriesRestaurantsRepository {

    public async create({ name }: CreateCategoryRestaurantDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO categories_restaurants (name) VALUES ('${name}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    };

    public async update({ id, name }: UpdateCategoryRestaurantDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE categories_restaurants SET name = '${name}' WHERE id = ${id};`, (err, result, field) => {


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

            connection.query(`DELETE FROM categories_restaurants WHERE categories_restaurants.id = ${id}`, (err, result, field) => {

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

            connection.query(`SELECT * FROM categories_restaurants WHERE categories_restaurants.id = ${id} LIMIT 1;`, (err, result, field) => {


                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        });

    };

    public async index(): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM categories_restaurants`, (err, result) => {

                if (err) {
                    reject(err);
                }
                resolve(result);

            });

        });

    }
}

export { CategoriesRestaurantsRepository };