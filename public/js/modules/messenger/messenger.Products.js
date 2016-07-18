(function(app, $, $dom, EV, _){

    app.define("messenger.products");

    var PARENT = app.messenger,
        VIEWER = app.messenger.viewer,
        Utils = app.products.utils;

    app.messenger.products = {

        active: false,

        ready: false,

        addCount: 0,

        addItems: [],

        init: function(){

            if (WD.ready) return;

            WD.window = PARENT.elem.find(".WD__messenger__products__window");
            WD.wrapper = WD.window.find(".WD__messenger__products__window__wrapper");
            WD.buttonAdd = WD.window.find(".WD__messenger__products__window__button");
            WD.buttonAddCount = WD.buttonAdd.find(".WD__messenger__products__window__button__count");
            WD.buttonClose = WD.window.find(".WD__messenger__products__window__close");
            WD.badge = PARENT.elem.find(".WD__messenger__products__badge");
            WD.badgeImage = WD.badge.find(".WD__messenger__products__badge__image");
            WD.badgeWidth = WD.badge.width();
            WD.badgeHeight = WD.badge.height();

            // open offers
            WD.badge.on(EV.click, function(){
                WD.open();
            });

            // close offers
            WD.buttonClose.on(EV.click, function(){
                WD.close();
            });

            // open photos
            WD.clickPhoto(PARENT.content);
            WD.clickPhoto(WD.window);

            // add products for a chat
            WD.wrapper.on(EV.click, ".WD__messenger__products__item__like", function(){
                var $item = $(this),
                    id = $item.closest(".WD__messenger__products__item").data("id");

                if ($item.hasClass("WD__messenger__products__item--liked")){
                    WD.addCount -= 1;
                }
                else {
                    WD.addCount += 1;
                }
                WD.changeCount(WD.addCount);

                $item.toggleClass("WD__messenger__products__item--liked");
            });

            // liked product in chat
            PARENT.content.on(EV.click, ".WD__messenger__products__item__like", function(){
                var $item = $(this),
                    id = $item.closest(".WD__messenger__products__item").data("id");

                $item.toggleClass("WD__messenger__products__item--liked");
            });

            WD.ready = true;
        },

        changeCount: function(count){
            WD.buttonAddCount.text(count);

            if (count > 0 && !WD.window[0].getAttribute("class").match(/button/)){
                WD.window.addClass("WD__messenger__products__window--button");
            }
            else if (count === 0) {
                WD.window.removeClass("WD__messenger__products__window--button");
            }
            WD.addCount = count;
        },

        clickPhoto: function($container){

            $container.on(EV.click, ".WD__messenger__products__image__container", function(){
                var id = $(this).closest(".WD__messenger__products__item").data("id"),
                    images = WD.getImages(id);

                if (images) VIEWER.open(images);
            });
        },

        render: function(options){

            WD.elem = _.template("messenger.products", {
                title: options.title,
                items: options.items,
                date: options.date,
                price_wrap: function(){
                    return function(text, render){
                        return render(text).replace(/(\d)(?=((\d{3})+)(\D|$))/, "$1 ");
                    }
                }
            }, options.container ? options.container : PARENT.content);

            WD.images = WD.elem.find(".WD__messenger__products__image__container");
            var boxWidth = parseInt(WD.images[0].clientWidth),
                boxHeight = parseInt(WD.images[0].clientHeight);

            WD.images.each(function(){
                var $item = $(this);
                Utils.adaptiveImage({
                    $item: $item,
                    $img: $item.children(),
                    image: $item.data("image"),
                    width: boxWidth,
                    height: boxHeight,
                    autoResize: true,
                    scaleX: 0.7,
                    scaleY: 0.85,
                    imgCenter: "WD__messenger__products__image--center",
                    imgLoaded: "WD__messenger__products__image--loaded"
                });
            });

            if (!options.container){
                Utils.adaptiveImage({
                    $img: WD.badgeImage,
                    image: WD.images[0].getAttribute("data-image"),
                    width: WD.badgeWidth,
                    height: WD.badgeHeight,
                    autoResize: true,
                    scaleX: 0.7,
                    scaleY: 0.85,
                    callback: function(){
                        WD.badge.addClass("WD__messenger__products__badge--active");
                    }
                });
            }

            if (_.isFunction(options.callback)) options.callback();
        },

        getImages: function(id){
            var arr = [];
                length = WD.items.length;

            for (var i = 0; i < length; ++i){
                if (id == WD.items[i].id){
                    _.copyArray(arr, WD.items[i].images);
                    arr.unshift(WD.items[i].image);
                    return arr;
                    break;
                }
            }
        },

        open: function(){

            if (WD.active) return;

            WD.window.addClass("WD__messenger__products__window--active");
            _.onEndTransition(WD.window[0], function(){
                WD.render({
                    title: "Отметьте, чтобы добавить в чат",
                    items: WD.items,
                    container: WD.wrapper,
                    callback: function(){
                        WD.window.addClass("WD__messenger__products__window--ready");
                    }
                });
            });

            WD.active = true;

            _.logger("open", "messenger.products");
        },

        close: function(){

            WD.window.removeClass("WD__messenger__products__window--active");

            _.onEndTransition(WD.window[0], function(){
                WD.wrapper.empty();
                WD.window.removeClass("WD__messenger__products__window--ready");
                WD.changeCount(0);
            });

            WD.active = false;

            _.logger("close", "messenger.products");
        }
    };

    var WD = app.messenger.products;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
