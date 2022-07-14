
module.exports = {


    obtener: function (conn, funcion) {
        conn.query("SELECT  ST.id, DATE_FORMAT(fechaInicial, '%M %d %Y') AS fechaInicial,  DATE_FORMAT(fechaFinal, '%M %d %Y') AS fechaFinal,valor,codigo,cliente,nomCorto, E1.documento, E1.nombre as nombreEmpleado,E1.apellido,tipoDoc,gerencia,departamento,cargo,ceco,E2.nombre as gerenteEncargado FROM staffing as ST inner join proyectos as P1 on ST.id_proyecto=P1.id inner join empleados as E1 on ST.id_empleado=E1.id INNER JOIN documentos as doc on E1.documentos_id=doc.id INNER JOIN gerencias as g on E1.gerencias_id=g.id INNER JOIN departamentos as d on E1.departamentos_id=d.id INNER JOIN cargos as c on E1.cargos_id=c.id INNER JOIN cecos as cec on P1.ceco_id=cec.id INNER JOIN empleados as E2 on P1.empleados_id=E2.id order by id", funcion);
    },
    
    /*eliminar registro en base de datos*/
    eliminar: function (conn, id, funcion) {
        conn.query("DELETE FROM staffing WHERE id=?", [id], funcion);
    },

    /*funciones: traer empleados-proyectos para vista crear STF*/
    obtStaffEmpleado: function (conn, funcion) {
        conn.query("SELECT e.id,doc.tipoDoc ,documento,nombre,apellido,  g.gerencia, d.departamento, c.cargo FROM empleados as e INNER JOIN documentos as doc on e.documentos_id=doc.id INNER JOIN gerencias as g on e.gerencias_id=g.id INNER JOIN departamentos as d on e.departamentos_id=d.id INNER JOIN cargos as c on e.cargos_id=c.id", funcion);
    },
    obtStaffProyecto: function (conn, funcion) {
        conn.query("SELECT p.id,codigo, cliente, nomCorto, e.nombre AS nombreGerente, c.ceco FROM proyectos as p INNER JOIN empleados as e on p.empleados_id=e.id INNER JOIN cecos as c on p.ceco_id=c.id order by id", funcion);
    },


    /*insertar en base de datos*/
    insertarSTF: function (conn, datos, funcion) {
        conn.query("INSERT INTO `staffing` (`id_empleado`, `id_proyecto`, `fechaInicial`, `fechaFinal`, `valor`) VALUES (?,?,?,?,?)", [datos.idEmpleadoSTF, datos.idProyectoSTF, datos.fechaInicio, datos.fechaFin, datos.aisgnacion], funcion);
    },

    retornarDatosIdSTF: function (conn, id, funcion) {
        conn.query("SELECT * FROM staffing WHERE id=?", [id], funcion);
    },




}




