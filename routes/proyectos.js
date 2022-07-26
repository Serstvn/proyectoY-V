/*----------------------------------------------*/
/* ---------- modulo de exportacion ----------- */
/*--------- ROUTER - PROYECTOS - MVC -----------*/

/*--- variable de (EXPRESS) ---*/
var express = require('express');
var router = express.Router();
/*--- Constante de controlador (PROYECTOS) ---*/
const proyectosC= require("../controlador/proyectosC");

/* GET vista INDEX. */
router.get('/',proyectosC.index);
/* ---------------- */

/* GET vista CREAR. */
router.get('/crear',proyectosC.crear);
/* ---------------- */

/* page vista POST EDITAR. */
router.post("/editar/:id",proyectosC.editar);
/* ---------------- */

/* POST ACTUALIZAR. */
router.post("/actualizar",proyectosC.actualizar);
/* ---------------- */

/* POST GUARDAR. */
router.post("/guardar",proyectosC.guardar);
/* ---------------- */

/* POST ELIMINAR. */
router.post("/eliminar/:id",proyectosC.eliminar);
/* ---------------- */


module.exports = router;
