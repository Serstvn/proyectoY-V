var conn = require('../config/conexion');
var proyecto = require("../modelo/proyecto");
var bodyParser = require('body-parser')

module.exports = {
    index: function (req, res) {
        proyecto.obtener(conn, function (err, datos) {
            console.log(datos);
            res.render('proyectos/index', { proyectos: datos });
        });
    },
    crear: function (req, res) {
        res.render('proyectos/crear');


    },
    guardar: function (req, res) {
        console.log(req.body);

        proyecto.insertar(conn, req.body, function (err) {
            res.redirect('/proyectos');

        });

    },
    eliminar: function (req, res) {
        console.log("recepcion de datos");
        proyecto.eliminar(conn, req.params.id, function (err) {
            res.redirect('/proyectos');
        });
    },
    editar: function (req, res) {
        proyecto.retornarDatosID(conn, req.params.id, function (err, datos) {
            console.log(datos[0]);
            res.render('proyectos/editar', { proyecto: datos[0] });
        });

    },
    actualizar: function (req, res) {
        console.log(req.body);
        if (req.body) {

            proyecto.actualizar(conn, req.body, function (err) {
            });
             res.redirect('/proyectos');
        }
               
    }

}