
    module.exports = {


    obtener: function (conn, funcion) {
        conn.query("SELECT doc.tipoDoc, g.gerencia, d.departamento, c.cargo,  ST.id, E.documento, E.nombre, E.apellido, P.codigo, P.cliente, P.nomCorto, F.valor, DATE_FORMAT(F.fechaFinal, '%M %d %Y') AS Fecha_Final, DATE_FORMAT(F.fechaInicial, '%M %d %Y') AS Fecha_Inicial FROM staffing AS ST INNER JOIN empleados AS E ON ST.id_empleado=E.id INNER JOIN proyectos AS P ON ST.id_proyecto=P.id INNER JOIN fechas AS F ON ST.id_fecha=F.id INNER JOIN documentos as doc on e.documentos_id=doc.id INNER JOIN gerencias as g on e.gerencias_id=g.id INNER JOIN departamentos as d on e.departamentos_id=d.id INNER JOIN cargos as c on e.cargos_id=c.id", funcion);
    },
    retornarDatosID: function (conn, id, funcion) {
        conn.query("SELECT * FROM proyectos WHERE id=?", [id], funcion);
        
    },




    obtStaffEmpleado: function (conn, funcion) {
        conn.query("SELECT e.id,doc.tipoDoc ,documento,nombre,apellido,  g.gerencia, d.departamento, c.cargo FROM empleados as e INNER JOIN documentos as doc on e.documentos_id=doc.id INNER JOIN gerencias as g on e.gerencias_id=g.id INNER JOIN departamentos as d on e.departamentos_id=d.id INNER JOIN cargos as c on e.cargos_id=c.id", funcion);  
    },
    obtStaffProyecto: function (conn, funcion) {
        conn.query("SELECT p.id,codigo, cliente, nomCorto, e.nombre AS nombreGerente, c.ceco FROM proyectos as p INNER JOIN empleados as e on p.empleados_id=e.id INNER JOIN cecos as c on p.ceco_id=c.id order by id", funcion);
    },

    insertarSTF: function(conn,datos,funcion){
        conn.query("INSERT INTO `staffing` ( `id_empleado`, `id_proyecto`) VALUES (?,?)", [ datos.idEmpleadoSTF,datos.idProyectoSTF], funcion);
    }
    




}