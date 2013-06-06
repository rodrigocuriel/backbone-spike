window.SpringboardView = Backbone.View.extend({
    id: "SpringboardMenu",
    tagName: "ul",

    events: utils.click_or_tap({
        "li": "expand_item",
    }),

    expand_item: function(event) {
        //AppRouter.navigate("item/" + this.model.cid.split("").slice(1), true);
        var id = event.currentTarget.id;
        if (id.length > 0) {
            alert(id);
        }
    },

    initialize: function() {
        this.render();
    },

    fixBG: function() {
        $('.footer').hide();
        $('#content').removeClass().addClass('springboardBG');
        //$('.header').append('<div id="hideSpringboard">&nbsp;</div>');
        $('.header').show();
    },

    render: function() {
        $(this.el).html(this.template(this.model));
        return this;
    }

});