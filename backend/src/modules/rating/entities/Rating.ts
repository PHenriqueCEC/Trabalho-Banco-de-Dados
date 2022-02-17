import { connection } from "@shared/infra/mysql/connection";



connection.query("CREATE TABLE IF NOT EXISTS rating (  id int AUTO_INCREMENT,  grade int NOT NULL,  description varchar(200) NOT NULL,    PRIMARY KEY(id)  );");


class Rating{

    id: number;

    grade: number;

    description: string;

}

export { Rating };