const express = require('express')
const router = express.Router()

const multiChose = require('../models/multi_chose')

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
  //schm._id = req.body.id;
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

router.post('/test', function(req,res){
  const schm = new multiChose();
  //schm._id = req.body.id;
  console.log("save post");
  schm.question = 'qustion';
  schm.items = ['text1','text2','text3','text4'];
  schm.type = 'multi_chose';
  multiChose.find({ question: 'qustion'}, (err, user) => {
    console.log('user',user);
    res.json({ user: user });
  });
  // schm.save(function(err){
  //   if(err){
  //     console.log('err',err);
  //     return console.error(err);
  //   }
  //   console.log("save post 2-1")
  // });
  // console.log("save post3");
  // res.json({result: 1});
});
router.post('/get', function(req,res){
  // multiChose.find(function(err, schm){
  //     if(err) return res.status(500).send({error: 'database failure'});
  //     res.json(schm);
  // })

  let rtn = {}
  switch( req.body.act ){
    case 'multi_chose':
      //do something
      rtn = {
        key:'1',
        data:[
          {
            question: "!!question!!",
            count: 3
          },{
            question: "!!question2222",
            count: 3
          },{
            question: "다음 동물로 바른것은?",
            count: 3
          },{
            question: "!!question22",
            count: 4
          },{
            question: "!!questi5654222",
            count: 5
          },{
            question: "다음 동물로 다른것은?",
            count: 2 
          },
        ]
      }
      break;
  }
	res.send(rtn);
});
router.post('/detail', function(req,res){
  // multiChose.find(function(err, schm){
  //     if(err) return res.status(500).send({error: 'database failure'});
  //     res.json(schm);
  // })

  let rtn = {}
  switch( req.body.act ){
    case 'multi_chose':
      //do something
      rtn = {
        key:'1',
        data:{
          type: 'multi_chose',
          question: "!!question!!",
          items: ['web','is','free']
        }
      }
      break;
  }
	res.send(rtn);
});
module.exports = router;