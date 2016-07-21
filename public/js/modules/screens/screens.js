(function(app, $, $dom, EV, _){

    app.define("screens");

    app.screens = {

        active: false,

        hidden: false,

        ready: false,

        items: {},

        sectionsHidden: {},

        state: null,

        init: function(screen){

            if (WD.ready) return;

            WD.elem = $dom.root.find(".WD__screens");
            WD.menu = WD.elem.find(".WD__menu");

            WD.elem.on('touchmove MSPointerMove', function(e){
        		e.preventDefault();
        	});

            WD.elem.on('dragstart selectstart', function() {
                return false;
            });

            var index = 100,
                i = 0;

            WD.elem.find(".WD__screen").each(function() {
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

            WD.marquee = app.plugins.marquee(WD.elem, {
                vertical: true,
                screens: '.WD__screen',
                effect: 'light',
                mousewheel: false,
                spaceClass: 'WD__vertical__space',
                longClass: 'WD__screen--long',
                contentClass: 'WD__screen__content',
                hideSections: true,
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

            _.init("screens.callback");
            _.init("screens.messenger");
            _.init("screens.products");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            WD.menu.on(EV.click, ".WD__menu__item", function(){
                var screen = $(this).data("marquee");
                WD.nav(screen);
            });

            WD.elem.find(".WD__screen__arrow").on(EV.click, function(){
                var screen = $(this).data("marquee");
                WD.nav(screen);
            });
        },

        change: function(screen){

            WD.menu.find(".WD__menu__item__" + screen)
            .addClass("WD__menu__item--active")
            .siblings().removeClass("WD__menu__item--active");

            WD.elem.find(".WD__screen__" + screen)
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
        },

        section: {

            open: function(sectionShow, sectionHide, callback){
                if (!app[sectionShow]) return;

                WD.sectionShow = app[sectionShow];

                if (sectionHide) {
                    WD.sectionsHidden[sectionHide] = app[sectionHide];
                    WD.sectionShow.sectionHide = sectionHide;
                }
                if (callback) callback(WD.sectionShow);

                if (WD.sectionShow.ready){
                    WD.sectionShow.open();
                    if (sectionHide) WD.section.hide.on(WD.sectionsHidden[sectionHide]);
                    else WD.hide.on();
                }
                else {
                    if (sectionHide) WD.section.loading.on(WD.sectionsHidden[sectionHide]);
                    else WD.loading.on();
                    setTimeout(function(){
                        WD.sectionShow.init(true, function(){
                            if (sectionHide){
                                WD.section.loading.off(WD.sectionsHidden[sectionHide]);
                                WD.section.hide.on(WD.sectionsHidden[sectionHide]);
                            }
                            else {
                                WD.loading.off();
                                WD.hide.on();
                            }
                        });
                    }, 5);
                }
            },

            openOnly: function(section, name, callback){

                if (section.active) return;

                section.elem.addClass("WD__section--active");

                if (_.isFunction(callback)) callback();

                section.active = true;

                _.logger("open", name);
            },

            close: function(section, name, callback){

                if (!section.active) return;

                if (section.effect == "animation"){
                    section.elem.addClass("WD__section--hide");
                    _.onEndAnimation(section.elem[0], function(){
                        section.elem.removeClass("WD__section--active WD__section--hide");
                        if (_.isFunction(callback)) callback();
                    });
                }
                else {
                    section.elem.removeClass("WD__section--active");
                    _.onEndTransition(section.elem[0], function(){
                        if (_.isFunction(callback)) callback();
                    });
                }

                WD.section.return(section.sectionHide ? section.sectionHide : null);

                section.active = false;

                _.logger("close", name);
            },

            return: function(section){
                if (section && WD.sectionsHidden[section]){
                    WD.section.hide.off(WD.sectionsHidden[section]);
                    delete WD.sectionShow.sectionHide;
                    delete WD.sectionsHidden[section];
                }
                else if (WD.hidden) WD.hide.off();
            },

            loading: {

                on: function($section){
                    $section.elem.attr("data-loading", "true");
                },

                off: function($section){
                    $section.elem.attr("data-loading", "false");
                }
            },

            hide: {

                on: function($section){
                    $section.elem.attr("data-hidden", "true");
                    $section.hidden = true;
                },

                off: function($section){
                    $section.elem.attr("data-hidden", "false");
                    $section.hidden = false;
                }
            }
        },

        loading: {

            on: function(){
                WD.elem.attr("data-loading", "true");
            },

            off: function(){
                WD.elem.attr("data-loading", "false");
            }
        },

        hide: {

            on: function(){
                WD.elem.attr("data-hidden", "true");
                WD.hidden = true;
            },

            off: function(){
                WD.elem.attr("data-hidden", "false");
                WD.hidden = false;
            }
        }
    };

    var WD = app.screens;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
