(function($){

	/* --- App interface --- */
	yellApp.define("api");
	yellApp.define("effects");
	yellApp.define("sizes");
	yellApp.define("utils");
	yellApp.define("plugins");
	yellApp.define("device");
	yellApp.define("system");
	yellApp.define("events");
	yellApp.define("$dom");

	/* --- Root blocks --- */
	yellApp.$dom = {
		html: $('html'),
		body: $('body'),
		document: $(document),
		window: $(window),
		root: $('body').find(".WD__wrapper")
	};

	/* --- System vars --- */
	yellApp.system = {
		io: null,
		user: null,
		sid: null,
		apiUri: '/api/'
	};

	/* --- Events vars --- */
	yellApp.events = {
		click: document && 'ontouchstart' in document.documentElement ? 'tap' : 'click'
	};

	/* --- Prefixed styles --- */
	yellApp.prefixed = {
		'transform': Modernizr.prefixed('transform'),
		'transform-origin': Modernizr.prefixed('transformOrigin')
	};

	Zepto = $;

	/*** --- Dataset helper --- ***/
	$.fn.api = function(key){
		return this.data(key) ? this.data(key) : this.data(key, {}).data(key);
	};

})($);
