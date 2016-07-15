var w = $(".container li").first().width();
//var h = $(".container li").first().outerHeight();

var move = function(x) {
	
    if( $.type(x) === "number" ) {
        var l = x;
    } else if( x instanceof $ ) {
        var l = x.position().left;
    } else {
        l = 0;
    }

    var r = $(".container").width() - (w + l);
    var original = $(".jelly").position().left;
    var dir = "right";

    $(".jelly").removeClass("left right");

    if( l < original ) {
        dir = "left";
    }
    
    $(".jelly")
        .addClass( dir )
        .css("left", l )
        .css("right", r );
        
	$(x)
        .addClass("selected")
        .siblings()
        .removeClass("selected");

}

var p = 1;
move($(".nav__item").eq(0));
var ii = setInterval(function() {
   if(p>=5){p=0;}
	move($(".nav__item").eq(p));
    p++;
},2000);

$("ul > li").on("click", function() {
    
    clearInterval(ii);
	move($(this));
	
});

//$(".jelly").css("height", h );


$("input[type=checkbox]").on("change", function() {
   
    if($(this).is(":checked")) {
        $(".jelly").css("background", "#1abc9c");
    } else {
        $(".jelly").css("background", "");
    }
    
}).trigger("change");