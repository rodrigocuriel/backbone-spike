window.HeaderView = Backbone.View.extend({
    id: 'header',
    tagName: 'ul',

    initialize: function () {
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model));
        return this;
    },

    selectMenuItem: function (menuItem) {
        $('.nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    },

    selectBranding: function (branding) {
        $('.HeaderBrandImageContainer').addClass(branding);
    }

});