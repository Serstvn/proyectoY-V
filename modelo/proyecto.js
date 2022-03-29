module.exports = {


    obtener: function (conn, funcion) {
        conn.query("SELECT * FROM proyectos", funcion);
    },
    insertar: function (conn, datos, funcion) {
        conn.query("INSERT INTO `proyectos` (`codigo`, `ceco_id`, `cliente`, `nomCorto`, `empleados_id`) VALUES (?,?,?,?,?)", [datos.codigo, datos.ceco, datos.cliente, datos.nombreCorto, datos.gerente], funcion);
    },
    eliminar:function(conn,id,funcion){
        conn.query("DELETE FROM proyectos WHERE id=?",[id],funcion);
    },
    editar:function(req,res){

    }
}