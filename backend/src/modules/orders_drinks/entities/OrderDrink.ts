import { connection } from "@shared/infra/mysql/connection";



connection.query("CREATE TABLE IF NOT EXISTS orders_drinks(    id int AUTO_INCREMENT,    order_id int NOT NULL,    drink_id int NOT NULL,    PRIMARY KEY(id),    FOREIGN KEY (order_id) REFERENCES orders(id),    FOREIGN KEY (drink_id) REFERENCES drinks(id));");


class OrderDrink{

    id: number;

    order_id: number;

    drink_id: number;

}

export { OrderDrink };