/*
 * Name : Esangtek manager System
 * Date  : 2016-09-28
 * Author: kevin lin
 * 
 */

define([
    "order!systems/esObject.js"
],
function(obj){
    
    var esController = window.esController = {};
    
            esController = obj._.extend(esController,obj);
    
            esController.getRoute=function(url){

            };

            esController.gotoUrl=function(url){

            };

            esController.gotoView=function(viewName){};
    
    
    return esController;
});