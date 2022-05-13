var express = require('express');
var router = express.Router();
const staffingC= require("../controlador/staffingC");

/* GET home page. */
router.get('/',staffingC.index);
/* GET crear page. */
router.get('/crear',staffingC.crear);
/* POST guardar page. */
router.post("/",staffingC.guardar);
/* POST eliminar page. */
router.post("/eliminar/:id",staffingC.eliminar);
/* POST editar page. */
router.post("/editar/:id",staffingC.editar);
/* POST actualizar page. */
router.post("/actualizar",staffingC.actualizar);
/* GET crearSTF page. */
router.get('/crearSTF',staffingC.obtstaff);
/* POST editarSTF page. */
router.post("/editarSTF/:id",staffingC.editarSTF);


module.exports = router;
