var conn = require('../config/conexion');
var staffing = require("../modelo/staffing");
var empleadoSTF = require("../modelo/empleado")
var bodyParser = require('body-parser');

module.exports = {
    index: function (req, res) {
        staffing.obtener(conn, function (err, datos) {
            console.log(datos);
           res.render('staffing/index', { title: 'Y&V backlog', staffings: datos, staffing: datos[0]});
        });
    },

    editar: function (req, res) {
        staffing.retornarDatosIdSTF(conn, req.params.id, function (err, datos) {
            console.log(datos[0]);
            res.render('staffing/editar', { staffing: datos[0] });
        });
    },
  /*      */
    //----------------------------------------------------------------//
    //RUTAS CREAR STAFFING Y TRAER EMPLEADOS Y PROYECTOS A LOS SELECT//

    
    crearSTF: function (req, res) {
        staffing.obtStaffEmpleado(conn, function (err, empleadoSTF) {
            staffing.obtStaffProyecto(conn, function (err, proyStf) {
                //console.log(empleadoSTF,proyStf);
                res.render('staffing/crearSTF', { empleadosSTF: empleadoSTF, proyectosSTF: proyStf });
            });
        });
    },
    //VSTA CREAR STFF + INGRESAR REGISTRO EN BASE DE DATOS//
    registrarSTF: function (req, res) {
        console.log(req.body);
        if (req.body) {

            staffing.insertarSTF(conn, req.body, function (err) {

                res.redirect('/staffing');
            });
        }
    },
    eliminar: function (req, res) {
        console.log("recepcion de datos");
        staffing.eliminar(conn, req.params.id, function (err) {
            res.redirect('/staffing');
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
    editarSTF: function (req, res) {
        empleadoSTF.obtener(conn, function (err, datos) {
            console.log(datos)
        });
        //res.render('staffing/crearSTF');

    },

    verEmpleados: function (req, res) {
        staffing.crearstaff(conn, function (err, datos) {
            console.log(datos);
            res.render('staffing/crearSTF', { title: 'Y&V backlog' });
        });

    },



    //----------------------------------------------------------------//
    //RETORNAR DATOS PARA LLENAR LOS FORMULARIOS DEPUES DE HABER SELECCIONADO EL EMPLEADO//
    retornarEmpleado: function (req, res) {
        res.send(req.body);
        console.log('pues se supone que aqui va la info del select');
    },




    //----------------------------------------------------------------//
}
