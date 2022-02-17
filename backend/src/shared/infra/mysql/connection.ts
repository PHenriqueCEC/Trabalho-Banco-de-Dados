import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'database',
    port: 3306,
    user: 'root',
    password: 'docker',
    database: 'ifoodru',
});


connection.connect((err) => {
    if (err) throw err;

    console.log("Connected!");

});

export { connection };
