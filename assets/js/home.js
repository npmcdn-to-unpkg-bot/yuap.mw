(function(_){

    var $header = $(".home__header__wrapper"),
        $logo = $header.find(".home__logo"),
        $buttons = $header.find(".home__buttons"),
        $layers = $(".home__header__layer"),
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

    var $auth = $(".auth"),
        $authWrapper = $auth.find(".auth__wrapper"),
        $authForm = $authWrapper.find(".auth__form"),
        $authButtonClose = $authWrapper.find(".auth__close");

    // $header.addClass("home__header__wrapper--overlay");

    $buttons.on("mouseenter", function(){
         $header.addClass("home__header__wrapper--overlay");
    });

    $buttons.on("mouseleave", function(){
         $header.removeClass("home__header__wrapper--overlay");
    });

    $buttons.on("click", ".home__button", function(e){
        e.preventDefault();
        $header.addClass("home__header__wrapper--auth");
        $auth.addClass("auth--open");
        $("body").addClass("no-scroll");
        _.onEndTransition($authWrapper[0], function(){
            $authForm.find(".auth__form__input__block--login > .auth__form__input").focus();
        });
    });

    $authForm.find(".auth__form__input").on("focus blur", function(e){
        var $block = $(this).closest(".auth__form__input__block");
        if (e.type === "focus") $block.addClass("auth__form__input__block--focus");
        else $block.removeClass("auth__form__input__block--focus");
    });

    $authButtonClose.on("click", function(e){
        $header.removeClass("home__header__wrapper--auth");
        $auth.removeClass("auth--open");
        $("body").removeClass("no-scroll");
    });

    var body = document.body,
        timer;

    window.addEventListener('scroll', function(){
        clearTimeout(timer);
        if (!body.classList.contains('disable__hover')){
            body.classList.add('disable__hover');
        }

        timer = setTimeout(function(){
            body.classList.remove('disable__hover')
        }, 500);

    }, false);

})(app.utils);
