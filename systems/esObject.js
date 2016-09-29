/*
 * Name : Esangtek manager System
 * Date  : 2016-09-28
 * Author: kevin lin
 * 
 */


var esObject=(function(obj){
    
    //obj.prototype=Object.create(backbone);
    obj.set = function(k,v){
        if(obj.hasOwnProperty(k) && typeof obj != "function")
            obj[k]=v;
    };
    obj.get=function(k){
        if(obj.hasOwnProperty(k)  && typeof obj != "function")
            return obj[k];
    };
    
    return obj;
})(esObject || {});

