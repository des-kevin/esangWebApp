/*
 * Name : Esangtek manager System
 * Date  : 2016-09-28
 * Author: kevin lin
 * 
 */

define([
    "order!systems/esObject.js"
],
function(){
    
    var esController = window.esController = function(ctrl){
        
            ctrl.prototype = Object.create(esObject);
            ctrl.getRoute=function(url){

            };

            ctrl.gotoUrl=function(url){

            };

            ctrl.gotoView=function(viewName){};
    
        return ctrl;
    };
    
    
    
    return esController;
});