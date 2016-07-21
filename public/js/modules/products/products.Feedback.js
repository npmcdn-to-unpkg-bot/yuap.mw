(function(app, $, $dom, EV, _){

    var SCREENS = app.screens,
        PARENT = app.products;

    app.products.feedback = {

        active: false,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__products__feedback");
            WD.buttonOpen = PARENT.sections.footer.find(".WD__products__item__plus");
            WD.buttonOpenOffset = WD.buttonOpen.offset();
            WD.image = PARENT.elem.find(".WD__products__feedback__image");
            WD.imageItem = WD.image.children();
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

            WD.elem.on(EV.click, ".WD__products__feedback__container", function(){
                var item = $(this).data("item");

                if (item == "callback") SCREENS.section.open("callback", "products");
                else if (item == "messenger") SCREENS.section.open("messenger", "products");
                
                WD.close();
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
            PARENT.elem.attr("data-feedback", "true");

            WD.active = true;

            _.logger("open", "products.feedback");
        },

        close: function(){
            if (!WD.active) return;

            WD.setCords();
            PARENT.elem.attr("data-feedback", "false");

            WD.active = false;

            _.logger("close", "products.feedback");
        }
    };

    var WD = app.products.feedback;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
