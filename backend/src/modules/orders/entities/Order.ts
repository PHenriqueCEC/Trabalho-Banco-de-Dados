import { connection } from "@shared/infra/mysql/connection";



connection.query("CREATE TABLE IF NOT EXISTS orders (  id int AUTO_INCREMENT,  restaurant_id int NOT NULL,  academic_id int NOT NULL,  motoboy_id int NOT NULL,  status varchar(20) NOT NULL,  delivery_forecast TIME NOT NULL,  origin varchar(50) NOT NULL,  destiny varchar(100) NOT NULL,  PRIMARY KEY(id),  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),  FOREIGN KEY (academic_id) REFERENCES users(id),  FOREIGN KEY (motoboy_id) REFERENCES users(id));");


class Order{

    id: number;

    restaurant_id: number;

    academic_id: number;

    motoboy_id: number;

    status: string;

    delivery_forecast: Date;

    origin: string;

    desriny: string;

}

export { Order };