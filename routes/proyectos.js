var express = require('express');
var router = express.Router();
const proyectosC= require("../controlador/proyectosC");

/* GET home page. */
router.get('/',proyectosC.index);
/* GET crear page. */
router.get('/crear',proyectosC.crear);
/* GET guardar page. */
router.post("/",proyectosC.guardar);
/* GET eliminar page. */
router.post("/eliminar/:id",proyectosC.eliminar);



module.exports = router;
