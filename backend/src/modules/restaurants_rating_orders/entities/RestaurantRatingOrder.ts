import { connection } from "@shared/infra/mysql/connection";


connection.query("CREATE TABLE IF NOT EXISTS restaurants_rating_orders (  id int AUTO_INCREMENT,  restaurant_id int NOT NULL,  order_id int NOT NULL,  rating_id int NOT NULL,  PRIMARY KEY(id),  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),  FOREIGN KEY (order_id) REFERENCES orders(id),  FOREIGN KEY (rating_id) REFERENCES rating(id));");


class RestaurantRatingOrder {

    id: number;

    restaurant_id: number;

    order_id: number;

    rating_id: number;

}

export { RestaurantRatingOrder };