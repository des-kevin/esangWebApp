/*
 * Name : Esangtek manager System
 * Date  : 2016-09-28
 * Author: kevin lin
 * 
 */
console.log(" Starting Esangtek Manager System... ");

require([
    "bower_components/jquery/dist/jquery.js",
    'library/underscore.js',
    "library/backbone.js",
], function ($, _, Backbone){});
require([
    "systems/esObject.js",
    "systems/esController.js",
],function(esObject,esController){
    console.log(" EMS 開始啟動！ ");
    
    
});

