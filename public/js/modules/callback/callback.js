(function(app, $, $dom, EV, _){

    app.define("callback");

    var SCREENS = app.screens,
        ALERT = app.alert,
        device = app.device;

    app.callback = {

        ready: false,

        number: [],

        init: function(open, callback){

            if (WD.ready) return;

            WD.elem = _.template("callback");
            WD.effect = WD.elem.data("effect");
            WD.title = WD.elem.find(".WD__callback__title");
            WD.buttonClose = WD.elem.find(".WD__callback__close");

            WD.elem[0].style.display = "block";

            WD.render();

            if (open) {
                setTimeout(function(){
                    WD.elem[0].style.display = "";
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

        open: function(callback){

            SCREENS.section.openOnly(WD, "callback", callback);
        },

        close: function(callback){

            SCREENS.section.close(WD, "callback", callback);

            WD.getPhone = null;
        }
    };

    var WD = app.callback;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
