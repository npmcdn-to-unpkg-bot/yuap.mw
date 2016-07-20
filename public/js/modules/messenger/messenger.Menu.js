(function(app, $, $dom, EV, _){

    app.define("messenger.menu");

    var PARENT = app.messenger;

    app.messenger.menu = {

        active: false,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__messenger__menu");
            WD.buttonClose = WD.elem.find(".WD__messenger__menu__close");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            // open menu
            PARENT.header.find(".WD__messenger__header__menu__opener").on(EV.click, function(){
                WD.open();
            });

            // select option menu
            WD.elem.on(EV.click, ".WD__messenger__menu__item", function(){
                var item = $(this).data("item");

                PARENT.api.openSection("callback");
            });

            // close menu
            WD.elem.on(EV.click, function(){
                WD.close();
            });
        },

        open: function(){

            if (WD.active) return;

            WD.elem.attr("data-active", "true");

            WD.active = true;

            _.logger("open", "messenger.menu");
        },

        close: function(){

            WD.elem.attr("data-active", "false");

            WD.active = false;

            _.logger("close", "messenger.menu");
        }
    };

    var WD = app.messenger.menu;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
