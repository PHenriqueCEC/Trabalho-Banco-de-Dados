import { connection } from "@shared/infra/mysql/connection";


interface CreateOrderDessertDTO {
    order_id: number;
    dessert_id: number;
}

interface UpdateOrderDessertDTO {
    id: number;
    order_id: number;
    dessert_id: number;
}

class OrderDessertsRepository {

    public create({ order_id, dessert_id }: CreateOrderDessertDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO orders_desserts (order_id, dessert_id) VALUES (${order_id},${dessert_id});`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public update({ id, order_id, dessert_id }: UpdateOrderDessertDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE orders_desserts SET order_id = ${order_id}, dessert_id = ${dessert_id} WHERE id = ${id};`, (err, result, fields) => {

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

            connection.query(`SELECT * FROM orders_desserts;`, (err, result, fields) => {

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

            connection.query(`SELECT * FROM orders_desserts WHERE id = ${id};`, (err, result, fields) => {

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

            connection.query(`DELETE FROM orders_desserts WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export { OrderDessertsRepository };