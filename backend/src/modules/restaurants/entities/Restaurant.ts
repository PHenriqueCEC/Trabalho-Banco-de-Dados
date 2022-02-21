import { connection } from "@shared/infra/mysql/connection";


connection.query("CREATE TABLE IF NOT EXISTS restaurants (  id int AUTO_INCREMENT,  name varchar(30) NOT NULL, address varchar(256) NOT NULL, category_restaurant_id int NOT NULL,  PRIMARY KEY(id),  FOREIGN KEY (category_restaurant_id) REFERENCES categories_restaurants(id));");



class Restaurant{

    id: number;

    name: string;

    category_id: string;

    address: string;

}

export { Restaurant };