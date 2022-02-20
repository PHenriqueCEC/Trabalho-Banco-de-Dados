import { connection } from "@shared/infra/mysql/connection";
import { CategoryDish } from "../entities/CategoryDish";

interface CreateCategoryDishDTO {
    name: string;
}

interface UpdateCategoryDishDTO {
    id: number;
    name: string;
}


class CategoriesDishesRepository {

    public async create({ name }: CreateCategoryDishDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO categories_dishes (name) VALUES ('${name}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async update({ id, name }: UpdateCategoryDishDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE categories_dishes SET name = '${name}' WHERE id = ${id};`, (err, result, field) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async show(id: number): Promise<CategoryDish> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM categories_dishes WHERE id = ${id} LIMIT 1;`, (err, result, field) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result[0]);
                }
            });
        });
    }

    public async findAll(): Promise<CategoryDish[]> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM categories_dishes;`, (err, result, field) => {

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

            connection.query(`DELETE FROM categories_dishes WHERE id = ${id};`, (err, result, field) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export { CategoriesDishesRepository };