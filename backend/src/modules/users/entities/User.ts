import { connection } from "@shared/infra/mysql/connection";


connection.query("CREATE TABLE IF NOT EXISTS users (  id int AUTO_INCREMENT,  name varchar(100) NOT NULL,  type int NOT NULL,  email varchar(200) UNIQUE NOT NULL,  license_plate varchar(10),  driver_license varchar(10),  password varchar(256) NOT NULL,  PRIMARY KEY (id));");


class User{

    id: number;

    name: string;

    type: number;

    email: string;

    license_plate: string;

    driver_license: string;

    password: string;
    
}