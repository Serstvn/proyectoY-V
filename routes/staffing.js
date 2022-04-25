var express = require('express');
var router = express.Router();
const staffingC= require("../controlador/staffingC");

/* GET home page. */
router.get('/',staffingC.index);

//** estoy en el index y esto es la prueba de git */

module.exports = router;