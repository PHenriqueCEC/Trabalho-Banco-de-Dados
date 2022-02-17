import { connection } from "@shared/infra/mysql/connection";



connection.query("CREATE TABLE IF NOT EXISTS coupons (  id int AUTO_INCREMENT,  restaurant_id int NOT NULL,  name varchar(20) NOT NULL,  description varchar(20) NOT NULL,  value float NOT NULL,  status Boolean NOT NULL,  PRIMARY KEY(id),  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id));");


class Coupon{

    id: number;

    restaurant_id: number;

    name: string;

    description: string;

    value: number;

    status: boolean;

}

export { Coupon };