/*
 * Name : Esangtek manager System
 * Date  : 2016-09-28
 * Author: kevin lin
 * 
 */
console.log(" Starting Esangtek Manager System... ");

var express = require("express");
var esangMgr=express();

esangMgr.get("/",function(req,res){
    console.log(" Esangtek Manager Server is working.");
    
    res.send(" Esangtek Manager Server is working...");
    res.end();
});

esangMgr.listen(8080, function () {
});