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
            WD.body = WD.elem.find(".WD__messenger__body");
            WD.content = WD.body.find(".WD__messenger__content");
            WD.footer = WD.elem.find(".WD__messenger__footer");

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

            _.init("messenger.viewer");
            _.init("messenger.emoji");
            _.init("messenger.products");
            _.init("messenger.form");
            _.init("messenger.api");
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

            WD.content.empty();

            WD.api.render(WD.data.items);

            // ADD("products", {
            //     who: "operator",
            //     text: "Те, что понравились отметьте",
            //     items: WD.products.items
            // });
            //
            ADD("text", {
                who: "operator",
                text: "Добрый день, я рада приветствовать Вас, ожидаю ваших вопросов."
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
