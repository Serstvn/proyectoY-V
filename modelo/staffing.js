module.exports = {


    obtener: function (conn, funcion) {
        conn.query("  SELECT ST.id, E.documentos_id, E.documento, E.nombre, E.apellido, E.gerencias_id, E.departamentos_id, E.cargos_id, P.codigo, P.ceco_id, P.cliente, P.nomCorto, P.empleados_id, F.fechaInicial, F.fechaFinal, F.valor FROM staffing AS ST INNER JOIN empleados AS E ON ST.id_empleado=E.id INNER JOIN proyectos AS P ON ST.id_proyecto=P.id INNER JOIN fechas AS F ON ST.id_fecha=F.id", funcion);
    },
    insertar: function () {
    },
    retornarDatosID: function (conn, id, funcion) {
        conn.query("SELECT * FROM proyectos WHERE id=?", [id], funcion);
        
    },
    obtStaffEmpleado: function (conn, funcion) {
        conn.query("SELECT id,nombre FROM empleados", funcion);  
    },
    obtStaffProyecto: function (conn, funcion) {
        conn.query("SELECT id ,codigo, nomCorto  FROM proyectos ", funcion);
    },


}