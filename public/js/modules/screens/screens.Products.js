(function(app, $, $dom, EV, _){

    app.define("screens.products");

    var PARENT = app.screens;

    app.screens.products = {

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__screen__products");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            WD.elem.find(".WD__screen__cover__button").on(EV.click, function(){
                if (app.products.ready){
                    app.products.open();
                    PARENT.hide.on();
                }
                else {
                    PARENT.loading.on();
                    setTimeout(function(){
                        app.products.init(true, function(){
                            PARENT.loading.off();
                            PARENT.hide.on();
                        });
                    }, 5);
                }
            });
        }
    };

    var WD = app.screens.products;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
