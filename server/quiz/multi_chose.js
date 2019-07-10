var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next) {
  let rtn = {}
  switch( req.body.act ){
    case 'multi_chose':
      //do something
      rtn = {
        key:'1',
        data:[
          {
            question: "!!question!!",
            items: ['web','is','free']
          },{
            question: "!!question2222",
            items: ['try','test','anmal']
          },{
            question: "다음 동물로 바른것은?",
            items: ['사람','잉어','금붕어']
          }
        ]
      }
      break;
  }
	res.send(rtn);
});
module.exports = router;