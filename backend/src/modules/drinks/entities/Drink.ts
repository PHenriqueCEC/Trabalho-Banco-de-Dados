import { connection } from "@shared/infra/mysql/connection";



connection.query("CREATE TABLE IF NOT EXISTS drinks (  id int AUTO_INCREMENT,  restaurant_id int NOT NULL,  name varchar(20) NOT NULL,  value float NOT NULL,  PRIMARY KEY(id),  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id));");


class Drink{

    id: number;

    restaurant_id: number;

    name: string;

    value: number;

}

export { Drink };