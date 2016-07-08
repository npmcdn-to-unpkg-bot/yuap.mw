(function(app, $, $dom, EV, _){

    var Products = app.products,
        device = app.device,
        sizes = app.sizes;

    app.products.viewer = {

        active: false,

        allowClick: true,

        sliderEvent: null,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.photoSwipeContainer = document.querySelectorAll('.pswp')[0];

            Products.wrapper.on(EV.click, ".WD__products__image", function(){
                if (!this.getAttribute("class").match(/error/)){
                    var img = this.getAttribute("data-zoom");
                    if (WD.allowClick && img) WD.open(img);
                }
            });

            if (!device.isMobile){
                Products.wrapper.on("mousedown mouseup mousemove", function(e){
                    if (e.type === "mousemove" && WD.sliderEvent === "mousedown"){
                        WD.allowClick = false;
                    }
                    else if (e.type === "mouseup" && WD.sliderEvent === "mousedown"){
                        WD.allowClick = true;
                    }
                    WD.sliderEvent = e.type;
                });
            }

            setInterval(function(){
                WD.error.list = [];
            }, 30000);

            WD.ready = true;
        },

        open: function(img){

            Products.elem.attr("data-loading", "true");

            if (!WD.error.list.indexOf(img)) {
                WD.error.show(img);
                return;
            }

            _.getSizeImage(img, function(w, h){
                if (!w || !h) WD.error.show(img);
                else {
                    WD.photoSwipe({
                        image: img,
                        width: w,
                        height: h
                    });
                }
            });
        },

        error: {

            list: [],

            show: function(img){

                Products.elem.attr("data-image-error", "true");

                if (WD.error.list.indexOf(img) === -1) WD.error.list.push(img);

                setTimeout(function(){
                    Products.elem.attr("data-image-error", "false");
                    Products.elem.attr("data-loading", "false");
                }, 1500);

                _.logger("Error load image", img);
            }
        },

        photoSwipe: function(data){

            if (WD.active) return;

            var items = [
                {
                    src: data.image,
                    w: data.width,
                    h: data.height
                }
            ];

            var options = {
                mainClass: 'pswp--minimal--dark',
                barsSize: {top:0,bottom:0},
                captionEl: false,
                fullscreenEl: false,
                shareEl: false,
                bgOpacity: 0.4,
                tapToClose: true,
                tapToToggleControls: false,
                showAnimationDuration: 30
            };

            var zoom = data.width > sizes.width ? 1.7 : 1,
                zoomScale = (sizes.width / data.width) * zoom,
                zoomX = sizes.width / 2;

            var gallery = new PhotoSwipe(WD.photoSwipeContainer, PhotoSwipeUI_Default, items, options);

            gallery.init();

            gallery.zoomTo(zoomScale, {
                x: zoomX,
                y: -(sizes.height * 0.4)
            }, 450);

            gallery.listen('close', function() {
                WD.close();
            });

            WD.active = true;

            _.logger("open", "products.viewer");
        },

        close: function(){

            Products.elem.attr("data-loading", "false");

            WD.active = false;

            _.logger("close", "products.viewer");
        }
    };

    var WD = app.products.viewer;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
