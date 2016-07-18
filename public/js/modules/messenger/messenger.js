(function(app, $, $dom, EV, _){

    app.define("messenger");

    var SCREENS = app.screens,
        Utils = app.products.utils;

    app.messenger = {

        ready: false,

        data: {},

        init: function(open, callback){

            if (WD.ready) return;

            WD.elem = _.template("messenger");
            WD.body = WD.elem.find(".WD__messenger__body");
            WD.content = WD.body.find(".WD__messenger__content");

            _.init("messenger.viewer");
            _.init("messenger.emoji");
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

            _.fixTouchScroll(WD.elem, WD.body);

            WD.products.render({
                title: "Те, что понравились отметьте",
                items: WD.products.items,
                date: "только что"
            });
        },

        open: function(callback){

            if (WD.active) return;

            WD.elem.addClass("WD__section--active");

            if (_.isFunction(callback)) callback();

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
