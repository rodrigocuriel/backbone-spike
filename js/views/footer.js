window.FooterView = Backbone.View.extend({
    id: "footer",
    tagName: "ul",
    
    initialize:function () {
        this.render();
    },

    setText: function(new_str, position) {
        $('.' + position).html(new_str);
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});