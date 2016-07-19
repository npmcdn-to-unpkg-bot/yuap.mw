(function(app, $, $dom, EV, _){

    app.define("messenger.viewer");

    var PARENT = app.messenger,
        sizes = app.sizes;

    app.messenger.viewer = {

        active: false,

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.photoSwipeContainer = document.querySelectorAll('.pswp')[0];

            WD.render();

            WD.ready = true;
        },

        render: function(){

            PARENT.content.on(EV.click, ".WD__messenger__item__image__file", function(){
                var img = this.getAttribute("src");
                if (img) WD.open(img);
            });
        },

        open: function(images){

            if (!images) return;

            PARENT.elem.attr("data-loading", "true");

            if (_.isArray(images)){
                Promise.all(images.map(WD.getImage)).then(function(data){
                    WD.photoSwipe(data);
                });
            }
            else {
                _.getSizeImage(images, function(w, h){
                    if (w && h) {
                        WD.photoSwipe([{
                            src: images,
                            w: w,
                            h: h
                        }]);
                    }
                });
            }
        },

        getImage: function(img){
            return new Promise(function(resolve, reject){
                _.getSizeImage(img, function(w, h){
                    if (w && h) {
                        resolve({
                            src: img,
                            w: w,
                            h: h
                        });
                    }
                    else {
                        reject("Not receive the picture size");
                    }
                });
            });
        },

        photoSwipe: function(items){

            if (WD.active) return;

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

            var delta = items[0].w / sizes.width,
                zoom = delta > 1 ? 1 : delta,
                zoomScale = (sizes.width / items[0].w) * zoom,
                zoomX = sizes.width / 2;

            var gallery = new PhotoSwipe(WD.photoSwipeContainer, PhotoSwipeUI_Default, items, options);

            gallery.init();

            gallery.zoomTo(zoomScale, {
                x: zoomX,
                y: 0
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
