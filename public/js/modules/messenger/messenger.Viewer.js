(function(app, $, $dom, EV, _){

    var PARENT = app.messenger,
        sizes = app.sizes;

    app.messenger.viewer = {

        active: false,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.photoSwipeContainer = document.querySelectorAll('.pswp')[0];

            PARENT.content.on(EV.click, ".WD__messenger__item__image__file", function(){
                var img = this.getAttribute("src");
                if (img) WD.open(img);
            });

            WD.ready = true;
        },

        open: function(img){

            PARENT.elem.attr("data-loading", "true");

            _.getSizeImage(img, function(w, h){
                if (w && h) {
                    WD.photoSwipe({
                        image: img,
                        width: w,
                        height: h
                    });
                }
            });
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

            var delta = data.width / sizes.width,
                zoom = delta > 1.7 ? 1.7 : (delta < 1 ? 1 : delta),
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

            _.logger("open", "messenger.viewer");
        },

        close: function(){

            PARENT.elem.attr("data-loading", "false");

            WD.active = false;

            _.logger("close", "messenger.viewer");
        }
    };

    var WD = app.messenger.viewer;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
