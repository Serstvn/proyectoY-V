var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res,next){
  res.render('backlog');
});


//** estoy en el backlog y esto es la prueba de git */

module.exports = router;