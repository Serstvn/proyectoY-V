module.exports = {


    obtener: function (conn, funcion) {
        conn.query("  SELECT ST.id, E.documentos_id, E.documento, E.nombre, E.apellido, E.gerencias_id, E.departamentos_id, E.cargos_id, P.codigo, P.ceco_id, P.cliente, P.nomCorto, P.empleados_id, F.fechaInicial, F.fechaFinal, F.valor FROM staffing AS ST INNER JOIN empleados AS E ON ST.id_empleado=E.id INNER JOIN proyectos AS P ON ST.id_proyecto=P.id INNER JOIN fechas AS F ON ST.id_fecha=F.id", funcion);
    },
    insertar: function (conn, datos, funcion) {
        conn.query();
    },
    retornarDatosID: function (conn, id, funcion) {
        conn.query("SELECT * FROM proyectos WHERE id=?", [id], funcion);
    },
    obtstaffEmpleado: function (conn, funcion) {
        conn.query("SELECT e.id,documento,nombre,apellido, doc.tipoDoc , g.gerencia, d.departamento, c.cargo FROM empleados as e INNER JOIN documentos as doc on e.documentos_id=doc.id INNER JOIN gerencias as g on e.gerencias_id=g.id INNER JOIN departamentos as d on e.departamentos_id=d.id INNER JOIN cargos as c on e.cargos_id=c.id order by id UNION SELECT p.id,codigo, cliente, nomCorto, e.nombre, c.ceco FROM proyectos as p INNER JOIN empleados as e on p.empleados_id=e.id INNER JOIN cecos as c on p.ceco_id=c.id order by id", funcion);
         
    }

}