/**
 * Created by Administrator on 15-11-16.
 */
var express = require('express');
var router = express.Router();
var studentService = require("../service/studentService");
//查询
router.get("/chaXun",function(req,res,next){
    studentService.chaXun(function(data){
        res.json(data);
        //console.log(data);
    })
});
//增加
router.post("/add",function(req,res,next){
    var data = [req.body.name,req.body.age,req.body.sex,req.body.email];
    studentService.addAll(data,function(){
        res.send("增加成功");
    })
});

//删除
router.post("/delStudent",function(req,res,next){
    var id=req.body.id;
    studentService.delStudent(id,function(){
        res.send();
    })
});

//修改
router.get("/showById",function(req,res,next){
    var id=req.query.id;
    studentService.showById(id,function(r){
        res.json(r);
        //console.log(r);
    })
});
router.post("/update",function(req,res,next){
    var id=req.body.id;
    var name=req.body.name;
    var age=req.body.age;
    var sex=req.body.sex;
    var data=[name,age,sex,id];
    //console.log(data);
    studentService.update(data,function(){
        res.send();
        //console.log(data);
    })
});

//搜索
router.get("/search",function(req,res,next){
    var type=req.query.type;
    var value=req.query.value;
    //console.log(type);
    studentService.search(type,value,function(r){
        res.json(r);
    })
});












module.exports = router;