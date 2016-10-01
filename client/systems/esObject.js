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
    

        var esObject=window.esObject= {};
        
        esObject = _.extend(esObject, Backbone); 
        
        esObject._ = _;
    
        esObject.set = function(k,v){
                if(esObject.hasOwnProperty(k) && typeof esObject != "function")
                    esObject[k]=v;
            };
            esObject.get=function(k){
                if(esObject.hasOwnProperty(k)  && typeof esObject != "function")
                    return esObject[k];
            };

        return esObject;
});

