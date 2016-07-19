(function(app, $, $dom, EV, _){

    app.define("callback");

    var SCREENS = app.screens,
        ALERT = app.alert,
        device = app.device;

    app.callback = {

        ready: false,

        number: [],

        init: function(open, callback){

            // if (WD.ready){
            //     if (open && !WD.active) WD.open(callback);
            //     return;
            // }

            if (WD.ready) return;

            WD.elem = _.template("callback");
            WD.title = WD.elem.find(".WD__callback__title");
            WD.buttonClose = WD.elem.find(".WD__callback__close");

            WD.render();

            if (open) {
                setTimeout(function(){
                    WD.open(callback);
                }, 300);
            }

            WD.ready = true;

            _.logger("init", "callback");
        },

        render: function(){

            WD.elem.on('touchmove MSPointerMove', function(e){
        		e.preventDefault();
        	});

            WD.buttonClose.on(EV.click, function() {
                WD.close();
            });

            WD.elem.on(EV.click, ".WD__callback__keyboard__item", function(){
                var $btn = $(this),
                    num = $(this).data("number");

                WD.animNumber($btn);
                WD.clickNumber(num);
            });

            WD.elem.find(".WD__callback__keyboard__button__backspace").on(EV.click, function(){
                var $btn = $(this);
                WD.animNumber($btn);
                WD.clickNumber("-");
            });

            WD.elem.find(".WD__callback__keyboard__button__call").on(EV.click, function(){
                var $btn = $(this);
                WD.animNumber($btn);
            });
        },

        open: function(callback){

            WD.elem.addClass("WD__section--active");

            if (callback && typeof callback === "function") callback();

            WD.active = true;

            _.logger("open", "callback");
        },

        animNumber: function($btn){
            $btn.addClass("WD__callback__keyboard__item--active");
            setTimeout(function(){
                $btn.removeClass("WD__callback__keyboard__item--active");
            }, 170);
        },

        clickNumber: function(num){

            if (num > -1){
                if (WD.number.length === 10) return;
                WD.number.push(num);
            }
            else if (num === "-" && WD.number.length > 0){
                WD.number.pop();
            }
            if (WD.number.length > 0){
                WD.title
                .text(WD.number.join().replace(/,/g, ""))
                .addClass("WD__callback__title--number");
            }
            else {
                WD.title
                .text(WD.title.data("text"))
                .removeClass("WD__callback__title--number");
            }
            if (WD.number.length === 10) {
                WD.confirmPhone();
            }
        },

        confirmPhone: function(){

            var phone = WD.number.join().replace(/,/g, "").replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");

            ALERT.open({
                title: phone,
                subtitle: "Проверьте введенный номер",
                successText: "Верно",
                success: function(){
                    if (_.isFunction(WD.getPhone)){
                        WD.getPhone(WD.number.join().replace(/,/g, ""));
                    }
                    else {

                    }
                },
                cancelText: "Изменить",
                cancel: function(){

                }
            });
        },

        close: function(callback){

            WD.elem.removeClass("WD__section--active");

            SCREENS.section.close();

            WD.getPhone = null;

            WD.active = false;

            if (_.isFunction(callback)){
                _.onEndTransition(WD.elem[0], function(){
                    callback();
                });
            }

            _.logger("close", "callback");
        }
    };

    var WD = app.callback;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
