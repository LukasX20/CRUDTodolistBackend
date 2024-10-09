const mysql2 = require('mysql2/promise');


const executar = async (sql) => {
    let connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',  
        password: '1234',
        database: 'todolist',
        port: 3307
    })

    let[results] = await connection.query(sql);

    return results;
}

module.exports = { executar };