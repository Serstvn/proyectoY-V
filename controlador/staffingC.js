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
    crear: function (req, res) {
        res.render('staffing/crear');


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
        staffing.retornarDatosID(conn,req.params.id,function(err,datos){
            console.log(datos[0]);
        res.render('staffing/editar',{staffing:datos[0]});
        });
        
    },
    actualizar: function name(req,res){
        console.log(req.body);
        if(req.body){
            
            staffing.actualizar(conn,req.body, function(err,){
            
            res.redirect('/staffing');
        });
        }
    }

}