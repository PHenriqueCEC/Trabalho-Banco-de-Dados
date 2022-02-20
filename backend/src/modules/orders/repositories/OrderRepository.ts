import { connection } from "@shared/infra/mysql/connection";


interface CreateOrderDTO {
    restaurant_id: number;
    academic_id: number;
    motoboy_id: number;
    status: string;
    delivery_forecast: number;
    origin: string;
    destiny: string;
}

interface UpdateOrderDTO {
    id: number,
    restaurant_id: number;
    academic_id: number;
    motoboy_id: number;
    status: string;
    delivery_forecast: number;
    origin: string;
    destiny: string;
}

class OrderRepository {


    public async create({
        restaurant_id, academic_id, motoboy_id, status,
        delivery_forecast, origin, destiny,
    }: CreateOrderDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO orders (restaurant_id, academic_id, motoboy_id, status,
                delivery_forecast, origin, destiny ) VALUES ('${restaurant_id}',${academic_id},${motoboy_id},
                ${status}, ${delivery_forecast}, ${origin}, ${destiny} );`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async update({
        id, restaurant_id, academic_id, motoboy_id, status,
        delivery_forecast, origin, destiny,
    }: UpdateOrderDTO): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE orders SET restaurante_id = '${restaurant_id}', 
            academic_id = ${academic_id}, motoboy_id = ${motoboy_id},
            status = ${status}, delivery_forecast = ${delivery_forecast},
            origin = ${origin}, destiny = ${destiny} WHERE id = ${id};`, (err, result, fields) => {

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

            connection.query(`SELECT * FROM orders WHERE id = ${id} LIMIT 1;`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result[0]);
                }
            });
        });
    }

    public async findAll(): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM orders;`, (err, result, fields) => {

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

            connection.query(`SELECT * FROM orders WHERE restaurant_id = ${restaurant_id};`, (err, result, fields) => {

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

            connection.query(`DELETE FROM orders WHERE id = ${id};`, (err, result, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export { OrderRepository };