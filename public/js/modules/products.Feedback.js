(function(app, $, $dom, EV, _){

    var Products = app.products;

    app.products.feedback = {

        active: false,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = Products.elem.find(".WD__products__feedback");
            WD.buttonOpen = Products.sections.footer.find(".WD__products__item__plus");
            WD.buttonOpenOffset = WD.buttonOpen.offset();
            WD.image = Products.elem.find(".WD__products__feedback__image");
            WD.imageOffset = WD.image.offset();
            WD.buttonClose = WD.elem.find(".WD__products__feedback__close");

            WD.render();
            WD.setCords();

            WD.ready = true;
        },

        render: function(){

            WD.buttonOpen.on(EV.click, function(){
                WD.open();
            });

            WD.buttonClose.on(EV.click, function(){
                WD.close();
            });
        },

        setCords: function(){

            var cordDeltaX = WD.imageOffset.left - WD.buttonOpenOffset.left - 15,
                cordDeltaY = WD.imageOffset.top - WD.buttonOpenOffset.top - 20;

            WD.image.css({
                "transform": "translate3d(-" + cordDeltaX + "px, -" + cordDeltaY + "px, 0) scale(0)"
            });
        },

        open: function(){
            if (WD.active) return;

            WD.image.css({
                "transform": "translate3d(0, 0, 0) scale(1)"
            });
            Products.elem.attr("data-feedback", "true");

            WD.active = true;

            _.logger("open", "products.feedback");
        },

        close: function(){
            if (!WD.active) return;

            WD.setCords();
            Products.elem.attr("data-feedback", "false");

            WD.active = false;

            _.logger("close", "products.feedback");
        }
    };

    var WD = app.products.feedback;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
