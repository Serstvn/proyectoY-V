/*----------------------------------------------*/
/* ---------- modulo de exportacion ----------- */
/*--------- ROUTER - STAFFING - MVC ------------*/

/*--- variable de (EXPRESS) ---*/
var express = require('express');
var router = express.Router();
/*--- Constante de controlador (STAFFING) ---*/
const staffingC= require("../controlador/staffingC");

/* GET vista INDEX. */
router.get('/',staffingC.index);
/* ---------------- */

/* GET vista CREAR. */
router.get('/crearSTF' ,staffingC.crearSTF);
/* ---------------- */

/* page vista POST EDITAR. */
router.post("/editar/:id",staffingC.editar);
/* ---------------- */

/* POST ACTUALIZAR. */
router.post("/actualizar",staffingC.actualizar);
/* ---------------- */

/* POST GUARDAR. */
router.post('/registroEmpleadoSTF',staffingC.registrarSTF);
/* ---------------- */

/* POST ELIMINAR. */
router.post("/eliminar/:id",staffingC.eliminar);
/* ---------------- */



module.exports = router;
