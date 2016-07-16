(function(app, $, $dom, EV, _){

    app.define("messenger.products");

    var PARENT = app.messenger,
        VIEWER = app.messenger.viewer,
        Utils = app.products.utils;

    app.messenger.products = {

        ready: false,

        init: function(){

            if (WD.ready) return;

            // open photos
            PARENT.content.on(EV.click, ".WD__messenger__products__image__container", function(){
                var id = $(this).closest(".WD__messenger__products__item").data("id"),
                    images = WD.getImages(id);

                if (images) VIEWER.open(images);
            });

            // liked product
            PARENT.content.on(EV.click, ".WD__messenger__products__item__like", function(){
                var $item = $(this),
                    id = $item.closest(".WD__messenger__products__item").data("id");

                $item.toggleClass("WD__messenger__products__item--liked");
            });

            WD.ready = true;
        },

        render: function(){

            WD.elem = _.template("messenger.products", {
                items: WD.items,
                price_wrap: function(){
                    return function(text, render){
                        return render(text).replace(/(\d)(?=((\d{3})+)(\D|$))/, "$1 ");
                    }
                }
            }, PARENT.content);

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
        }
    };

    var WD = app.messenger.products;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
