(function(app, $, $dom, EV, _){

    app.define("screens.callback");

    var PARENT = app.screens;

    app.screens.callback = {

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__screen__callback");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            WD.elem.find(".WD__callback__button").on(EV.click, function(){
                PARENT.section.open("callback");
            });
        }
        
    };

    var WD = app.screens.callback;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
