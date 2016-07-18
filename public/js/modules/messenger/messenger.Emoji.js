(function(app, $, $dom, EV, _){

    var PARENT = app.messenger,
        sizes = app.sizes;

    app.messenger.emoji = {

        active: false,

        ready: false,

        item: null,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__messenger__emoji");
            WD.wrapper = WD.elem.find(".WD__messenger__emoji__wrapper");
            WD.blobs = WD.wrapper.find(".WD__messenger__emoji__blobs");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            // open emoji
            PARENT.content.on(EV.click, ".WD__messenger__item__operator > .WD__messenger__item__text", function(){
                WD.open($(this));
            });

            // select emoji
            WD.wrapper.on(EV.click, ".WD__messenger__emoji__item", function(e){
                var $emoji = $(e.currentTarget),
                    selectEmoji = $emoji.data("emoji"),
                    emoji = WD.item.data("emoji");

                if (emoji){
                    WD.wrapper.find(".WD__messenger__emoji__item--active")
                    .removeClass("WD__messenger__emoji__item--active");
                    WD.item.find(".WD__messenger__item__emoji").remove();
                }
                if (emoji == selectEmoji) {
                    WD.item.data("emoji", null);
                }
                else {
                    $emoji.addClass("WD__messenger__emoji__item--active");
                    WD.item.append('<div class="WD__messenger__item__emoji WD__messenger__item__emoji--animate"><div class="WD__messenger__item__emoji__icon WD__messenger__item__emoji__icon--' + selectEmoji + '"></div></div>');
                    WD.item.data("emoji", selectEmoji);
                }
            });

            // close emoji
            WD.elem.on(EV.click, function(){
                setTimeout(function(){
                    WD.close();
                }, 50);
            });
        },

        open: function($item){

            if (WD.active || !$item) return;

            WD.item = $item;

            var $parent = $item.parent(),
                emoji = WD.item.data("emoji"),
                offset = $item.offset();

            WD.wrapper.css({
                "top": offset.top + "px",
                "left": offset.left + "px"
            });

            WD.blobs.css("left", $item.width() + "px");
            WD.container = $parent.clone();
            WD.elem.append(WD.container);

            offset = $parent.offset();

            WD.container.addClass("WD__messenger__item--absolute").css({
                "top": offset.top + "px",
                "left": offset.left + "px"
            });

            if (emoji){
                WD.wrapper.find(".WD__messenger__emoji__item[data-emoji='" + emoji + "']")
                .addClass("WD__messenger__emoji__item--active");
            }
            WD.elem.addClass("WD__messenger__emoji--active");

            WD.active = true;

            _.logger("open", "messenger.emoji");
        },

        close: function(){

            WD.container[0].style.opacity = "0";

            WD.elem.addClass("WD__messenger__emoji--close")
            .removeClass("WD__messenger__emoji--active");

            _.onEndTransition(WD.elem[0], function(){
                WD.elem.removeClass("WD__messenger__emoji--close");
                WD.wrapper.find(".WD__messenger__emoji__item--active")
                .removeClass("WD__messenger__emoji__item--active");
                WD.container.remove();
            });

            WD.active = false;

            _.logger("close", "messenger.emoji");
        }
    };

    var WD = app.messenger.emoji;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
