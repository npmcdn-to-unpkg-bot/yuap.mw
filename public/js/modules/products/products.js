(function(app, $, $dom, EV, _){

    var SCREENS = app.screens,
        sizes = app.sizes;

    app.products = {

        active: false,

        ready: false,

        sections: {},

        images: [],

        init: function(open, callback){

            if (WD.ready) return;

            WD.data = {
                items: this.items,
                navColor: "#292f33",
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
            WD.effect = WD.elem.data("effect");
            WD.sections.image = WD.elem.find(".WD__products__section__image");
            WD.sections.imageWrapper = WD.sections.image.find(".WD__products__items");
            WD.sections.footer = WD.sections.image.find(".WD__products__footer");
            WD.sections.footerContent = WD.sections.footer.find(".WD__products__footer__content");
            WD.sections.desc = WD.elem.find(".WD__products__section__desc");
            WD.sections.descContent = WD.sections.desc.find(".WD__products__desc");
            WD.buttonBack = WD.sections.image.find(".WD__products__back");
            WD.itemsCount = WD.items.length;

            WD.elem[0].style.display = "block";

            WD.update(this.items[0]);

            _.init("products.viewer");
            _.init("products.feedback");
            _.init("products.share");
            //_.init("products.grid");

            var index = 100,
                i = 0;

            WD.sections.imageWrapper.find(".WD__products__item").each(function() {
                var $item = $(this),
                    image = $item.data("image");

                if (i === 0) {
                    this.style.opacity = "1";
                    $item.addClass("WD__products__item--active");
                    WD.utils.setImage(image);
                }
                WD.images.push({
                    elem: $item,
                    image: image,
                    show: false
                });

                this.style.zIndex = index;
                index--;
                i++;
            });

            WD.slider();
            WD.utils.showItems(2);
            WD.render();

            if (open) {
                setTimeout(function(){
                    WD.elem[0].style.display = "";
                    WD.open(callback);
                }, 300);
            }

            WD.ready = true;

            _.logger("init", "products");
        },

        render: function(){

            // open additional images
            WD.sections.imageWrapper.on(EV.click, ".WD__products__images__item", function() {
                var $item = $(this);

                if ($item.data("zoom")) WD.viewer.open($item.data("zoom"));
                else WD.viewer.open($item.data("image"));
            });

            WD.buttonBack.on(EV.click, function() {
                //WD.grid.open();
                WD.close();
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

        slider: function(){

            WD.elem.on('touchmove MSPointerMove', function(e){
        		e.preventDefault();
        	});

            WD.sections.imageWrapper.on('dragstart selectstart', function() {
                return false;
            });

            WD.sliderDesc = app.plugins.marquee(WD.elem, {
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

            (function animationLoop1(){
                app.utils.raf(animationLoop1);
                var scroll = app.utils.getScroll(WD.sliderDesc);
            })();

            WD.sliderProducts = app.plugins.marquee(WD.sections.imageWrapper, {
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

            (function animationLoop2(){
                app.utils.raf(animationLoop2);
                var scroll = app.utils.getScroll(WD.sliderProducts);
            })();

            var hScroll = WD.sliderProducts.scroll;

            hScroll.on('scrollEnd', function(){
                var index = WD.sliderProducts.index,
                    item = WD.items[index];

                WD.utils.showItemsNear(index, 1);
                WD.utils.showItemsNear(index, -1);

                WD.update(item);
                WD.utils.setImage(WD.sliderProducts.section);

                if (!item.desc) WD.sliderDesc.hideScreen(1);
                else WD.sliderDesc.showScreen(1);
                WD.sliderDesc.resize();
            });
        },

        nav: function(index, duration){
            if (index === undefined) return;
            WD.sliderProducts.scrollTo(index, duration !== undefined ? duration : undefined);
            if (!WD.images[index].show){
                WD.utils.showItemsIndex(index);
            }
            WD.utils.showItemsNear(index, 1);
            WD.utils.showItemsNear(index, -1);
            WD.utils.setImage(WD.images[index].image);
        },

        open: function(callback){

            SCREENS.section.openOnly(WD, "products", callback);
        },

        close: function(callback){

            SCREENS.section.close(WD, "products", callback);
        }

    };

    var WD = app.products;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
