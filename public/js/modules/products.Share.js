(function(app, $, $dom, EV, _){

    var Products = app.products;

    app.products.share = {

        active: false,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = _.template("products.share", false, Products.elem);
            WD.buttonClose = WD.elem.find(".WD__products__share__close");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            Products.sections.image.find(".WD__products__like").on(EV.click, function() {
                WD.open();
            });

            WD.buttonClose.on(EV.click, function() {
                WD.close();
            });
        },

        open: function(){
            if (WD.active) return;

            Products.elem.attr("data-share", "true");

            WD.active = true;

            _.logger("open", "products.share");
        },

        close: function(){
            if (!WD.active) return;

            Products.elem.attr("data-share", "false");

            WD.active = false;

            _.logger("close", "products.share");
        }

    };

    var WD = app.products.share;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
