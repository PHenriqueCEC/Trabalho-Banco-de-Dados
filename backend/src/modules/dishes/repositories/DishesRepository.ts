import { connection } from "@shared/infra/mysql/connection";
import { Dish } from "../entities/Dish";


interface CreateDishDTO {
    name: string;
    restaurant_id: number;
    category_dishes_id: number;
    value: number;
    ingredients: string;
    description: string;
}

interface UpdatedishDTO {
    id: number;
    name: string;
    restaurant_id: number;
    category_dishes_id: number;
    value: number;
    ingredients: string;
    description: string;
}


class DishesRepository {

    public async create({
        name, restaurant_id, category_dishes_id, value, ingredients, description,
    }: CreateDishDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO dishes (name,value,ingredients,description,restaurant_id,category_dishes_id) VALUES ('${name}', ${value},'${ingredients}', '${description}', ${restaurant_id},${category_dishes_id});`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async update({
        id, name, restaurant_id, category_dishes_id, value, ingredients, description,
    }: UpdatedishDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE dishes SET name = '${name}', ingredients = '${ingredients}', description = '${description}', value = ${value}, restaurant_id = ${restaurant_id}, category_dishes_id = ${category_dishes_id} WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async findAll(): Promise<Dish[]> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM dishes;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async findByRestaurant(restaurant_id: number): Promise<Dish[]> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM dishes WHERE restaurant_id = ${restaurant_id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async delete(id: number): Promise<Dish> {

        return new Promise((resolve, reject) => {

            connection.query(`DELETE FROM dishes WHERE id = ${id} LIMIT 1;`, (err, result, fields) => {

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

            connection.query(`SELECT * FROM dishes WHERE id = ${id} LIMIT 1;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result[0]);
                }
            });
        });
    }
}

export { DishesRepository };