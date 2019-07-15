const express = require('express');
const router = express.Router();

const multiChose = require('../models/multi_chose');

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


router.post('/save', function(req, res, next) {
  const schm = new multiChose();
  schm.id = req.body.id;
  schm.question = req.body.question;
  schm.items = req.body.items;
  schm.type = req.body.type;
  schm.save(function(err){
    if(err){
        console.error(err);
        res.json({result: 0});
        return;
    }
    res.json({result: 1});
  });
});

router.post('/get', function(req,res){
  multiChose.find(function(err, schm){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(schm);
  })
});
module.exports = router;