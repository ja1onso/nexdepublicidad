/**
 * 
 */
var app = app || {};

app.HomeView = Backbone.View.extend({

    controller: null,
    
    template : Nexapp.getTemplate('homeView'),

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});