var conn = require('../config/conexion');
var staffing = require("../modelo/staffing");
var bodyParser = require('body-parser')

module.exports = {
    index: function (req, res) {
        staffing.obtener(conn, function (err, datos) {
            console.log(datos);
            res.render('staffing/index', { title: 'Y&V backlog', staffings: datos });
        });
    },
    guardar: function (req, res) {
        console.log(req.body);

        staffing.insertar(conn, req.body, function (err) {
            res.redirect('/staffing');

        });

    },
    eliminar: function (req, res) {
        console.log("recepcion de datos");
        staffing.eliminar(conn, req.params.id, function (err) {
            res.redirect('/staffing');
        });
    },
    editar: function (req, res) {
        staffing.retornarDatosID(conn, req.params.id, function (err, datos) {
            console.log(datos[0]);
            res.render('staffing/editar', { staffing: datos[0] });
        });

    },
    actualizar: function name(req, res) {
        console.log(req.body);
        if (req.body) {

            staffing.actualizar(conn, req.body, function (err,) {

                res.redirect('/staffing');
            });
        }

    },
    verEmpleados: function (req, res) {
        staffing.crearstaff(conn, function (err, datos) {
            console.log(datos);
            res.render('staffing/crearSTF', { title: 'Y&V backlog' });
        });
    },

    editarSTF: function (req, res) {
        staffing.retornarDatosID(conn, req.params.id, function (err, datos) {
            console.log(datos[0]);
            res.render('staffing/crearSTF');
        });
    },

    verEmpleadoStaff: function (req, res) {
        staffing.obtStaffEmpleado(conn, function (err, datos) {
            console.log(datos);
            res.render('staffing/crearSTF');
            // res.render('staffing/crearSTF', {empleadosStaff: datos});
        });
    },
    verProyectoStaff: function (req, res) {
        staffing.obtStaffProyecto(conn, function (err, datos) {
            console.log(datos);
         res.render('staffing/crearSTF');
        });
    },
}