var mysql  = require('mysql');

function createDBConnection() {
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            port: 3008,
            password: 'root',
            database: 'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            port: 3008,
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs_test'
        });
    }
}

module.exports = function() {
    return createDBConnection;
}
