module.exports = {


    obtener: function (conn, funcion) {
        conn.query("SELECT p.id,codigo, cliente, nomCorto, e.nombre, c.ceco FROM proyectos as p INNER JOIN empleados as e on p.empleados_id=e.id INNER JOIN cecos as c on p.ceco_id=c.id order by id", funcion);
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
    actualizar:function(conn,datos,id,funcion) {
        conn.query("UPDATE `proyectos` SET codigo = ?, ceco_id = ?, cliente = ?, nomCorto = ?,empleados_id = ? WHERE id = ?", [datos.codigo, datos.ceco, datos.cliente, datos.nombreCorto, datos.gerente,datos.id],funcion);
     }
}