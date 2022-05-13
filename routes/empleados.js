var express = require('express');
var router = express.Router();
const empleadosC= require("../controlador/empleadosC");


/* GET home page. */
router.get('/',empleadosC.index);
/* GET crear page. */
router.get('/crear',empleadosC.crear);
/* POST guardar page. */
router.post("/",empleadosC.guardar);
/* POST eliminar page. */
router.post("/eliminar/:id",empleadosC.eliminar);
/* POST editar page. */
router.post("/editar/:id",empleadosC.editar);
/* POST editar page. */
router.post("/actualizar/",empleadosC.actualizar);


module.exports = router;