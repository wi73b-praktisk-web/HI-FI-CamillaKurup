const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': '127.0.0.1',
            'user': 'root',
            'database': 'Hi-Fi',
            'port': '3306'
        });
    }
};