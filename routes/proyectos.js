var express = require('express');
var router = express.Router();
const proyectosC= require("../controlador/proyectosC");

/* GET home page. */
router.get('/',proyectosC.index);
/* GET crear page. */
router.get('/crear',proyectosC.crear);
/* POST guardar page. */
router.post("/",proyectosC.guardar);
/* POST eliminar page. */
router.post("/eliminar/:id",proyectosC.eliminar);
/* POST editar page. */
router.get('/editar/:id',proyectosC.editar);



module.exports = router;
