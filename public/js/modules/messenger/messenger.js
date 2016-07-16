(function(app, $, $dom, EV, _){

    app.define("messenger");

    var SCREENS = app.screens,
        Utils = app.products.utils;

    app.messenger = {

        ready: false,

        init: function(open, callback){

            if (WD.ready) return;

            WD.elem = _.template("messenger");
            WD.content = WD.elem.find(".WD__messenger__content");

            _.init("messenger.viewer");
            _.init("messenger.products");
            WD.render();

            if (open) {
                setTimeout(function(){
                    WD.open(callback);
                }, 300);
            }

            WD.ready = true;

            _.logger("init", "messenger");
        },

        render: function(){

            WD.products.render();
        },

        open: function(callback){

            WD.elem.addClass("WD__section--active");

            if (callback && typeof callback === "function") callback();

            WD.active = true;

            _.logger("open", "messenger");
        },

        close: function(){

            WD.elem.removeClass("WD__section--active");

            SCREENS.section.close();

            WD.active = false;

            _.logger("close", "messenger");
        }
    };

    var WD = app.messenger;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
