import { connection } from "@shared/infra/mysql/connection";



connection.query("CREATE TABLE IF NOT EXISTS dishes (  id int AUTO_INCREMENT,  restaurant_id int NOT NULL,  category_dishes_id int NOT NULL,  name varchar(20) NOT NULL,  value float NOT NULL,  ingredients varchar(100) NOT NULL,  description varchar(100) NOT NULL,  PRIMARY KEY(id),  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),  FOREIGN KEY (category_dishes_id) REFERENCES categories_dishes(id));");



class Dish{
    id: number;

    restaurant_id: number;

    name: string;

    value: number;

    ingredients: string;

    category_dishes_id: number;

    description: string;

}

export { Dish };