(function(_){

    var $header = $(".home__header__wrapper"),
        $logo = $header.find(".home__logo"),
        $buttons = $header.find(".home__buttons"),
        $layers = $header.find(".home__header__layer"),
        layers = [];

    $layers.each(function(){
        var $elem = $(this),
            transform = $elem.css("transform").match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\-?\d+), ?(\-?\d+)/),
            x = transform[1],
            y = parseInt(transform[2]) + _.random(12, 24),
            scale = _.random(90, 105) / 100;

        layers.push({
            elem: $elem,
            transform: "translate3d(" + x + "px, " + transform[2] + "px, 0px) scale3d(1, 1, 1)"
        });

        $elem.css({
            "transform": "translate3d(" + x + "px, " + y + "px, 0px) scale3d(" + scale + ", " + scale + ", 1)"
        });
    });

    setTimeout(function(){
        $logo.addClass("home__logo--animate");
        $buttons.addClass("home__buttons--animate");
    }, 100);

    _.onEndTransition($logo[0], function(){
        $.each(layers, function(){
            this.elem.addClass("home__header__layer--animate")
            .css({
                "transform": this.transform,
                "transition-delay": (_.random(0, 15) / 100) + "s"
            });
        });
    });

    $header.addClass("home__header__wrapper--overlay home__header__wrapper--auth");

    // $buttons.on("mouseenter", function(){
    //      $header.addClass("home__header__wrapper--overlay");
    // });
    //
    // $buttons.on("mouseleave", function(){
    //      $header.removeClass("home__header__wrapper--overlay");
    // });

})(app.utils);
