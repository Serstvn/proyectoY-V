module.exports = {


    obtener: function (conn, funcion) {
        conn.query("SELECT `id`,`id_empleado`,`id_proyecto`,`id_fecha` ,`valor` FROM staffing", funcion);
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
        conn.query("UPDATE proyectos SET codigo=?, ceco_id=?, cliente=?, nomCorto=?, empleados_id=? WHERE proyectos.id=?",[datos.codigo, datos.ceco, datos.cliente, datos.nombreCorto, datos.gerente, datos.proyectos_id],funcion);
    },
    
    crearstaff: function (conn, funcion) {
        conn.query("SELECT `id`, `codigo`, `nomCorto`, `cliente`, `ceco_id`, `fecha_id` FROM `proyectos` WHERE depto_id IS NULL AND cargo_id IS NULL", funcion);
    },
}