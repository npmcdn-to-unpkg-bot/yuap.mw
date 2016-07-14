(function(app, $, $dom, EV, _){

    var PARENT = app.products,
        sizes = app.sizes,
        device = app.device;

    app.products.grid = {

        active: false,

        ready: false,

        start: false,

        images: [],

        lastScroll: 0,

        downScroll: 0,

        showButtonCloseInterval: null,

        init: function(){

            if (WD.ready) return;

            WD.elem = _.template("products.grid", {
                items: PARENT.items,
                zoom: false
            });

            WD.scroll = WD.elem.find(".WD__products__grid__scroll");
            WD.wrapper = WD.scroll.find(".WD__products__grid__wrapper");
            WD.buttonClose = WD.elem.find(".WD__products__grid__close");
            WD.buttonCloseActive = true;
            WD.items = WD.wrapper.find(".WD__products__grid__item");
            WD.itemsCount = PARENT.items.length;

            WD.items.each(function(){
                WD.images.push({
                    elem: $(this),
                    top: this.offsetTop,
                    show: false
                });
            });

            // new Masonry(WD.wrapper[0], {
            //     itemSelector: '.WD__products__grid__item',
            //     resize: false
            // });

            var _onScroll = _.throttle(WD.onScroll, 100),
                _showButtonClose = _.debounce(WD.showButtonClose, 10, true);

            if (device.isMobile){
                WD.scroll.on("scroll", function(){
                    _onScroll(this.scrollTop);
                    _showButtonClose(this.scrollTop);
                });
            }
            else {
                WD.elem.on('dragstart selectstart', function() {
                    return false;
                });

                WD.iScroll = new IScroll(WD.scroll[0], {
                    scrollX: false,
                    scrollY: true,
        			click: true
                });

                (function animationLoop(){
                    app.utils.raf(animationLoop);
                    var scroll = app.utils.getScroll(WD.iScroll);
                    _onScroll(scroll.y);
                    _showButtonClose(scroll.y);
                })();
            }

            WD.render();

            WD.ready = true;
        },

        render: function(){

            // open product
            WD.wrapper.on(EV.click, ".WD__products__grid__item", function(){
                PARENT.nav($(this).index(), 0);
                setTimeout(function(){
                    WD.close();
                }, 5);
            });

            // close grid
            WD.buttonClose.on(EV.click, function(){
                if (this.getAttribute("class").match(/active/)){
                    WD.close();
                }
            });
        },

        showItems: function(count){
            var i = 0;

            for (var index = 0; index < WD.itemsCount; ++index) {
                if (!WD.images[index].show){
                    if (i < count){
                        WD.images[index].show = true;

                        var $item = WD.images[index].elem,
                            $img = $item.find(".WD__products__grid__item__image"),
                            image = $item.data("image");

                        PARENT.utils.adaptiveImage({
                            $item: $item,
                            $img: $img,
                            image: image,
                            width: sizes.width / 2,
                            height: sizes.height / 2,
                            autoResize: false,
                            scaleX: 0.85,
                            scaleY: 0.8,
                            imgCenter: "WD__products__grid__item--center",
                            imgLoaded: "WD__products__grid__item--loaded"
                        });
                    }
                    i++;
                }
            }
        },

        showButtonClose: function(y){
            if (WD.lastScroll !== y && WD.buttonCloseActive){
                // console.log("deactive");
                clearTimeout(WD.showButtonCloseInterval);
                WD.buttonCloseActive = false;
                WD.buttonClose.removeClass("WD__products__grid__close--active");
                WD.showButtonCloseInterval = setTimeout(function(){
                    // console.log("active");
                    WD.buttonCloseActive = true;
                    WD.buttonClose.addClass("WD__products__grid__close--active");
                }, 1000);
            }
            WD.lastScroll = y;
        },

        onScroll: function(y){
            if (WD.downScroll < y){
                WD.downScroll = y;
                var scroll = y + sizes.height * 0.99;
                for (var index = 0; index < WD.itemsCount; ++index){
                    if (!WD.images[index].show && scroll > WD.images[index].top){
                        WD.showItems(6); break;
                    }
                }
            }
        },

        open: function(){

            WD.elem.addClass("WD__products__grid--open");

            if (!WD.start) {
                WD.start = true;
                _.onEndTransition(WD.elem[0], function(){
                    WD.showItems(4);
                    WD.elem.addClass("WD__products__grid--ready");
                });
            }
            else {
                WD.elem.addClass("WD__products__grid--ready");
            }

            WD.active = true;

            _.logger("open", "products.grid");
        },

        close: function(){

            WD.elem.removeClass("WD__products__grid--ready WD__products__grid--open");

            WD.active = false;

            _.logger("close", "products.grid");

        }
    };

    var WD = app.products.grid;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
