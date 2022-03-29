var express = require('express');
var router = express.Router();
const proyectosC= require("../controlador/proyectosC");

/* GET home page. */
router.get('/views/index.ejs',function(req,res,next){
  res.redirect('/');
});


module.exports = router;
