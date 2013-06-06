/*

notes to myself:

why is zepto better than jquery mobile
who are the other MV* ?
compare with angular ? -- angular sucks at bb, lots of performance issues
show on diferent devices

*/

var account = new Account();
var AppRouter = Backbone.Router.extend({

    routes: {
        "": "splash",
        "splash": "splash",
        "springboard": "springboard"
    },

    initialize: function() {
        var vehicle = account.attributes.vehicles[0];
        this.headerView = new HeaderView({
                model: vehicle
            });
        this.footerView = new FooterView();
        $('.header').html(this.headerView.el);
        $('.footer').html(this.footerView.el);
    },

    home: function(id) {
        if (!this.homeView) {
            this.homeView = new HomeView({
                model: vehicle
            });
        }
        var vehicle = new Vehicle();
        $("#content").html(this.homeView.el);

        this.homeView.createElements('fibonacci');
        this.homeView.resizeElements();
    },

    springboard: function() {
        var vehicle = account.attributes.vehicles[0];

        if (!this.springboardView) {
            this.springboardView = new SpringboardView({
                model: vehicle
            })
        }

        $("#content").html(this.springboardView.el);
        this.springboardView.fixBG();
    },

    splash: function() {

        if (!this.splashView) {
            this.splashView = new SplashView()
        }

        $("#content").html(this.splashView.el);
        this.splashView.fixBG();
        this.footerView.setText('loading...', 'center');
    }

});

$(function() {
    utils.loadTemplate(['HeaderView', 'FooterView', 'SplashView', 'SpringboardView'], function() {
        app = new AppRouter();
        Backbone.history.start();
    });
});