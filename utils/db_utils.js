const mysql = require('mysql2');

module.exports.dbConn = mysql.createConnection({
    "host": "127.0.0.1",
    "user": "school",
    "password": "school",
    "database": "school_db"
})