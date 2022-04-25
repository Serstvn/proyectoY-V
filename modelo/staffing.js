module.exports = {

/* 
    obtenerdpo: function (conn, funcion) {
        conn.query("SELECT * FROM departamentos", funcion);
    }, */
    obtener: function (conn, funcion) {
        conn.query("SELECT id,codigo,nomCorto,cliente,ceco_id FROM proyectos", funcion);
    },
}
