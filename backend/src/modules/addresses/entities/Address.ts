import { connection } from "@shared/infra/mysql/connection";


connection.query("CREATE TABLE IF NOT EXISTS addresses (  id int AUTO_INCREMENT,  user_id int NOT NULL,  zip_code varchar(10) NOT NULL,  public_place varchar(100) NOT NULL,  district varchar(30) NOT NULL,  number int NOT NULL,  complement varchar(50) NOT NULL,  city varchar(40) NOT NULL,  state varchar(20) NOT NULL,  PRIMARY KEY(id),  FOREIGN KEY (user_id) REFERENCES users(id));");


class Address {

    id: number;

    user_id: number;

    zip_code: string;

    public_place: string;

    district: string;

    number: number;

    complement: string;

    city: string;

    state: string;

}

export { Address };