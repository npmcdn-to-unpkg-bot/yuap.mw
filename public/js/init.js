// alert(document.documentElement.offsetWidth + " " + document.documentElement.offsetHeight);

app.screens.init("products");

app.products.init();

(function(){

var openPhotoSwipe = function(data) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: data.image,
            w: data.width,
            h: data.height
        }
    ];

    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen
        // history: false,
        // focus: false,
        //
        // showAnimationDuration: 0,
        // hideAnimationDuration: 0
        mainClass: 'pswp--minimal--dark',
        barsSize: {top:0,bottom:0},
        captionEl: false,
        fullscreenEl: false,
        shareEl: false,
        bgOpacity: 0.4,
        tapToClose: true,
        tapToToggleControls: false,
        // showHideOpacity: true,
        showAnimationDuration: 30
        // hideAnimationDuration: 0
    };

    var zoom = 1.7,
        zoomScale = (app.sizes.width / data.width) * zoom,
        zoomX = app.sizes.width / 2;

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    gallery.zoomTo(zoomScale, {
        x: zoomX,
        y: -(app.sizes.height * 0.4)
    }, 450);

    gallery.listen('close', function() {
        $elem.removeClass("WD__products--loading");
    });
};

    var $elem = $(".WD__products"),
        $wrapper = $elem.find(".WD__products__wrapper");

    var allowClick = true,
        sliderEvent = null;

    $wrapper.on("mousedown mouseup mousemove", function(e){
        if (e.type === "mousemove" && sliderEvent === "mousedown"){
            allowClick = false;
        }
        else if (e.type === "mouseup" && sliderEvent === "mousedown"){
            allowClick = true;
        }
        sliderEvent = e.type;
    });

    $wrapper.on(clickEvent, ".WD__products__image", function(){
        var img = this.getAttribute("data-zoom");
        if (allowClick){
            $elem.addClass("WD__products--loading");
            app.utils.getSizeImage(img, function(w, h){
                openPhotoSwipe({
                    image: img,
                    width: w,
                    height: h
                });
            });
        }
    });

    var $feedbackButtonOpen = $elem.find(".WD__products__item__plus"),
        $feedbackButtonOffset = $feedbackButtonOpen.offset(),
        $feedback = $elem.find(".WD__products__feedback"),
        $feedbackImage = $elem.find(".WD__products__feedback__image"),
        $feedbackImageOffset = $feedbackImage.offset(),
        $feedbackButtonClose = $feedback.find(".WD__products__feedback__close"),
        cordDeltaX = $feedbackImageOffset.left - $feedbackButtonOffset.left - 15,
        cordDeltaY = $feedbackImageOffset.top - $feedbackButtonOffset.top - 20;

    // $feedbackImage.css({
    //     "transform": "translate3d(-" + cordDeltaX + "px, -" + cordDeltaY + "px, 0) scale(0)"
    // });

    $feedbackButtonOpen.on(clickEvent, function(){
        // $feedbackImage.css({
        //     "background-image": "url(" + $wrapper.data("image") + ")",
        //     "transform": "translate3d(0, 0, 0) scale(1)"
        // });
        $elem.attr("data-feedback", "true");
    });

    $feedbackButtonClose.on(clickEvent, function(){
        // $feedbackImage.css({
        //     "transform": "translate3d(-" + cordDeltaX + "px, -" + cordDeltaY + "px, 0) scale(0)"
        // });
        $elem.attr("data-feedback", "false");
    });

})();
