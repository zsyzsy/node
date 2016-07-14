/**
 * Created by Administrator on 15-11-16.
 */
var studentDAO = require("../dao/studentDAO");
//查询
exports.chaXun=function(func){
    studentDAO.findAll(function(r){
        func(r);
    })
};
//增加
exports.addAll=function(data,func){
    studentDAO.addAll(data,function(){
        func();
    })
};
//删除
exports.delStudent=function(id,func){
    studentDAO.delStudent(id,function(){
        func() ;
    })
};
















