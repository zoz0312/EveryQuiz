const express = require('express');
const router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next) {
  let rtn = {}
  switch( req.body.act ){
    case 'getQuizBundle':
      //Get Quiz DB with id..

      /*
        DB GET
      */

      /*
        [type] 
        multi_chose
        line
        OX
        ...
      */
      rtn = {
        bundle_id:'1',
        bundle:[
          {
            type: 'multi_chose',
            question: "!!question!!",
            items: ['web','is','free']
          },{
            type: 'multi_chose',
            question: "!!question2222",
            items: ['try','test','anmal']
          },{
            type: 'multi_chose',
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