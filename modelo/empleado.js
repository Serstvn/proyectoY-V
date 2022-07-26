/*----------------------------------------------*/
/* ---------- modulo de exportacion ----------- */
/*--------- MODELO - EMPLEADOS - MVC -----------*/
module.exports = {

    /*---------------------------------------------------*/
    /*------------------ VISTA INDEX --------------------*/
    /*--- consulta MYSQL la base de datos - Empleados ---*/
    /*---------- funcion = SELECT - Empleados -----------*/
    obtener: function (conn, funcion) {
        conn.query("SELECT e.id,doc.tipoDoc ,documento,nombre,apellido,  g.gerencia, d.departamento, c.cargo FROM empleados as e INNER JOIN documentos as doc on e.documentos_id=doc.id INNER JOIN gerencias as g on e.gerencias_id=g.id INNER JOIN departamentos as d on e.departamentos_id=d.id INNER JOIN cargos as c on e.cargos_id=c.id order by id", funcion);
    },
    /*---------------------------------------------------*/


    /*---------------------------------------------------*/
    /*--- consulta MYSQL la base de datos - Empleados ---*/
    /*----- funcion = Eliminar registro - Empleados -----*/
    eliminar: function (conn, id, funcion) {
        conn.query("DELETE FROM empleados WHERE id=?", [id], funcion);

    },
    /*---------------------------------------------------*/

    /*---------------------------------------------------*/
    /*-------------- VISTA ACTUALIZAR -------------------*/
    /*--- consulta MYSQL la base de datos - Empleados ---*/
    /*- funcion =SELECT Empleados INNER JOIN  Documentos - Gerencias - Cargos -  Departamentos -*/
    retornarDatosID: function (conn, id, funcion) {
        conn.query("SELECT documentos_id,gerencias_id,departamentos_id,cargos_id, e.id,doc.tipoDoc,documento,nombre,apellido,  g.gerencia, d.departamento, c.cargo  FROM empleados as e  INNER JOIN documentos as doc on e.documentos_id=doc.id  INNER JOIN gerencias as g on e.gerencias_id=g.id  INNER JOIN departamentos as d on e.departamentos_id=d.id  INNER JOIN cargos as c on e.cargos_id=c.id WHERE e.id=?", [id], funcion);
    },

    /*--- consulta MYSQL la base de datos - Empleados ---*/
    /*---- funcion = Actualizar registro - Empleados ----*/
    actualizar: function (conn, datos, funcion) {
        conn.query("UPDATE `empleados` SET documentos_id = ?,documento = ?,nombre = ?,apellido = ?,gerencias_id = ?,departamentos_id = ?,cargos_id = ? WHERE id = ?", [datos.tipoDocumento, datos.documento, datos.nombre, datos.apellido, datos.gerencia, datos.departamento, datos.cargo, datos.id], funcion);
    },
    /*---------------------------------------------------*/


    /*---------------------------------------------------*/
    /*------------ VISTA CREAR - ACTUALIZAR -------------*/
    /*--- consulta MYSQL la base de datos - Empleados ---*/
    /*----- funcion = Insertar registro - Empleados -----*/
    insertar: function (conn, datos, funcion) {
        conn.query("INSERT INTO `empleados`(`documentos_id`, `documento`, `nombre`, `apellido`, `gerencias_id`, `departamentos_id`, `cargos_id`) VALUES (?,?,?,?,?,?,?)", [datos.tipoDoc, datos.documento, datos.nombre, datos.apellido, datos.gerencia, datos.departamento, datos.cargo], funcion);
    },

    /*------- TRAER DATOS MYSQL A SELECT SELECT2 --------*/

    /*----- TRAER DATOS MYSQL A SELECT Documentos -------*/
    traerDocumentos: function (conn, funcion) {
        conn.query("SELECT id, tipoDoc FROM documentos ORDER BY id", funcion);
    },

    /*------ TRAER DATOS MYSQL A SELECT Gerencias -------*/
    traerGerencias: function (conn, funcion) {
        conn.query("SELECT id, gerencia FROM gerencias ORDER BY id", funcion);
    },

    /*---- TRAER DATOS MYSQL A SELECT Departamentos -----*/
    traerDeptos: function (conn, funcion) {
        conn.query("SELECT id, departamento FROM departamentos ORDER BY id", funcion);
    },

    /*------- TRAER DATOS MYSQL A SELECT Cargos ---------*/
    traerCargos: function (conn, funcion) {
        conn.query("SELECT id, cargo FROM cargos ORDER BY id", funcion);
    },
    /*---------------------------------------------------*/
}