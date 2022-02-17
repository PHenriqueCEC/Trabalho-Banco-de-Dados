import { connection } from "@shared/infra/mysql/connection";


connection.query("CREATE TABLE IF NOT EXISTS categories_restaurants (  id int AUTO_INCREMENT,  name varchar(20) NOT NULL,  PRIMARY KEY(id));");


class CategoryRestaurant{

    id: number;

    name: string;

}


export { CategoryRestaurant };