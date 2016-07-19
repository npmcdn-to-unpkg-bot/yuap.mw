(function(app, utils){

	if (magicMK) utils.MK = magicMK;

	utils.init = function(namespace){
		if (!namespace) return;

		var parts = namespace.split("."),
	        component = app,
	        i;

	    for (i = 0; i < parts.length; i++) {
	        component = component[parts[i]];
	    }

		if (component && typeof component.init === "function"){
			component.init();
			utils.log("Initialize: <" + namespace + "> ready");
		}
		else {
			utils.log("ERROR: <" + namespace + "> initialize");
		}
	};

	utils.is = function(namespace, callback){
		if (!namespace) return;

		var parts = namespace.split("."),
	        component = app,
	        i;

	    for (i = 0; i < parts.length; i++) {
	        component = component[parts[i]];
	    }

		if (component){
			if (callback && typeof callback === "function"){
				callback();
			}
		}
		else {
			utils.log("NOT found: <" + namespace + ">");
		}
	};

	utils.log = function(data){
		if (!data) return;

		if (typeof data === "object"){
			console.dir(data);
		}
		else {
			console.log(data);
		}
	};

	utils.logger = function(event, data){
		if (!event || !data) return;

		if (event === "init") utils.log("Initialize: <" + data + "> ready");
		else if (event === "open") utils.log("OPEN: <" + data + ">");
		else if (event === "close") utils.log("CLOSE: <" + data + ">");
		else utils.log(event + ": <" + data + ">");
	};

	utils.random = function(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	};

	utils.template = function(name, data, node){

		if (!app.templates[name]) {
			utils.log("NOT found: <" + name + "> template");
			return;
		}

		var tpl = Mustache.render(app.templates[name](), data ? data : {}),
			result = $(tpl).appendTo(node ? node : app.$dom.root);

		return result;
	};

	utils.copyArray = function(arr1, arr2){
		var length = arr2.length;

		for (var i = 0; i < length; ++i){
			arr1.push(arr2[i]);
		}
		return arr1;
	};

	utils.isArray = function(arr){
		if (arr && Object.prototype.toString.call(arr) === '[object Array]'){
		    return true;
		}
	};

	utils.isFunction = function(fn){
		if (fn && typeof fn === 'function'){
		    return true;
		}
	};

	utils.fixTouchScroll = function($container, $scroll){
		var touchY = null,
			scrollY = null;

		$container.on('touchmove MSPointerMove', function(e){
			if (scrollY === 0){
				var lastTouchY = e.changedTouches[0].clientY;
				if (lastTouchY < touchY){
					touchY = 0;
					e.preventDefault();
				}
				else {
					if (app.device && app.device.isIOS){
						setTimeout(function(){
							touchY = lastTouchY;
						}, 1000);
					}
					else {
						touchY = lastTouchY;
					}
				}
			}
		});

		$scroll.on('scroll', function(){
			scrollY = this.scrollTop;
		});
	};

	utils.raf = function(callback){
		var func = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame;
		if (func) {
			return func(callback);
		} else {
			return window.setTimeout(callback, 1000 / 60);
		}
	};

	utils.caf = function(frame){
		var func = window.cancelAnimationFrame ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame ||
			window.oCancelRequestAnimationFrame ||
			window.msCancelRequestAnimationFrame ||
			clearTimeout;
		func(frame);
		frame = null;
	};

	utils.support = {transitions: Modernizr.csstransitions},
	utils.transEndEventNames = {'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend'};
	utils.transEndEventName = utils.transEndEventNames[Modernizr.prefixed('transition')];
	utils.animEndEventNames = {'WebkitAnimation': 'webkitAnimationEnd', 'MozAnimation': 'animationend', 'OAnimation': 'oAnimationEnd', 'msAnimation': 'MSAnimationEnd', 'animation': 'animationend'};
	utils.animEndEventName = utils.animEndEventNames[Modernizr.prefixed('animation')];

	utils.onEndTransition = function(el, callback){
		var onEndCallbackFn = function( ev ) {
			if ( utils.support.transitions ) {
				if( ev.target != this ) return;
				this.removeEventListener( utils.transEndEventName, onEndCallbackFn );
			}
			if( callback && typeof callback === 'function' ) { callback.call(this); }
		};
		if( utils.support.transitions ) {
			el.addEventListener( utils.transEndEventName, onEndCallbackFn );
		}
		else {
			onEndCallbackFn();
		}
	};

	utils.onEndAnimation = function(el, callback){
		var onEndCallbackFn = function( ev ) {
			if ( utils.support.transitions ) {
				if( ev.target != this ) return;
				this.removeEventListener( utils.animEndEventName, onEndCallbackFn );
			}
			if( callback && typeof callback === 'function' ) { callback.call(this); }
		};
		if( utils.support.transitions ) {
			el.addEventListener( utils.animEndEventName, onEndCallbackFn );
		}
		else {
			onEndCallbackFn();
		}
	};

	utils.onLoadImage = function(url, callback) {
		var img = new Image(),
			loaded = false;

	    function loadHandler() {
	        if (loaded) return;
	        loaded = true;
			callback(true);
	    }
		function errHandler() {
	        callback(false);
	    }
		img.src = url;
		img.onerror = errHandler;
		img.onload = loadHandler;
	    if (img.complete) loadHandler();
	};

	utils.getSizeImage = function(url, callback) {
	    var img = new Image(),
			loaded = false;

	    function loadHandler() {
	        if (loaded) return;
	        loaded = true;
			callback(img.naturalWidth, img.naturalHeight);
	    }
		function errHandler() {
	        callback(false);
	    }
		img.src = url;
		img.onerror = errHandler;
		img.onload = loadHandler;
	    if (img.complete) loadHandler();
	};

	utils.getScroll = function(scroll) {
        var x = scroll.x * -1,
            y = scroll.y * -1,
			maxX = scroll.maxScrollX * -1,
			maxY = scroll.maxScrollY * -1;
        return {x: x, y: y, maxX: maxX, maxY: maxY};
    };

	utils.throttle = function(fn, delay) {
		var allowSample = true;

		return function(e) {
			if (allowSample) {
				allowSample = false;
				setTimeout(function() { allowSample = true; }, delay);
				fn(e);
			}
		};
	};

	utils.debounce = function(fn, timeout, invokeAsap, ctx) {
		if (arguments.length == 3 && typeof invokeAsap != 'boolean') {
			ctx = invokeAsap;
			invokeAsap = false;
		}

		var timer;

		return function() {

			var args = arguments;
            ctx = ctx || this;

			invokeAsap && !timer && fn.apply(ctx, args);

			clearTimeout(timer);

			timer = setTimeout(function() {
				!invokeAsap && fn.apply(ctx, args);
				timer = null;
			}, timeout);

		};
	};

})(yellApp, yellApp.utils);
