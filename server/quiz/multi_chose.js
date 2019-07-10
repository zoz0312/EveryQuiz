var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send({
    key:'123',
    data:'123asdasdas'
  });
});
module.exports = router;