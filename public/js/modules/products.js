(function(app, $, $dom, EV, _){

    app.products = {

        active: false,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = $dom.body.find(".WD__products");
            WD.wrapper = WD.elem.find(".WD__products__wrapper");
            WD.footer = WD.elem.find(".WD__products__footer");

            WD.render();
            _.init("products.viewer");
            _.init("products.feedback");
            WD.slider();

            WD.ready = true;

            _.logger("init", "products");
        },

        render: function(){



        },

        open: function(){

            WD.elem.addClass("WD__section--active");

            WD.active = true;

            _.logger("open", "products");
        },

        setImage: function(image){

            _.is("products.feedback.image", function(){
                WD.feedback.image.css({
                    "background-image": "url(" + image + ")"
                });
            });
        },

        slider: function(){

            WD.wrapper.on('dragstart selectstart', function() {
                return false;
            });

            var index = 100,
                i = 0;

            WD.wrapper.find(".WD__products__item").each(function() {
                var $item = $(this),
                    $img = $item.children(".WD__products__image"),
                    image = $item.data("image");

                if (i === 0) {
                    this.style.opacity = "1";
                    $item.addClass("WD__products__item--active");
                    WD.setImage(image);
                }
                (function($img, image){
                    $img.addClass("WD__products__image--loading");
                    _.onLoadImage(image, function(res){
                        $img.removeClass("WD__products__image--loading");
                        if (res) {
                            $img.css("background-image", "url(" + image + ")")
                            .addClass("WD__products__image--loaded");
                        }
                        else {
                            $img.addClass("WD__products__image--error");
                        }
                    });
                })($img, image);

                this.style.zIndex = index;
                index--;
                i++;
            });

            WD.marqueeVertical = app.plugins.marquee(WD.elem, {
                vertical: true,
                screens: '.WD__products__section',
                effect: 'light',
                mousewheel: false,
                spaceClass: 'WD__vertical__space',
                longClass: 'WD__screen--long',
                contentClass: 'WD__products__section__content',
                duration: 350
            });

            i = 0;

            WD.elem.find(".WD__products__section").each(function() {
                if (i > 0) {
                    this.style.display = "none";
                }
                i++;
            });

            WD.marqueeHorizontal = app.plugins.marquee(WD.wrapper, {
                vertical: false,
                screens: '.WD__products__item',
                effect: 'space',
                mousewheel: false,
                spaceClass: 'WD__horizontal__space',
                activeClass: 'WD__products__item--active',
                dataAttr: "image",
                duration: app.device.isPhone ? 350 : 450
            });

            var scroll = WD.marqueeHorizontal.scroll;

            scroll.on('scrollEnd', function(){
                WD.setImage(WD.marqueeHorizontal.section);
            });
        },

        close: function(){

            WD.elem.removeClass("WD__section--active");

            WD.active = false;

            _.logger("close", "products");
        }

    };

    var WD = app.products;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
