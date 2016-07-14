(function(app, $, $dom, EV, _){

    app.define("callback");

    var SCREENS = app.screens,
        device = app.device;

    app.callback = {

        ready: false,

        number: [],

        init: function(){

            if (WD.ready) return;

            WD.elem = _.template("callback");
            WD.title = WD.elem.find(".WD__callback__title");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            WD.elem.on('touchmove MSPointerMove', function(e){
        		e.preventDefault();
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
            }, device.isIOS ? 170 : 120);
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
            alert(phone);
        }
    };

    var WD = app.callback;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
