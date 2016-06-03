define([
    'backbone'
], function(
    Backbone
){

    var Score = Backbone.Model.extend({
    	defaults: {
    		login: '',
    		score: 0
    	}
    });

    return Score;
});