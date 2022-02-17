import { connection } from "@shared/infra/mysql/connection";


connection.query("CREATE TABLE IF NOT EXISTS users_resturant(  id int AUTO_INCREMENT,  user_id int NOT NULL,  restaurant_id int NOT NULL,  PRIMARY KEY (id),  FOREIGN KEY (user_id) REFERENCES users(id),  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id));");


class UserRestaurant{

    id: number;

    user_id: number;

    restaurant_id: number;

}

export { UserRestaurant };