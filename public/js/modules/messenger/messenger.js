(function(app, $, $dom, EV, _){

    app.define("messenger");

    var SCREENS = app.screens,
        ADD = null,
        Utils = app.products.utils;

    app.messenger = {

        ready: false,

        init: function(open, callback){

            if (WD.ready) return;

            WD.elem = _.template("messenger");
            WD.effect = WD.elem.data("effect");
            WD.header = WD.elem.find(".WD__messenger__header");
            WD.body = WD.elem.find(".WD__messenger__body");
            WD.content = WD.body.find(".WD__messenger__content");
            WD.footer = WD.elem.find(".WD__messenger__footer");
            WD.buttonClose = WD.header.find(".WD__messenger__header__close");

            ADD = WD.api.add;

            WD.data = {
                build: "1001",
                operator: {
                    name: "Ирина",
                    post: "Онлайн-консултант",
                    avatar: "/public/images/avatar/avatar7.png"
                },
                user: {
                    name: null,
                    phone: null,
                    email: null,
                    avatar: null
                },
                items: WD.items
            };

            WD.elem[0].style.display = "block";

            _.init("messenger.menu");
            _.init("messenger.viewer");
            _.init("messenger.emoji");
            _.init("messenger.products");
            _.init("messenger.form");
            _.init("messenger.api");
            WD.render();

            if (open) {
                setTimeout(function(){
                    WD.elem[0].style.display = "";
                    WD.open(callback);
                }, 300);
            }

            WD.ready = true;

            _.logger("init", "messenger");
        },

        render: function(){

            _.fixTouchScroll(WD.elem, WD.body);

            WD.content.empty();

            WD.api.render(WD.data.items);

            // ADD("products", {
            //     who: "operator",
            //     text: "Те, что понравились отметьте",
            //     items: WD.products.items
            // });
            //
            // ADD("text", {
            //     who: "operator",
            //     text: "Добрый день, я рада приветствовать Вас, ожидаю ваших вопросов."
            // });

            WD.buttonClose.on(EV.click, function(){
                WD.close();
            });
        },

        open: function(callback){

            SCREENS.section.openOnly(WD, "messenger", callback);
        },

        close: function(callback){

            SCREENS.section.close(WD, "messenger", callback);
        }
    };

    var WD = app.messenger;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
