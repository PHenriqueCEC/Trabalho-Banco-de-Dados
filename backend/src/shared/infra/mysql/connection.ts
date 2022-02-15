import knex from "knex"


const connection = knex({
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3306,
        user: "",
        password: "",
        database: "ifoodru"
    }
})


export { connection }