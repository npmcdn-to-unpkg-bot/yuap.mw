(function(app, $, $dom, EV, _){

    app.define("messenger.form");

    var SCREENS = app.screens,
        PARENT = app.messenger;

    app.messenger.form = {

        active: false,

        ready: false,

        type: null,

        container: null,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__messenger__form");
            WD.title = WD.elem.find(".WD__messenger__form__title");
            WD.textarea = WD.elem.find(".WD__messenger__form__textarea");
            WD.buttonClose = WD.elem.find(".WD__messenger__form__close");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            // open form
            PARENT.content.on(EV.click, ".WD__messenger__openForm", function(e){
                e.preventDefault();
                var $item = $(this),
                    type = $item.data("type");

                if (type == "phone"){
                    SCREENS.section.open("callback", "messenger", function(section){
                        section.getPhone = function(phone){
                            section.close(function(){
                                $item.closest(".WD__messenger__item__text").html('Телефонный номер <strong>' + phone + '</strong> успешно предоставлен, ожидайте звонка.');
                            });
                        };
                    });
                }
                else {
                    WD.open({
                        type: $item.data("type"),
                        container: $item.closest(".WD__messenger__item__text"),
                        title: $item.data("title"),
                        placeholder: $item.data("placeholder")
                    });
                }
            });

            // send form
            WD.textarea.on("keydown", function(e){
                if (e.which == 13){
                    e.preventDefault();
                    WD.send();
                }
            });

            // close form
            WD.buttonClose.on(EV.click, function(){
                WD.close();
            });
        },

        send: function(){

            var value = WD.textarea[0].value;

            if (WD.type == "name"){
                WD.container.html('Очень приятно познакомиться, <strong>' + value + '</strong>');
            }
            else if (WD.type == "email"){
                WD.container.html('Email <strong>' + value + '</strong> успешно предоставлен.');
            }
            WD.close();
        },

        open: function(options){

            if (WD.active || !options.type || !options.container || !options.title) return;

            WD.type = options.type;
            WD.container = options.container;

            WD.textarea[0].value = "";

            WD.title.text(options.title);
            if (options.placeholder) WD.textarea.attr("placeholder", options.placeholder);
            else WD.textarea.attr("placeholder", "");

            WD.elem.attr("data-active", "true");

            setTimeout(function(){
                WD.textarea.focus();
            }, 50);

            WD.active = true;

            _.logger("open", "messenger.form");
        },

        close: function(){

            WD.elem.attr("data-active", "false");

            WD.textarea.blur();

            WD.active = false;

            _.logger("close", "messenger.form");
        }
    };

    var WD = app.messenger.form;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
