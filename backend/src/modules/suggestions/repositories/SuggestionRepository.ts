import { connection } from "@shared/infra/mysql/connection";
import { Suggestion } from "../entities/Suggestion";


interface CreateSuggestionDTO {
    description: string;
}


interface UpdateSuggestionDTO {
    id: number;
    description: string
}

class SuggestionRepository {

    public async create({ description }: CreateSuggestionDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`INSERT INTO suggestions (description) VALUES ('${description}');`, (err, result, field) => {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    };

    public async update({ id, description }: UpdateSuggestionDTO): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`UPDATE suggestions SET description = '${description}' WHERE id = ${id};`, (err, result, field) => {


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

            connection.query(`DELETE FROM suggestions WHERE suggestions.id = ${id}`, (err, result, field) => {

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

            connection.query(`SELECT * FROM suggestions WHERE suggestions.id = ${id} LIMIT 1;`, (err, result, field) => {


                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        });

    };

    public async index(): Promise<any> {

        return new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM suggestions`, (err, result) => {

                if (err) {
                    reject(err);
                }
                resolve(result);

            });

        });

    }
}

export { SuggestionRepository };