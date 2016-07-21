(function(app, $, $dom, EV, _){

    var PARENT = app.products,
        sizes = app.sizes;

    app.products.utils = {

        setImage: function(image){

            if (!image) return;

            _.is("products.feedback.image", function(){
                WD.adaptiveImage({
                    $item: PARENT.feedback.image,
                    $img: PARENT.feedback.imageItem,
                    image: image,
                    width: 70,
                    height: 70,
                    autoResize: true,
                    scaleX: 0.75,
                    scaleY: 0.75
                });
            });
        },

        showItems: function(count){
            var cnt = 0;

            for (var i = 0; i < PARENT.itemsCount; ++i) {
                if (!PARENT.images[i].show){
                    if (cnt < count){
                        WD.showItemsIndex(i);
                    }
                    cnt++;
                }
            }
        },

        showItemsIndex: function(i){
            PARENT.images[i].show = true;

            var $item = PARENT.images[i].elem,
                $img = $item.find(".WD__products__image"),
                image = $item.data("image");

            WD.adaptiveImage({
                $item: $item.find(".WD__products__image__container"),
                $img: $img,
                image: image,
                width: sizes.width,
                height: sizes.height - 100,
                autoResize: true,
                scaleX: 0.7,
                scaleY: 0.85,
                imgCenter: "WD__products__image--center",
                imgError: "WD__products__image--error",
                imgLoaded: "WD__products__image--loaded"
            });
            if (PARENT.items[i].images && PARENT.items[i].images.length){
                $item.find(".WD__products__images__item").each(function(){
                    var $item = $(this);
                    WD.adaptiveImage({
                        $item: $item,
                        $img: $item.children(),
                        image: $item.data("image"),
                        width: 64,
                        height: 64,
                        autoResize: true,
                        scaleX: 0.75,
                        scaleY: 0.75,
                        imgLoaded: "WD__products__images__item--loaded"
                    });
                });
            }
        },

        showItemsNear: function(index, count){
            var cnt = 0;

            if (!count) return;

            if (count > 0){
                for (var i = index; i < PARENT.itemsCount; ++i) {
                    if (cnt < count && !PARENT.images[i].show){
                        WD.showItemsIndex(i);
                        cnt++;
                    }
                }
            }
            else {
                for (var i = index; i > 0; --i) {
                    if (cnt < Math.abs(count) && !PARENT.images[i].show){
                        WD.showItemsIndex(i);
                        cnt++;
                    }
                }
            }
        },

        adaptiveImage: function(options){
            if (options.imgLoading) options.$item.addClass(options.imgLoading);
            _.getSizeImage(options.image, function(w, h){
                if (options.imgLoading) options.$item.removeClass(options.imgLoading);
                if (w && h) {
                    options.scaleX = options.scaleX ? options.scaleX : 1;
                    options.scaleY = options.scaleY ? options.scaleY : 1;
                    var ratio = h / w;

                    if (options.autoResize){
                        var delta = (options.width * options.scaleX) / w;
                        if (ratio < 1.7 && (h * delta) <= (options.height * options.scaleY)){
                            var scale = options.scaleX;
                            delta = (options.width * scale) / w;
                            options.$img.css({
                                width: (scale * 100) + "%",
                                height: (h * delta) + "px"
                            });
                        }
                        else {
                            var scale = options.scaleY;
                            delta = (options.height * scale) / h;
                            options.$img.css({
                                width: (w * delta) + "px",
                                height: (options.height * scale) + "px"
                            });
                        }
                        if (options.imgCenter) options.$item.addClass(options.imgCenter);
                    }
                    options.$img.css("background-image", "url(" + options.image + ")");
                    if (options.imgLoaded) options.$item.addClass(options.imgLoaded);
                    if (_.isFunction(options.callback)){
                        options.callback();
                    }
                }
                else {
                    if (options.imgError) options.$item.addClass(options.imgError);
                }
            });
        }
    };

    var WD = app.products.utils;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
