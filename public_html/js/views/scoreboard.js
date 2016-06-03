define([
    'backbone',
    'tmpl/scoreboard',
    'collections/scores'
], function(
    Backbone,
    tmpl,
    ScoresCollection

){
    var scoreboardView = Backbone.View.extend({
        template: tmpl,
        initialize: function () {
            this.fetching()
        },

        render:function(data) {
            this.$el.html(tmpl({scores:data}));
            return this;
        },
        fetching: function () {
            var newThis = this;
            ScoresCollection.fetch({remove: false})
                .done( function(){
                    console.log(ScoresCollection.toJSON());
                    this.render(ScoresCollection.toJSON());
                    //newThis.$el.html(newThis.template( { scores : ScoresCollection.toJSON() } ));
                }.bind(this));

        },
        show: function () {
            this.$el.show();
            this.$('.main').fadeIn("slow");// TODO
            this.trigger("show",this);
            
        },
        hide: function () {
            this.$el.hide();
        },

    });

    return new scoreboardView();
});