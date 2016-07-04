(function(){

    app.screens = {

        ready: false,

        items: {},

        state: null,

        init: function(screen){

            if (WD.ready) return;

            WD.$elem = $body.find(".WD__screens");
            WD.$menu = WD.$elem.find(".WD__menu");

            $document.on('touchmove MSPointerMove', function(e){
        		e.preventDefault();
        	});

            WD.$elem.on('dragstart selectstart', function() {
                return false;
            });

            var index = 100,
                i = 0;

            WD.$elem.find(".WD__screen").each(function() {
                WD.items[this.getAttribute("data-marquee")] = i;
                if (i === 0) {
                    WD.state = this.getAttribute("data-marquee");
                    this.style.opacity = "1";
                    if (!screen) WD.change(WD.state);
                }
                // this.style.zIndex = index;
                // index--;
                i++;
            });

            WD.marquee = app.plugins.marquee(WD.$elem, {
                vertical: true,
                screens: '.WD__screen',
                effect: 'light',
                mousewheel: false,
                spaceClass: 'WD__vertical__space',
                longClass: 'WD__screen--long',
                contentClass: 'WD__screen__content',
                duration: 350
            });

            var scroll = WD.marquee.scroll;

            scroll.on('scrollEnd', function(){
                WD.state = WD.marquee.section;
                WD.change(WD.state);
            });

            if (screen) {
                WD.nav(screen, 0);
                WD.change(screen);
            }

            WD.render();

            WD.ready = true;
        },

        render: function(){

            WD.$menu.on(clickEvent, ".WD__menu__item", function(){
                var screen = $(this).data("marquee");
                WD.nav(screen);
            });

            WD.$elem.find(".WD__screen__arrow").on(clickEvent, function(){
                var screen = $(this).data("marquee");
                WD.nav(screen);
            });
        },

        change: function(screen){

            WD.$menu.find(".WD__menu__item__" + screen)
            .addClass("WD__menu__item--active")
            .siblings().removeClass("WD__menu__item--active");

            WD.$elem.find(".WD__screen__" + screen)
            .addClass("WD__screen--active")
            .siblings().removeClass("WD__screen--active");
        },

        nav: function(screen, duration){
            if (!screen) return;
            var i = WD.items[screen];
            if (i !== undefined && WD.state != screen) {
                WD.state = screen;
                WD.marquee.scrollTo(i, duration !== undefined ? duration : undefined);
            }
        }
    };

    var WD = app.screens;

})();
