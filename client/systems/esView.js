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
    
    var esView = window.esView = {};
    
            esView = obj._.extend(esView,obj);
    
            esView.getRoute=function(url){

            };

            esView.gotoUrl=function(url){

            };

            esView.gotoView=function(viewName){};
    
    
    return esView;
});