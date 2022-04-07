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
        res.render('empleados/crear');


    },
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
        empleado.retornarDatosID(conn, req.params.id, function (err, datos) {
            console.log(datos[0]);
            res.render('empleados/editar', { empleado: datos[0] });
        });


    },
    actualizar:function(req,res){

        empleado.actualizar(conn,req.body,function(err){
        console.log(req.body);
        });
    }
}