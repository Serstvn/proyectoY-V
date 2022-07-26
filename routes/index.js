/*----------------------------------------------*/
/* ---------- modulo de exportacion ----------- */
/*--------- ROUTER - INDEX - MVC -----------*/


/*--- variable de (EXPRESS) ---*/
var express = require('express');
var router = express.Router();

/* GET vista INDEX. */
router.get('/',function(req,res){
  res.render('index');
});

module.exports = router;