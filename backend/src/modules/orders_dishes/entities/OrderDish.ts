import { connection } from "@shared/infra/mysql/connection";


connection.query("CREATE TABLE IF NOT EXISTS orders_dishes(    id int AUTO_INCREMENT,    order_id int NOT NULL,    dish_id int NOT NULL,    PRIMARY KEY(id),    FOREIGN KEY (order_id) REFERENCES orders(id),    FOREIGN KEY (dish_id) REFERENCES dishes(id));");


class OrderDish{

    id: number;

    order_id: number;

    dish_id: number;

}

export { OrderDish };