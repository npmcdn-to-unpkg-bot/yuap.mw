(function(app, $, $dom, EV, _){

    yellApp.define("alert");

    yellApp.alert = {

        active: false,

        ready: false,

        callSuccess: function(){},

        callCancel: function(){},

        options: {},

        init: function(){

            if (WD.ready) return;

            WD.elem = _.template("alert");
            WD.wrapper = WD.elem.find(".WD__alert__wrapper");
            WD.container = WD.wrapper.find(".WD__alert__container");
            WD.title = WD.container.find(".WD__alert__title");
            WD.subtitle = WD.container.find(".WD__alert__subtitle");
            WD.buttons = WD.wrapper.find(".WD__alert__buttons");
            WD.success = WD.container.find(".WD__alert__button__success");
            WD.cancel = WD.container.find(".WD__alert__button__cancel");

            WD.render();

            WD.ready = true;

            _.logger("init", "alert");
        },

        render: function(){

            WD.success.on(EV.click, function(){
                WD.close(WD.callSuccess);
            });

            WD.cancel.on(EV.click, function(){
                WD.close(WD.callCancel);
            });
        },

        open: function(options){

            if (WD.active) return;

            if (options) {
                if (options.title) WD.title.text(options.title);
                if (options.subtitle) WD.subtitle.text(options.subtitle);
                if (options.one) {
                    WD.buttons.addClass("WD__alert__buttons--one");
                    WD.success.text(options.one === true ? "OK" : options.one);
                }
                if (options.successText) WD.success.text(options.successText);
                if (options.cancelText) WD.cancel.text(options.cancelText);
                WD.options = options;
            }
            else {
                WD.options = {};
            }

            WD.elem.addClass("WD__alert--active WD__alert--anim");

            _.onEndAnimation(WD.container[0], function(){
                WD.elem.removeClass("WD__alert--anim");
            });

            if (options && _.isFunction(options.success)) {
                WD.callSuccess = options.success;
            }
            if (options && _.isFunction(options.cancel)) {
                WD.callCancel = options.cancel;
            }

            WD.active = true;
        },

        close: function(callback){

            WD.elem.removeClass("WD__alert--active");

            _.onEndTransition(WD.wrapper[0], function(){
                if (WD.options.title) WD.title.text("Сообщение");
                if (WD.options.subtitle) WD.subtitle.text("");
                if (WD.options.successText) WD.success.text("Ok");
                if (WD.options.cancelText) WD.cancel.text("Отмена");
                if (WD.options.one){
                    WD.buttons.removeClass("WD__alert__buttons--one");
                    WD.success.text("Ok");
                }
                if (_.isFunction(callback)) callback();

                WD.callSuccess = function(){};
                WD.callCancel = function(){};

                WD.active = false;
            });

        }
    };

    var WD = app.alert;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
