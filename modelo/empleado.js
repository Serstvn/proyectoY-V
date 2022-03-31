module.exports = {


    obtener: function (conn, funcion) {
        conn.query("SELECT * FROM empleados", funcion);
    },
    insertar: function (conn, datos, funcion) {
        conn.query("INSERT INTO `empleados`(`documentos_id`, `documento`, `nombre`, `apellido`, `gerencias_id`, `departamentos_id`, `cargos_id`, `sueldo`) VALUES (?,?,?,?,?,?,?,?)", [datos.tipoDocumento, datos.documento, datos.nombre, datos.apellido, datos.gerencia,datos.departamento,datos.cargo,datos.salario], funcion);
    },
    eliminar:function(conn,id,funcion){
        conn.query("DELETE FROM empleados WHERE id=?",[id],funcion);
    
    },
    retornarDatosID: function (conn,id,funcion) {
        conn.query("SELECT * FROM empleados WHERE id=?",[id], funcion);
    },
    actualizar:function(conn, datos,funcion) {
        conn.query("UPDATE `empleados` SET `documentos_id`='?',`documento`='?',`nombre`='?',`apellido`='?',`gerencias_id`='?',`departamentos_id`='?',`cargos_id`='?',`sueldo`='?' WHERE id ='?'",[datos.tipoDocumento, datos.documento, datos.nombre, datos.apellido, datos.gerencia, datos.departamento, datos.cargo, datos.salario],funcion);
     }
    
}