var express = require('express');
var router = express.Router();
var userService = require("../service/UserService");

/* GET users listing. */
router.post('/validateName', function(req, res, next) {

  userService.validateName(req.body.name,function(isUse){
     res.send(isUse);
  });
});
//注册
router.post('/reg',function(req,res,next){
    var data=[req.body.name,req.body.pwd,req.body.email,req.body.sex];
    userService.reg(data,function(){
        res.send("注册成功");
    });
});
//登录
router.post('/login',function(req,res,next){
    userService.log(req.body.username,req.body.password,function(isLogin){
        res.send(isLogin);
        //console.log(isLogin);
    })
});
module.exports = router;
