var express = require('express');
var router = express.Router();
const staffingC= require("../controlador/staffingC");

/* GET home page. */
router.get('/',staffingC.index);

/*GET crearSTF page MUESTRA DATOS DE LA TABLA STAFF. */
router.get('/crearSTF' ,staffingC.crearSTF);


/*RUTA PARA ENVIAR DATOS Y CREAR REGISTRO STF. */
router.post('/registroEmpleadoSTF',staffingC.registrarSTF);


/* POST eliminar page. */
router.post("/eliminar/:id",staffingC.eliminar);



/* page POST eliminar registro STF. 
router.post("/eliminar/:id",staffingC.eliminar);  */


/* page POST editar registro STF . */
router.post("/editar/:id",staffingC.editar);
/* POST actualizar page. */
router.post("/actualizar",staffingC.actualizar);

/* GET home page EMPLEADOS PARA VISTA CREAR. */


module.exports = router;
