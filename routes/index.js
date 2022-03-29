var express = require('express');
var router = express.Router();
const proyectosC= require("../controlador/proyectosC");

/* GET home page. */
router.get('/',function(req,res,next){
  res.send("ESTE ES EL INDEX");
});


module.exports = router;
