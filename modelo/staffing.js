module.exports = {


    obtener: function (conn, funcion) {
        conn.query("SELECT `id`,`depto_id`,`cargo_id`,  `codigo`, `ceco_id`, `cliente`, `nomCorto`, `empleados_id`, `fecha_id` FROM proyectos", funcion);
    },
    insertar: function (conn, datos, funcion) {
        conn.query("INSERT INTO `proyectos` (`codigo`, `ceco_id`, `cliente`, `nomCorto`, `empleados_id`) VALUES (?,?,?,?,?)", [datos.codigo, datos.ceco, datos.cliente, datos.nombreCorto, datos.gerente], funcion);
    },
    eliminar:function(conn,id,funcion){
        conn.query("DELETE FROM proyectos WHERE id=?",[id],funcion);
    
    },
    retornarDatosID: function (conn,id,funcion) {
        conn.query("SELECT * FROM proyectos WHERE id=?",[id], funcion);
    },
    actualizar:function(conn, datos,id, funcion) {
        conn.query("UPDATE proyectos SET codigo=?, ceco_id=?, cliente=?, nomCorto=?, empleados_id=? WHERE proyectos.id=?",[datos.codigo, datos.ceco, datos.cliente, datos.nombreCorto, datos.gerente],[id],funcion);
     }
}