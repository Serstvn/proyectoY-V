/*----------------------------------------------*/
/* ---------- modulo de exportacion ----------- */
/*--------- ROUTER - EMPLEADOS - MVC -----------*/


/*--- variable de (EXPRESS) ---*/
var express = require('express');
var router = express.Router();
/*--- Constante de controlador (EMPLEADO) ---*/
const empleadosC= require("../controlador/empleadosC");


/* GET vista INDEX. */
router.get('/',empleadosC.index);
/* ---------------- */

/* GET vista CREAR. */
router.get('/crear',empleadosC.crear);
/* ---------------- */

/* POST vista EDITAR. */
router.post("/editar/:id",empleadosC.editar);
/* ---------------- */

/* POST GUARDAR. */
router.post("/",empleadosC.guardar);
/* ---------------- */

/* POST ELIMINAR. */
router.post("/eliminar/:id",empleadosC.eliminar);
/* ---------------- */

/* POST ACTUALIZAR. */
router.post("/actualizar/",empleadosC.actualizar);


module.exports = router;