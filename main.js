/*
 * Name : Esangtek manager System
 * Date  : 2016-09-28
 * Author: kevin lin
 * 
 */
console.log(" Starting Esangtek Manager System... ");
//
require({
  paths: {
    "order": "library/requirejs/order",
    "lib": "library"
  }
});

/*
require([
    "order!bower_components/jquery/dist/jquery.js",
    'order!library/underscore/underscore.js',
    "order!library/backbone/backbone.js",
], function ($, _, Backbone){});
*/

//
require([
    //"order!systems/esController.js",
    "order!systems/esView.js",
    
],function(esView){
    console.log(" EMS 啟動！ ");
    
    
});

