import { connection } from "@shared/infra/mysql/connection";


connection.query("CREATE TABLE IF NOT EXISTS orders_desserts(    id int AUTO_INCREMENT,    order_id int NOT NULL,    dessert_id int NOT NULL,    PRIMARY KEY(id),    FOREIGN KEY (order_id) REFERENCES orders(id),    FOREIGN KEY (dessert_id) REFERENCES desserts(id));");


class OrderDessert{

    id: number;

    order_id: number;

    dessert_id: number;

}

export { OrderDessert };