(function(app, $, $dom, EV, _){

    var sizes = app.sizes;

    app.products = {

        active: false,

        ready: false,

        sections: {},

        init: function(){

            if (WD.ready) return;

            WD.data = {
                items: this.items,
                navColor: "#fff",
                saleShow: true,
                saleColor: "#28282a",
                saleStrong: true,
                priceFontWeight: "normal",
                priceFontSize: "normal",
                titleFontWeight: "normal",
                tableFontSize: "normal",
                offerShow: true,
                offerText: "Вас ждут только подлинные бренды, подтвержденные сертификатами",
                offerFontSize: "normal",
                offerColor: "#fff",
                offerBgColor: "#fff",
                offerCenter: false,
                price_sale: function(){
                    return function(text, render){
                        if (!WD.data.saleShow) return;
                        var result = render(text).split("|"),
                            price = result[0],
                            priceOld = result[1];
                        if (!priceOld) return;
                        return '<div class="WD__products__item__sale">-' + (((priceOld - price) / priceOld) * 100).toFixed(0) + '%</div>';
                    }
                }
            };

            WD.elem = _.template("products", WD.data);

            WD.wrapper = WD.elem.find(".WD__products__wrapper");
            WD.sections.footer = WD.elem.find(".WD__products__footer");
            WD.sections.footerContent = WD.sections.footer.find(".WD__products__footer__content");
            WD.sections.desc = WD.elem.find(".WD__products__section__desc");
            WD.sections.descContent = WD.sections.desc.find(".WD__products__desc");

            WD.update(this.items[0]);

            WD.render();
            _.init("products.viewer");
            _.init("products.feedback");
            _.init("products.share");
            WD.slider();

            WD.ready = true;

            _.logger("init", "products");
        },

        render: function(){

            WD.wrapper.on(EV.click, ".WD__products__images__item", function() {
                var $item = $(this);

                if ($item.data("zoom")) WD.viewer.open($item.data("zoom"));
                else WD.viewer.open($item.data("image"));
            });
        },

        update: function(data){

            WD.sections.footerContent.empty();
            WD.sections.descContent.empty();

            _.template("products.footer", {
                title: data.title,
                price: data.price,
                priceOld: data.priceOld,
                price_wrap: function(){
                    return function(text, render){
                        return render(text).replace(/(\d)(?=((\d{3})+)(\D|$))/, "$1 ");
                    }
                }
            }, WD.sections.footerContent);

            if (data.desc){
                if (WD.sections.desc.hasClass("WD__products__section--hide")){
                    WD.sections.desc.removeClass("WD__products__section--hide");
                }
                _.template("products.desc", {
                    text: data.desc.text,
                    offerText: WD.data.offerShow ? WD.data.offerText : false,
                    params: data.desc.params
                }, WD.sections.descContent);
            }
            else {
                WD.sections.desc.addClass("WD__products__section--hide");
            }
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
                    _.getSizeImage(image, function(w, h){
                        $img.removeClass("WD__products__image--loading");
                        if (w && h) {
                            var scale = 0.9,
                                ratio = h / w;

                            if (ratio < 1.2 || w < sizes.width){
                                if (w < sizes.width * scale) scale = 0.75;
                                else if (w < sizes.width) scale = 0.8;
                                var delta = (sizes.width * scale) / w;
                                $img.css({
                                    width: (scale * 100) + "%",
                                    height: (h * delta) + "px"
                                });
                                $item.addClass("WD__products__item--center");
                            }
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
                controlInvisible: true,
                duration: 425
            });

            WD.marqueeHorizontal = app.plugins.marquee(WD.wrapper, {
                vertical: false,
                screens: '.WD__products__item',
                effect: 'space',
                mousewheel: false,
                spaceClass: 'WD__horizontal__space',
                activeClass: 'WD__products__item--active',
                dataAttr: "image",
                hideSections: true,
                duration: app.device.isPhone ? 375 : 450
            });

            var scroll = WD.marqueeHorizontal.scroll;

            scroll.on('scrollEnd', function(){
                var index = WD.marqueeHorizontal.index;
                    item = WD.items[index];

                WD.update(item);
                WD.setImage(WD.marqueeHorizontal.section);

                if (!item.desc) WD.marqueeVertical.hideScreen(1);
                else WD.marqueeVertical.showScreen(1);
                WD.marqueeVertical.resize();
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
