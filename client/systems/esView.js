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

            esView.gotoView=function(viewName){
                
                
            };
    
            esView.display=function(v){
                    this.dom={};
                    
                    var ItemView = this.View.extend({
                      tagName: 'li',
                      render: function() {
                          
                        this.$el.html("ha ha kevin!!#");
                        return this;
                      }
                    });

                    var BodyView = this.View.extend({
                        el: 'body',

                        template: this._.template(this.$('#item-template').html()),
                        initialize: function() {
                                this.main = $('#main');
                                this.leftBar=this.$("#leftbar");
                                this.footer = this.$('footer');
     
                        },
                        render: function() {
                          this.$el.html(this.template);
                          return this;
                        }
                    });
                    
                    

                  this.dom.item = new ItemView();
                  this.dom.body = new BodyView();
                  
                  this.dom.item.render();
                  this.dom.body.render();
            };
            
    return esView;
});