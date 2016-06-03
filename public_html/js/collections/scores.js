define([
	'backbone',
	'models/score'
], function(
	Backbone,
	Score
){
    var ScoreCollection = Backbone.Collection.extend({
    	model: Score,
        url: '/api/scoreboard',

        comparator: function( collection ) {
            return ( -collection.get('score') );
        }

    });
    return new ScoreCollection();
});