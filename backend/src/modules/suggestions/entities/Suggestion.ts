import { connection } from "@shared/infra/mysql/connection";



connection.query("CREATE TABLE IF NOT EXISTS suggestions (  id int AUTO_INCREMENT,  user_id int NOT NULL,  description varchar(256) NOT NULL,  PRIMARY KEY(id),  FOREIGN KEY (user_id) REFERENCES users(id));");



class Suggestion{

    id: number;

    user_id: number;

    description: string;
}

export { Suggestion };