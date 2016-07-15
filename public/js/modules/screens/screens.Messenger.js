(function(app, $, $dom, EV, _){

    app.define("screens.messenger");

    var PARENT = app.screens;

    app.screens.messenger = {

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__screen__messenger");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            WD.elem.find(".WD__screen__cover__button").on(EV.click, function(){
                PARENT.section.open("messenger");
            });
        }
    };

    var WD = app.screens.messenger;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
