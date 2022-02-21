import { connection } from "@shared/infra/mysql/connection";


interface CreateOrderDrinkDTO {
    order_id: number;
    drink_id: number;
}

interface UpdateOrderDrinkDTO {
    id: number;
    order_id: number;
    drink_id: number;
}

class OrdersDrinksRepository {

    public create({ order_id, drink_id }: CreateOrderDrinkDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO orders_drinks (order_id, drink_id) VALUES (${order_id},${drink_id});`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public update({ id, order_id, drink_id }: UpdateOrderDrinkDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE orders_drinks SET order_id = ${order_id}, drink_id = ${drink_id} WHERE id = ${id};`, (err, result, fields) => {

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

            connection.query(`SELECT * FROM orders_drinks;`, (err, result, fields) => {

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

            connection.query(`SELECT * FROM orders_drinks WHERE id = ${id};`, (err, result, fields) => {

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

            connection.query(`DELETE FROM orders_drinks WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export { OrdersDrinksRepository };