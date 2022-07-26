
/* variable CONN realiza una conexión a la base de datos ( bdy&v )  */

var mysql = require("mysql");
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdy&v'

});
/* si la conexion es exitosa, la consola responderá  ('conectado a la BD http://localhost:3000/') */

conn.connect(
    (err) => {
        if (!err){
            console.log('conectado a la BD http://localhost:3000/');
            
/* si la conexion es erronea, la consola responderá  ('error en la conexion')('err' muestra el tipo de error) */
        } else {
            console.log('error en la conexion',err);
        }
    }
);

/* se exporta el modulo de conexion como una variable llamada CONN */
module.exports = conn;