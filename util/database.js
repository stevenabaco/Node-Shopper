const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-shopper',
    password: 'MySQLp@ss'
})

module.exports = pool.promise()