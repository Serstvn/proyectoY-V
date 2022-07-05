var conn = require('../config/conexion');
var empleado = require("../modelo/empleado");

module.exports = {
    index: function (req, res) {
        empleado.obtener(conn, function (err, datos) {
            console.log(datos);
            res.render('empleados/index', { title: 'Y&V backlog', empleados: datos });
        });
    },
    crear: function (req, res) {
        empleado.traerDocumentos(conn, function (err, documentos) {
            empleado.traerCargos(conn, function (err, cargos) {
                empleado.traerGerencias(conn, function (err, gerencias) {
                    empleado.traerDeptos(conn, function (err, departamentos) {
                        console.log(documentos, cargos, gerencias, departamentos);
                        res.render('empleados/crear', { documentos: documentos, cargos: cargos, gerencias: gerencias, departamentos: departamentos, });
                    });
                });
            });
        });
    },
    //,gerencias:datos,departamentos:datos,cargos:datos

    //res.render('empleados/crear',{documentos:datos,gerencias:datos,departamentos:datos,cargos:datos});

    guardar: function (req, res) {
        console.log(req.body);

        empleado.insertar(conn, req.body, function (err) {
            res.redirect('/empleados');
        });

    },
    eliminar: function (req, res) {
        console.log("recepcion de datos");
        empleado.eliminar(conn, req.params.id, function (err) {
            res.redirect('/empleados');
        });
    },
    editar: function (req, res) {
        empleado.traerDocumentos(conn, function (err, documentos) {
            empleado.traerCargos(conn, function (err, cargos) {
                empleado.traerGerencias(conn, function (err, gerencias) {
                    empleado.traerDeptos(conn, function (err, departamentos) {
                        empleado.retornarDatosID(conn, req.params.id, function (err, datosEmpleado) {
                            console.log(documentos, cargos, gerencias, departamentos);
                            res.render('empleados/editar', { empleado: datosEmpleado[0], documentos: documentos, cargos: cargos, gerencias: gerencias, departamentos: departamentos });
                            console.log(datosEmpleado[0]);
                        });
                    });
                });
            });
        });


    },
    actualizar: function (req, res) {
        console.log(req.body);
        if (req.body) {
            empleado.actualizar(conn, req.body, function (err) {
            });
            res.redirect('/empleados');
        }
    },





}