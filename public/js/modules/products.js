(function(){

    app.products = {

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.$elem = $body.find(".WD__products__wrapper");

            WD.$elem.on('dragstart selectstart', function() {
                return false;
            });

            var index = 100,
                i = 0;

            WD.$elem.find(".WD__products__image").each(function() {
                if (i === 0) {
                    this.style.opacity = "1";
                }
                this.style.zIndex = index;
                index--;
                i++;
            });

            WD.marquee = app.plugins.marquee(WD.$elem, {
                vertical: false,
                screens: '.WD__products__image',
                effect: 'space',
                mousewheel: false,
                spaceClass: 'WD__horizontal__space',
                duration: app.device.isPhone ? 350 : 450
            });

            var scroll = WD.marquee.scroll;

            scroll.on('scrollEnd', function(){

            });

            WD.ready = true;
        }
    };

    var WD = app.products;

})();
