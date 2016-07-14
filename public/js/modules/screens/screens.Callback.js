(function(app, $, $dom, EV, _){

    app.define("screens.callback");

    var PARENT = app.screens;

    app.screens.callback = {

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__screen__callback");

            _.init("callback");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            WD.elem.find(".WD__callback__button").on(EV.click, function(){

            });
        },

        launchFullScreen: function(element) {
            if (element.requestFullScreen) {
                element.requestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            }
        },

        cancelFullscreen: function() {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    };

    var WD = app.screens.callback;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
