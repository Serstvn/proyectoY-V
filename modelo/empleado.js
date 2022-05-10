module.exports = {
//*modulo MODELO MVC

    obtener: function (conn, funcion) {
        conn.query("SELECT empleados.id, documentos.tipoDoc, documento, nombre, nombre,apellido, gerencias.gerencia, departamentos.departamento, cargos.cargo FROM empleados LEFT JOIN documentos ON empleados.documentos_id=documentos.Id LEFT JOIN gerencias ON empleados.gerencias_id=gerencias.id LEFT JOIN departamentos ON empleados.departamentos_id=documentos.id LEFT JOIN cargos ON empleados.cargos_id=cargos.id GROUP BY id", funcion);
    },
    insertar: function (conn, datos, funcion) {
        conn.query("INSERT INTO `empleados`(`documentos_id`, `documento`, `nombre`, `apellido`, `gerencias_id`, `departamentos_id`, `cargos_id`) VALUES (?,?,?,?,?,?,?)", [datos.tipoDocumento, datos.documento, datos.nombre, datos.apellido, datos.gerencia,datos.departamento,datos.cargo], funcion);
    },
    eliminar:function(conn,id,funcion){
        conn.query("DELETE FROM empleados WHERE id=?",[id],funcion);
    
    },
    retornarDatosID: function (conn,id,funcion) {
        conn.query("SELECT * FROM empleados WHERE id=?",[id], funcion);
    },
    actualizar:function(conn, datos,funcion) {
        conn.query("UPDATE `empleados` SET `documentos_id`='[?]',`documento`='[?]',`nombre`='[?]',`apellido`='[?]',`gerencias_id`='[?]',`departamentos_id`='[?]',`cargos_id`='[?]' WHERE `id`='[?]'",[datos.tipoDocumento, datos.documento, datos.nombre, datos.apellido, datos.gerencia,datos.departamento,datos.cargo,datos.id],funcion);
     }
    
}