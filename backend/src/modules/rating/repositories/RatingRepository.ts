import { connection } from "@shared/infra/mysql/connection";
import { Rating } from "../entities/Rating";


interface CreateRatingDTO {
    grade: number;
    description: string;
}


interface UpdateRatingDTO {
    id: number;
    grade: number;
    description: string;
}

class RatingRepository {

    public async create({ grade, description }: CreateRatingDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO rating(grade, description) VALUES ('${grade}', '${description}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    };

    public async update({ id, grade, description }: UpdateRatingDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE rating SET grade = '${grade}', 
            description = '${description} WHERE id = ${id};`, (err, result, field) => {


                if (err) {
                    reject(err);
                    throw new Error(err.message);
                }
                resolve(result);
            });

        });


    }

    public async delete(id: number): Promise<void> {

        return new Promise((resolve, reject) => {

            connection.query(`DELETE FROM rating WHERE rating.id = ${id}`, (err, result, field) => {

                if (err) {
                    reject(err);
                    throw new Error(err.message);
                }
                resolve(result);
            });
        });


    };

    public async show(id: number): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM rating WHERE rating.id = ${id} LIMIT 1;`, (err, result, field) => {


                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        });

    };

    public async index(): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM rating`, (err, result) => {

                if (err) {
                    reject(err);
                }
                resolve(result);

            });

        });

    }
}

export { RatingRepository };