(function(app, $, $dom, EV, _){

    var Products = app.products;

    app.products.share = {

        active: false,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = _.template("products.share", Products.elem);


            WD.ready = true;
        },

        open: function(){

        },

        close: function(){

        }
        
    };

    var WD = app.products.share;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
