var express = require('express');
var router = express.Router();
const staffingC= require("../controlador/staffingC");

/* GET home page. */
router.get('/',staffingC.index);
/* POST guardar page. */
router.post("/",staffingC.guardar);
/* POST eliminar page. 
router.post("/eliminar/:id",staffingC.eliminar);  */
/* POST editar page. */
router.post("/editar/:id",staffingC.editar);
/* POST actualizar page. */
router.post("/actualizar",staffingC.actualizar);


/*GET crearSTF page MUESTRA DATOS DE LA TABLA STAFF. */
router.get('/crearSTF' ,staffingC.crearSTF);



/*      
router.get('/crearSTF', (req,res) =>{
    res.render("crearSTF")
});
*/

/* POST editarSTF page. */
router.post("/editarSTF/",staffingC.editarSTF);


/* GET home page EMPLEADOS PARA VISTA CREAR. */


module.exports = router;
