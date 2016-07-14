/**
 * Created by Administrator on 15-11-16.
 */
var db = require("./database");
//查询
exports.findAll = function(func){
    db.query("select * from student",function(r){
        func(r);
    })
};
//增加
exports.addAll=function(data,func){
  db.query("insert into student(name,age,sex,email) values(?,?,?,?)",data,function(){
      console.log(data);
      func()
  })
};
exports.delStudent = function (id,func) {
    db.query("delete from student where id=?",[id],function(){
        func();
    });
};
//修改
exports.findById = function(id,func){
    db.query("select * from student where id=?",[id],function(r){
        func(r);
        //console.log(r);
    })
};
exports.update = function(data,func){
    console.log(data);
    db.query("update student set name=?,age=?,sex=? where id=?",data,function(){
        func();
    })
};
//搜索
exports.findByName = function(name,func){
    db.query("select * from student where name like ?",["%"+name+"%"],function(r){
        func(r);
    })
};
exports.findByAge = function(name,func){
    db.query("select * from student where age=?",[name],function(r){
        func(r);
    })
};
exports.findBySex = function(name,func){
    db.query("select * from student where sex=?",[name],function(r){
        func(r);
    })
};









