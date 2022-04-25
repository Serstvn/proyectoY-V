var conn = require('../config/conexion');
var proyecto = require("../modelo/proyecto");

module.exports = {
    index: function (req, res) {
        proyecto.obtener(conn, function (err, datos) {
            console.log(datos);

                res.render('staffing.ejs', { title: 'Y&V backlog', proyectos: datos});

        });
    }
}