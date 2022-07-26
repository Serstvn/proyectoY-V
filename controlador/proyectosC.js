/*--- variables de conexion (CONN) + modelo (PROYECTO) ---*/
var conn = require('../config/conexion');
var proyecto = require("../modelo/proyecto");
var bodyParser = require('body-parser')


/*----------------------------------------------*/
/* ---------- modulo de exportacion ----------- */
/*------- CONTROLADOR - proyectosC - MVC -------*/
module.exports = {

    
    /*----------------------------------------------*/
    /*--- funcion = renderizar index - Proyectos ---*/
    index: function (req, res) {
        proyecto.obtener(conn, function (err, datos) {
            console.log(datos);
            res.render('proyectos/index', { proyectos: datos });
        });
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = renderizar crear - Proyectos ---*/
    crear: function (req, res) {
        proyecto.traerCecos(conn, function (err, cecos) {
            proyecto.traerGerentes(conn, function (err, gerentes) {
                console.log(cecos, gerentes);
                res.render('proyectos/crear', { ceco: cecos, gerente: gerentes })
            });
        });
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = guarda el registro en la base de datos - Proyectos ---*/
    guardar: function (req, res) {
        console.log(req.body);

        proyecto.insertar(conn, req.body, function (err) {
            res.redirect('/proyectos');

        });
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = elimina el registro de la base de datos - Proyectos ---*/
    eliminar: function (req, res) {
        console.log("recepcion de datos");
        proyecto.eliminar(conn, req.params.id, function (err) {
            res.redirect('/proyectos');
        });
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = renderizar editar - Proyectos ---*/
    editar: function (req, res) {
        proyecto.traerCecos(conn, function (err, cecos) {
            proyecto.traerGerentes(conn, function (err, gerentes) {
                proyecto.retornarDatosID(conn, req.params.id, function (err, datos) {
                    console.log(datos[0], cecos, gerentes);

                    res.render('proyectos/editar', {
                        proyecto: datos[0],
                        ceco: cecos,
                        gerente: gerentes });
                });
            });

        });
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = actualiza el registro de la base de datos ---*/
    actualizar: function (req, res) {
        console.log(req.body);
        if (req.body) {

            proyecto.actualizar(conn, req.body, function (err) { });
            res.redirect('/proyectos');
        }
    }
    /*----------------------------------------------*/

}