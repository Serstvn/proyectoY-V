var mysql = require("mysql");
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});


conn.connect(
    (err) => {
        if (!err){
            console.log('conectado a la BD');
        } else {
            console.log('error en la conexion',err);
        }
    }
);

module.exports = conn;