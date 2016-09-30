/*
 * Name : Esangtek manager System
 * Date  : 2016-09-28
 * Author: kevin lin
 * 
 */

define([
    "order!library/jquery/jquery.js",
    'order!library/underscore/wrapper.js',
    "order!library/backbone/wrapper.js",
], function ($, _, Backbone){
    

        var esObject=window.esObject=function(obj){
    
            obj.prototype=Object.create(Backbone);
            obj.set = function(k,v){
                if(obj.hasOwnProperty(k) && typeof obj != "function")
                    obj[k]=v;
            };
            obj.get=function(k){
                if(obj.hasOwnProperty(k)  && typeof obj != "function")
                    return obj[k];
            };

            return obj;
        };
        return esObject;
});

