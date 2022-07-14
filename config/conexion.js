var mysql = require("mysql");
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdy&v'

});


conn.connect(
    (err) => {
        if (!err){
            console.log('conectado a la BD http://localhost:3000/');
        } else {
            console.log('error en la conexion',err);
        }
    }
);

module.exports = conn;