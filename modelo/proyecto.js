/*----------------------------------------------*/
/* ---------- modulo de exportacion ----------- */
/*--------- MODELO - PROYECTOS - MVC -----------*/
module.exports = {

    /*---------------------------------------------------*/
    /*------------------ VISTA INDEX --------------------*/
    /*--- consulta MYSQL la base de datos - Proyectos ---*/
    /*---------- funcion = SELECT - Proyectos -----------*/
    obtener: function (conn, funcion) {
        conn.query("SELECT p.id,codigo, cliente, nomCorto, e.nombre, c.ceco FROM proyectos as p INNER JOIN empleados as e on p.empleados_id=e.id INNER JOIN cecos as c on p.ceco_id=c.id order by id", funcion);
    },
    /*---------------------------------------------------*/


    /*---------------------------------------------------*/
    /*--- consulta MYSQL la base de datos - Proyectos ---*/
    /*----- funcion = Eliminar registro - Proyectos -----*/
    eliminar: function (conn, id, funcion) {
        conn.query("DELETE FROM proyectos WHERE id=?", [id], funcion);
    },
    /*---------------------------------------------------*/

    /*---------------------------------------------------*/
    /*-------------- VISTA ACTUALIZAR -------------------*/
    /*--- consulta MYSQL la base de datos - Proyectos ---*/
    /*-------- funcion = SELECT Proyectos por ID --------*/
    retornarDatosID: function (conn, id, funcion) {
        conn.query("SELECT * FROM proyectos WHERE id=?", [id], funcion);
    },
    /*--- consulta MYSQL la base de datos - Proyectos ---*/
    /*---- funcion = Actualizar registro - Proyectos ----*/
    actualizar: function (conn, datos, id, funcion) {
        conn.query("UPDATE `proyectos` SET codigo = ?, ceco_id = ?, cliente = ?, nomCorto = ?,empleados_id = ? WHERE id = ?", [datos.codigo, datos.ceco, datos.cliente, datos.nombreCorto, datos.gerencia, datos.id], funcion);
    },
    /*---------------------------------------------------*/


    /*---------------------------------------------------*/
    /*------------------- VISTA CREAR -------------------*/
    /*--- consulta MYSQL la base de datos - Proyectos ---*/
    /*----- funcion = Insertar registro - Proyectos -----*/
    insertar: function (conn, datos, funcion) {
        conn.query("INSERT INTO `proyectos` (`codigo`, `ceco_id`, `cliente`, `nomCorto`, `empleados_id`) VALUES (?,?,?,?,?)", [datos.codigo, datos.ceco, datos.cliente, datos.nomCorto, datos.gerencia], funcion);
    },

    /*------------ VISTA CREAR - ACTUALIZAR -------------*/
    /*------- TRAER DATOS MYSQL A SELECT SELECT2 --------*/
    /*-------- TRAER DATOS MYSQL A SELECT Cecos ---------*/
    traerCecos: function (conn, funcion) {
        conn.query("SELECT id , ceco FROM cecos", funcion);
    },
    /*------ TRAER DATOS MYSQL A SELECT Empleados -------*/
    traerGerentes: function (conn, funcion) {
        conn.query("SELECT id , nombre FROM empleados", funcion);
    },
    /*---------------------------------------------------*/



}