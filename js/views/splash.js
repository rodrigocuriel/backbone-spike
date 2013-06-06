window.SplashView = Backbone.View.extend({
	className: "splashContainer",
	tagName: "div",
    timerObject: null,
    interval: 1500,

    events: utils.click_or_tap({
        ".splashContent": "handleClick",
    }),

    handleClick: function (event) {
        app.navigate('springboard', {trigger: true});
    },

    setText: function(new_str) {

    },

    fixBG: function () {
        $('#content').removeClass().addClass('splashBG');
        $('.header').hide();
    },

    initialize:function () {
        this.render();
        this.timerObject = setInterval(this.handleClick, this.interval);
    },

    render:function () {
        $(this.el).html(this.template(this.model));
        return this;
    }

});