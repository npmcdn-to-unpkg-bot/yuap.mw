/* --- App interface --- */
var app = {
	effects: {},
	sizes: {},
	utils: {},
	plugins: {},
	device: {}
};

/* --- Root blocks --- */
var $root = null,
	$html = $('html'),
    $body = $('body'),
    $document = $(document),
    $window = $(window),
    $sections = null,
	$io = null,
	$user = null,
	$sid = null,
	$apiUri = '/api/',
	clickEvent = document && 'ontouchstart' in document.documentElement ? 'tap' : 'click';

/* --- Prefixed styles --- */
var prefixed = {
	'transform': Modernizr.prefixed('transform'),
	'transform-origin': Modernizr.prefixed('transformOrigin')
};

/*** --- Dataset helper --- ***/
$.fn.api = function(key){
	return this.data(key) ? this.data(key) : this.data(key, {}).data(key);
};
