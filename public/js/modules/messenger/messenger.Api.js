(function(app, $, $dom, EV, _){

    app.define("messenger.api");

    var PARENT = null,
        CONTENT = null,
        PRODUCTS = null;

    app.messenger.api = {

        init: function(){

            PARENT = app.messenger;
            CONTENT = PARENT.content;
            PRODUCTS = PARENT.products;
        },

        render: function(data, callback){
            var size = data.length,
                result = null;

            if (!size) return;

            for (var i = 0; i < size; ++i){
                if (data[i].data.who === "operator") data[i].data.avatar = PARENT.data.operator.avatar;

                data[i].data.dateFormat = WD.dateFormat;

                if (data[i].type === "text"){
                    if (data[i + 1] && data[i + 1].type === "text" && data[i + 1].data.who === data[i].data.who){
                        data[i].data.date = null;
                        data[i].data.label = "prev";
                    }
                    result = _.template("messenger.text", data[i].data, CONTENT);
                }
                else if (data[i].type === "image"){
                    result = _.template("messenger.image", data[i].data, CONTENT);
                }
                else if (data[i].type === "products"){
                    result = PRODUCTS.render(data[i].data, true);
                }
                else if (data[i].type === "pay"){
                    data[i].data.priceFormat = WD.priceFormat;
                    result = _.template("messenger.pay", data[i].data, CONTENT);
                }
            }

            if (_.isFunction(callback)) callback(result);
        },

        add: function(type, data){

            data.date = "только что"

            WD.render([{
                type: type,
                data: data
            }], function($item){
                if ($item) WD.update($item.find(".WD__messenger__item__metadata"));
            });
        },

        getProducts: function(){
            var data = PARENT.data.items,
                size = data.length,
                result = [];

            if (!size) return;

            for (var i = 0; i < size; ++i){
                if (data[i].type === "products"){
                    var items = data[i].data.items,
                        length = items.length;
                    for (var j = 0; j < length; ++j){
                        result.push(items[j]);
                    }
                }
            }

            return result;
        },

        dateFormat: function(){
            return function(text, render){
                var date = render(text);
                if (date && date.match(/\d+/)){
                    return tempus(render(text)).format('%H:%M');
                }
                else {
                    return date;
                }
            }
        },

        priceFormat: function(){
            return function(text, render){
                return render(text).replace(/(\d)(?=((\d{3})+)(\D|$))/, "$1.");
            }
        },

        storage: function(){

        },

        update: function($date){

            setTimeout(function(){

                $date[0].innerHTML = "2 минуты назад";

                setTimeout(function(){

                    $date[0].innerHTML = WD.getTime();

                }, 60000);

            }, 60000 * 2);
        },

        getTime: function(){

            var d = new Date();

            return d.getHours() + ":" + d.getMinutes();
        }
    };

    var WD = app.messenger.api;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
