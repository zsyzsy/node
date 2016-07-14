/**
 * Created by lovo_bdk on 15-11-13.
 */
var userDAO = require("../dao/UserDAO");
exports.validateName = function(name,func){
    userDAO.findByName(name,function(r){
        //判断数据库查询的数据
        if(r.length > 0){
            func(false);
        }else{
            func(true);
        }

    });
};
//注册功能
exports.reg=function(data,func){
    userDAO.add(data,function(){
       func();
    })
};
//登录
exports.log=function(name,pwd,func){
   userDAO.findByNameAndPwd(name,pwd, function(r){
        if(r.length>0){
            func(true);
        }else{
            func(false);
        }
    })
};