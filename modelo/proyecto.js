module.exports={
    obtener:function(conn,funcion){
        conn.query("SELECT * FROM proyectos",funcion);
    },
    insertar:function(conn,datos,funcion){
        conn.query("INSERT INTO `proyectos` (`codigo`, `ceco_id`, `cliente`, `nomCorto`, `empleados_id`) VALUES (?,?,?,?,?)",[datos.codigo,datos.ceco ,datos.cliente,datos.nombreCorto,datos.gerente],funcion);
    }
}