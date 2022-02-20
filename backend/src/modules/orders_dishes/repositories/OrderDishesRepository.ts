import { connection } from "@shared/infra/mysql/connection";


interface CreateOrderDishDTO {
    order_id: number;
    dish_id: number;
}

interface UpdateOrderDishDTO {
    id: number;
    order_id: number;
    dish_id: number;
}

class OrdersDishesRepository {

    public create({ order_id, dish_id }: CreateOrderDishDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO orders_dishes (order_id, dish_id) VALUES (${order_id},${dish_id});`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public update({ id, order_id, dish_id }: UpdateOrderDishDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE orders_dishes SET order_id = ${order_id}, dish_id = ${dish_id} WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAll(): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM orders_dishes;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public show(id: number): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM orders_dishes WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public delete(id: number): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`DELETE FROM orders_dishes WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export { OrdersDishesRepository };