module.exports = {
//*modulo MODELO MVC EMPLEADOS

    obtener: function (conn, funcion) {
        conn.query("SELECT e.id,documento,nombre,apellido, doc.tipoDoc , g.gerencia, d.departamento, c.cargo FROM empleados as e INNER JOIN documentos as doc on e.documentos_id=doc.id INNER JOIN gerencias as g on e.gerencias_id=g.id INNER JOIN departamentos as d on e.departamentos_id=d.id INNER JOIN cargos as c on e.cargos_id=c.id order by id", funcion);
    },
    insertar: function (conn, datos, funcion) {
        conn.query("INSERT INTO `empleados`(`documentos_id`, `documento`, `nombre`, `apellido`, `gerencias_id`, `departamentos_id`, `cargos_id`) VALUES (?,?,?,?,?,?,?)", [datos.tipoDoc, datos.documento, datos.nombre, datos.apellido, datos.gerencia,datos.departamento,datos.cargo], funcion);
    },
    eliminar:function(conn,id,funcion){
        conn.query("DELETE FROM empleados WHERE id=?",[id],funcion);
    
    },
    retornarDatosID: function (conn,id,funcion) {
        conn.query("SELECT * FROM empleados WHERE id=?",[id], funcion);
    },
    actualizar:function(conn,datos,funcion) {
        conn.query("UPDATE `empleados` SET documentos_id = ?,documento = ?,nombre = ?,apellido = ?,gerencias_id = ?,departamentos_id = ?,cargos_id = ? WHERE id = ?", [datos.tipoDocumento, datos.documento, datos.nombre, datos.apellido, datos.gerencia,datos.departamento,datos.cargo,datos.id],funcion);
     },


    traerDocumentos:function(conn,funcion){
        conn.query("SELECT id, tipoDoc FROM documentos ORDER BY id",funcion);
    },
    traerGerencias:function(conn,funcion){
        conn.query("SELECT id, gerencia FROM gerencias ORDER BY id",funcion);
    },
    traerDeptos:function(conn,funcion){
        conn.query("SELECT id, departamento FROM departamentos ORDER BY id",funcion);
    },
    traerCargos:function(conn,funcion){
        conn.query("SELECT id, cargo FROM cargos ORDER BY id",funcion);
    },
}