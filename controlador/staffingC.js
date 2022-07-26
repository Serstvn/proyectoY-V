/*--- variable de conexion (CONN) ---*/
var conn = require('../config/conexion');
/*--- variable de modelo (STAFFING) ---*/
var staffing = require("../modelo/staffing");
/*--- variable de modelo (EMPLEADO) ---*/
var empleadoSTF = require("../modelo/empleado")
/*--- variables de bodyParser (bodyParser) para recepcion de datos del form ---*/
var bodyParser = require('body-parser');

/*----------------------------------------------*/
/* ---------- modulo de exportacion ----------- */
/*------- CONTROLADOR - StaffingC - MVC --------*/
module.exports = {

    /*----------------------------------------------*/
    /*--- funcion = renderizar index - Staffing ---*/
    index: function (req, res) {
        staffing.obtener(conn, function (err, datos) {
            console.log(datos);
           res.render('staffing/index', {
            title: 'Y&V backlog',
            staffings: datos,
            staffing: datos[0]});
        });
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = renderizar editar - Staffing ---*/
    editar: function (req, res) {
        staffing.retornarDatosIdSTF(conn, req.params.id, function (err, datos) {
            console.log(datos[0]);
            res.render('staffing/editar', { staffing: datos[0] });
        });
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = actualiza el registro de la base de datos ---*/
    actualizar: function name(req, res) {
        console.log(req.body);
        if (req.body) {
            staffing.actualizarSTF(conn, req.body, function (err,) {
                console.log('OK VIEJO TODO SALIO BIEN!!!')
                res.redirect('/staffing');
            });
        }
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = renderizar crear - Staffing ---*/
    
    crearSTF: function (req, res) {
        staffing.obtStaffEmpleado(conn, function (err, empleadoSTF) {
            staffing.obtStaffProyecto(conn, function (err, proyStf) {

                res.render('staffing/crearSTF', { 
                    empleadosSTF: empleadoSTF,
                    proyectosSTF: proyStf });
            });
        });
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = guarda el registro de la base de datos - Staffing ---*/
    registrarSTF: function (req, res) {
        console.log(req.body);
        if (req.body) {

            staffing.insertarSTF(conn, req.body, function (err) {

                res.redirect('/staffing');
            });
        }
    },
    /*----------------------------------------------*/


    /*----------------------------------------------*/
    /*--- funcion = elimina el registro de la base de datos - Staffing ---*/
    eliminar: function (req, res) {
        console.log("recepcion de datos");
        staffing.eliminar(conn, req.params.id, function (err) {
            res.redirect('/staffing');
        });
    },
    //----------------------------------------------------------------//
}
