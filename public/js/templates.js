(function() {
window["yellApp"] = window["yellApp"] || {};
window["yellApp"]["templates"] = window["yellApp"]["templates"] || {};

window["yellApp"]["templates"]["alert"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="WD__alert">\n\n    <div class="WD__alert__wrapper WD__alert__black">\n        <div class="WD__alert__container">\n            <div class="WD__alert__header">\n                <div class="WD__alert__title">Сообщение</div>\n                <div class="WD__alert__subtitle"></div>\n            </div>\n            <div class="WD__alert__buttons">\n                <div class="WD__alert__button WD__alert__button__success">Ok</div>\n                <div class="WD__alert__button WD__alert__button__cancel">Отмена</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n';

}
return __p
}})();
(function() {
window["yellApp"] = window["yellApp"] || {};
window["yellApp"]["templates"] = window["yellApp"]["templates"] || {};

window["yellApp"]["templates"]["callback"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="WD__callback WD__section">\n    <div class="WD__callback__close"></div>\n    <div class="WD__callback__wrapper">\n        <div class="WD__callback__title" data-text="Введите свой номер">Введите свой номер</div>\n        <div class="WD__callback__subtitle"><span>без кода</span> страны (+7)</div>\n        <div class="WD__callback__keyboard">\n            <div data-number="1" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">1</span>\n            </div>\n            <div data-number="2" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">2</span>\n                <span class="WD__callback__keyboard__char">DEF</span>\n            </div>\n            <div data-number="3" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">3</span>\n                <span class="WD__callback__keyboard__char">DEF</span>\n            </div>\n            <div data-number="4" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">4</span>\n                <span class="WD__callback__keyboard__char">GHI</span>\n            </div>\n            <div data-number="5" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">5</span>\n                <span class="WD__callback__keyboard__char">JKL</span>\n            </div>\n            <div data-number="6" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">6</span>\n                <span class="WD__callback__keyboard__char">MNO</span>\n            </div>\n            <div data-number="7" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">7</span>\n                <span class="WD__callback__keyboard__char">PQRS</span>\n            </div>\n            <div data-number="8" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">8</span>\n                <span class="WD__callback__keyboard__char">TUV</span>\n            </div>\n            <div data-number="9" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">9</span>\n                <span class="WD__callback__keyboard__char">WXYZ</span>\n            </div>\n            <div class="WD__callback__keyboard__button WD__callback__keyboard__button__call">\n                <svg class="WD__callback__keyboard__button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.625 25.625">\n                        <path class="WD__callback__keyboard__button__path" d="M22.079,17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913,0.799   c-0.668,0.58-1.91,3.29-6.712-2.234C5.005,10.079,7.862,9.22,8.531,8.645l0.918-0.8c1.521-1.325,0.947-2.993-0.15-4.71l-0.662-1.04   C7.535,0.382,6.335-0.743,4.81,0.58L3.986,1.3C3.312,1.791,1.428,3.387,0.971,6.419c-0.55,3.638,1.185,7.804,5.16,12.375   c3.97,4.573,7.857,6.87,11.539,6.83c3.06-0.033,4.908-1.675,5.486-2.272l0.827-0.721c1.521-1.322,0.576-2.668-0.973-3.995   L22.079,17.835z"/>\n                </svg>\n            </div>\n            <div data-number="0" class="WD__callback__keyboard__item">\n                <span class="WD__callback__keyboard__number">0</span>\n            </div>\n            <div class="WD__callback__keyboard__button WD__callback__keyboard__button__backspace">\n                <svg class="WD__callback__keyboard__button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">\n                    <path class="WD__callback__keyboard__button__path" d="M 9 7 C 4.0414839 7 0 11.041484 0 16 L 0 34 C 0 38.958516 4.0414839 43 9 43 L 41 43 C 45.958516 43 50 38.958516 50 34 L 50 16 C 50 11.041484 45.958516 7 41 7 L 9 7 z M 9 9 L 41 9 C 44.877484 9 48 12.122516 48 16 L 48 34 C 48 37.877484 44.877484 41 41 41 L 9 41 C 5.1225161 41 2 37.877484 2 34 L 2 16 C 2 12.122516 5.1225161 9 9 9 z M 20.375 15.5 A 1.0001 1.0001 0 0 0 19.78125 15.78125 L 11.28125 24.28125 A 1.0001 1.0001 0 0 0 11.28125 25.71875 L 19.78125 34.21875 A 1.016466 1.016466 0 1 0 21.21875 32.78125 L 14.4375 26 L 40 26 A 1.0001 1.0001 0 1 0 40 24 L 14.4375 24 L 21.21875 17.21875 A 1.0001 1.0001 0 0 0 20.375 15.5 z"></path>\n                </svg>\n            </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {
window["yellApp"] = window["yellApp"] || {};
window["yellApp"]["templates"] = window["yellApp"]["templates"] || {};

window["yellApp"]["templates"]["messenger"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="WD__messenger WD__section WD__section--active">\n    <div class="WD__messenger__wrapper">\n        <div class="WD__messenger__header">\n            <div class="WD__messenger__header__close">\n                <svg class="WD__messenger__header__close__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none" enable-background="new    "><g display="inline"><g><polygon fill-rule="evenodd" clip-rule="evenodd" points="77.899,14.645 68,4.745 32.645,40.101 22.745,50 32.645,59.899      68,95.255 77.899,85.355 42.544,50    "/></g></g></g><g enable-background="new    "><g><g><path class="WD__messenger__header__close__icon__color" fill-rule="evenodd" clip-rule="evenodd" d="M42.544,50l30.405-30.405c2.734-2.734,2.734-7.166,0-9.899     c-2.732-2.734-7.166-2.734-9.898,0L27.695,45.05c-2.733,2.734-2.733,7.166,0,9.9l35.356,35.354c2.732,2.734,7.166,2.734,9.898,0     c2.734-2.733,2.734-7.165,0-9.899L42.544,50z"/></g></g></g><g display="none" enable-background="new    "><g display="inline"><g><polygon fill-rule="evenodd" clip-rule="evenodd" points="74.535,8.28 71,4.745 25.745,50 71,95.255 74.535,91.72 32.816,50         "/></g></g></g><g display="none" enable-background="new    "><g display="inline"><g><path class="WD__messenger__header__close__icon__color" fill-rule="evenodd" clip-rule="evenodd" d="M32.816,50l39.952-39.951c0.977-0.977,0.977-2.56,0-3.536     c-0.977-0.976-2.559-0.976-3.535,0l-41.72,41.72c-0.976,0.977-0.976,2.559,0,3.535l41.72,41.72c0.977,0.976,2.559,0.976,3.535,0     c0.977-0.977,0.977-2.56,0-3.536L32.816,50z"/></g></g></g></svg>\n            </div>\n            <div class="WD__messenger__header__title">Онлайн-консультант</div>\n            <div class="WD__messenger__header__options">\n                <svg class="WD__messenger__header__options__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20" enable-background="new 0 0 16 16" x="0px" y="0px"><g><circle  class="WD__messenger__header__options__icon__color" cx="2" cy="8" r="2"/><circle class="WD__messenger__header__options__icon__color" cx="14" cy="8" r="2"/><circle class="WD__messenger__header__options__icon__color" cx="8" cy="8" r="2"/></g></svg>\n            </div>\n        </div>\n        <div class="WD__messenger__body">\n            <div class="WD__messenger__content">\n                <div class="WD__messenger__item WD__messenger__item__que">\n                    <div class="WD__messenger__item__avatar" style="background-image:url(/public/images/avatar/avatar7.png)"></div>\n                    <div class="WD__messenger__item__text">Добрый день, я рада приветствовать Вас, ожидаю ваших вопросов.</div>\n                </div>\n                <div class="WD__messenger__item WD__messenger__item__que WD__messenger__item__que--next">\n                    <div class="WD__messenger__item__text">Вас интересует сделки по недвижимостью?\n                    </div>\n                    <div class="WD__messenger__item__metadata">16:02</div>\n                </div>\n                <div class="WD__messenger__item WD__messenger__item__answer WD__messenger__item__answer--first">\n                    <div class="WD__messenger__item__text">Привет</div>\n                </div>\n                <div class="WD__messenger__item WD__messenger__item__answer">\n                    <div class="WD__messenger__item__text">Как дела?</div>\n                    <div class="WD__messenger__item__metadata">только что</div>\n                </div>\n                <div class="WD__messenger__item WD__messenger__item__que">\n                    <div class="WD__messenger__item__avatar" style="background-image:url(/public/images/avatar/avatar7.png)"></div>\n                    <div class="WD__messenger__item__text">Все в порядке)!</div>\n                    <div class="WD__messenger__item__metadata">только что</div>\n                </div>\n                <div class="WD__messenger__item WD__messenger__item__answer">\n                    <div class="WD__messenger__item__image">\n                        <img class="WD__messenger__item__image__file" src="https://uploads.intercomcdn.com/i/o/7439073/38b2a89c5cb04e6d286908f5/___1366_1pl_1.jpg">\n                    </div>\n                    <div class="WD__messenger__item__metadata">только что</div>\n                </div>\n            </div>\n        </div>\n        <div class="WD__messenger__footer">\n            <div class="WD__messenger__button__file">\n                <svg class="WD__messenger__button__file__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 60" enable-background="new 0 0 48 48" xml:space="preserve"><g><path class="WD__messenger__button__file__icon__color" d="M41.4,43.4H6.6c-2.9,0-5.3-2.4-5.3-5.301V18.5c0-2.9,2.4-5.3,5.3-5.3h5.2c0.3,0,0.7-0.3,0.9-0.7l1.3-4   c0.4-1.1,1.5-1.9,2.6-1.9h14.8c1.1,0,2.199,0.8,2.6,1.8l1.3,4c0.101,0.3,0.601,0.7,0.9,0.7h5.2c3,0,5.3,2.3,5.3,5.3V38   C46.7,41,44.3,43.4,41.4,43.4z M6.6,15.1c-1.9,0-3.4,1.5-3.4,3.4v19.6c0,1.801,1.6,3.4,3.4,3.4h34.8c1.899,0,3.399-1.5,3.399-3.4   V18.5c0-1.9-1.5-3.4-3.399-3.4h-5.2c-1.101,0-2.2-0.8-2.601-1.9l-1.3-4c-0.1-0.3-0.6-0.6-0.899-0.6H16.6c-0.3,0-0.7,0.3-0.9,0.6   l-1.3,4c-0.4,1.1-1.6,1.9-2.6,1.9H6.6z"/></g><g><path class="WD__messenger__button__file__icon__color" d="M24,39c-6.5,0-11.8-5.3-11.8-11.8S17.5,15.4,24,15.4s11.8,5.3,11.8,11.8S30.5,39,24,39z M24,17.3c-5.5,0-10,4.5-10,10   s4.5,9.9,10,9.9s10-4.5,10-9.9C34,21.7,29.5,17.3,24,17.3z"/></g><g><path class="WD__messenger__button__file__icon__color" d="M24,34.7c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4c4.2,0,7.4,3.3,7.4,7.4C31.4,31.3,28.1,34.7,24,34.7z M24,21.6   c-3.1,0-5.6,2.5-5.6,5.6c0,3,2.6,5.6,5.6,5.6c3.1,0,5.6-2.5,5.6-5.6C29.6,24.1,27.1,21.6,24,21.6z"/></g><g><path class="WD__messenger__button__file__icon__color" d="M41.4,20c0-0.9-0.7-1.5-1.5-1.5C39,18.5,38.3,19.1,38.3,20s0.7,1.6,1.601,1.6C40.7,21.6,41.4,20.9,41.4,20z"/></g></svg>\n            </div>\n            <textarea class="WD__messenger__textarea" placeholder="Напишите сообщение..." rows="1" maxlength="2000" spellcheck="false"></textarea>\n            <div class="WD__messenger__button__send">\n                <svg class="WD__messenger__button__send__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path class="WD__messenger__button__send__icon__color" d="M5.1,90.8l7.6-32.9c0.3-1.4,1.5-2.5,3-2.7l42.5-4.4c1.2-0.1,1.2-1.9,0-2.1l-42.5-4.1c-1.5-0.1-2.7-1.2-3-2.6  L5.1,9.2C4.4,6.4,7.4,4.1,10,5.4l83.1,41.6c2.5,1.3,2.5,4.9,0,6.2L10,94.6C7.4,95.9,4.4,93.6,5.1,90.8z"/></svg>\n            </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {
window["yellApp"] = window["yellApp"] || {};
window["yellApp"]["templates"] = window["yellApp"]["templates"] || {};

window["yellApp"]["templates"]["products.desc"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '{{#text}}\n<div class="WD__products__desc__title">О товаре</div>\n<div class="WD__products__desc__text">{{text}}</div>\n{{/text}}\n{{#offerText}}\n<div class="WD__products__desc__offer">\n{{offerText}}\n</div>\n{{/offerText}}\n<table class="WD__products__desc__table">\n{{#params}}\n    <tr>\n        <td class="WD__products__desc__cell__title">{{title}}</td>\n        <td class="WD__products__desc__cell__text">{{value}}</td>\n    </tr>\n{{/params}}\n</table>\n';

}
return __p
}})();
(function() {
window["yellApp"] = window["yellApp"] || {};
window["yellApp"]["templates"] = window["yellApp"]["templates"] || {};

window["yellApp"]["templates"]["products.footer"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="WD__products__item__title">\n    <span class="WD__products__item__title__text">{{title}}</span>\n</div>\n<div class="WD__products__item__price WD__products__item__price--sale">\n    {{#price}}{{#price_wrap}}{{price}}{{/price_wrap}} <span class="WD__products__item__price__rub">₽</span>{{/price}}\n    {{#priceOld}}<div class="WD__products__item__price WD__products__item__price__old">{{#price_wrap}}{{priceOld}}{{/price_wrap}} <span class="WD__products__item__price__rub">₽</span></div>{{/priceOld}}\n</div>\n';

}
return __p
}})();
(function() {
window["yellApp"] = window["yellApp"] || {};
window["yellApp"]["templates"] = window["yellApp"]["templates"] || {};

window["yellApp"]["templates"]["products.grid"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="WD__products__grid" data-massonry="{{masonry}}" data-zoom="{{zoom}}">\n    <div class="WD__products__grid__scroll">\n        <div class="WD__products__grid__wrapper">\n        {{#items}}\n            <div class="WD__products__grid__item" data-image="{{image.normal}}">\n                <div class="WD__products__grid__item__image__container">\n                    <div class="WD__products__grid__item__image"></div>\n                </div>\n            </div>\n        {{/items}}\n        </div>\n    </div>\n    <div class="WD__products__grid__close WD__products__grid__close--active"></div>\n</div>\n';

}
return __p
}})();
(function() {
window["yellApp"] = window["yellApp"] || {};
window["yellApp"]["templates"] = window["yellApp"]["templates"] || {};

window["yellApp"]["templates"]["products"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="WD__products WD__section" data-help="false" data-feedback="false"  data-nav-color="{{navColor}}" data-sale-color="{{saleColor}}" data-sale-strong="{{saleStrong}}"  data-price-font-weight="{{priceFontWeight}}" data-price-font-size="{{priceFontSize}}" data-title-font-weight="{{titleFontWeight}}">\n    <div class="WD__products__errZoom">\n        <div class="WD__products__errZoom__container">Большое фото этого товара временно не доступно</div>\n    </div>\n    <div class="WD__products__section WD__products__section__top">\n        <div class="WD__products__section__image WD__products__section__content">\n            <div class="WD__products__help">\n                <div class="WD__products__help__item WD__products__help__item1">\n                    Выйти из раздела\n                </div>\n                <div class="WD__products__help__item WD__products__help__item2">\n                    Увеличить фотографию\n                </div>\n                <div class="WD__products__help__item WD__products__help__item3">\n                    Закажите звонок, мы вам перезвоним и с удовольствием поможем.\n                </div>\n                <div class="WD__products__help__button">\n                    <div class="WD__products__help__button__item">Начать просмотр</div>\n                </div>\n            </div>\n            <div class="WD__products__back">\n                <svg class="WD__products__back__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none" enable-background="new    "><g display="inline"><g><polygon fill-rule="evenodd" clip-rule="evenodd" points="77.899,14.645 68,4.745 32.645,40.101 22.745,50 32.645,59.899      68,95.255 77.899,85.355 42.544,50    "/></g></g></g><g enable-background="new    "><g><g><path class="WD__products__back__icon__color" fill-rule="evenodd" clip-rule="evenodd" d="M42.544,50l30.405-30.405c2.734-2.734,2.734-7.166,0-9.899     c-2.732-2.734-7.166-2.734-9.898,0L27.695,45.05c-2.733,2.734-2.733,7.166,0,9.9l35.356,35.354c2.732,2.734,7.166,2.734,9.898,0     c2.734-2.733,2.734-7.165,0-9.899L42.544,50z"/></g></g></g><g display="none" enable-background="new    "><g display="inline"><g><polygon fill-rule="evenodd" clip-rule="evenodd" points="74.535,8.28 71,4.745 25.745,50 71,95.255 74.535,91.72 32.816,50         "/></g></g></g><g display="none" enable-background="new    "><g display="inline"><g><path class="WD__products__back__icon__color" fill-rule="evenodd" clip-rule="evenodd" d="M32.816,50l39.952-39.951c0.977-0.977,0.977-2.56,0-3.536     c-0.977-0.976-2.559-0.976-3.535,0l-41.72,41.72c-0.976,0.977-0.976,2.559,0,3.535l41.72,41.72c0.977,0.976,2.559,0.976,3.535,0     c0.977-0.977,0.977-2.56,0-3.536L32.816,50z"/></g></g></g></svg>\n            </div>\n            <svg class="WD__products__like" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path class="WD__products__like__color" d="M70.459,13.858c11.515,0,20.846,9.334,20.846,20.846c0,23.3-34.423,44.555-41.306,51.438  C43.152,79.294,8.695,58.004,8.695,34.704c0-11.512,9.333-20.846,20.847-20.846c10.153,0,18.602,7.261,20.457,16.874  C51.856,21.119,60.305,13.858,70.459,13.858 M70.459,7.738c-8.079,0-15.467,3.606-20.459,9.412  c-4.991-5.806-12.378-9.412-20.458-9.412c-14.87,0-26.967,12.097-26.967,26.966c0,21.608,22.979,39.693,36.708,50.5  c2.831,2.228,5.275,4.151,6.389,5.265l4.328,4.329l4.329-4.328c1.123-1.123,3.576-3.055,6.418-5.292  c13.719-10.799,36.68-28.873,36.68-50.474C97.425,19.835,85.328,7.738,70.459,7.738L70.459,7.738z"/></svg>\n            <div class="WD__products__wrapper">\n                {{#items}}\n                    <div class="WD__products__item" data-image="{{#image.normal}}{{image.normal}}{{/image.normal}}">\n                        <div class="WD__products__image__container" data-zoom="{{#image.zoom}}{{image.zoom}}{{/image.zoom}}">\n                            <div class="WD__products__image"></div>\n                        </div>\n                        <div class="WD__products__images">\n                            {{#images}}\n                            <div class="WD__products__images__item" data-image="{{normal}}" data-zoom="{{#zoom}}{{zoom}}{{/zoom}}">\n                                <div class="WD__products__images__item__img"></div>\n                            </div>\n                            {{/images}}\n                        </div>\n                        {{#price_sale}}{{price}}|{{priceOld}}{{/price_sale}}\n                    </div>\n                {{/items}}\n            </div>\n            <div class="WD__products__footer">\n                <div class="WD__products__item__button WD__products__item__plus"></div>\n                <!-- <div class="WD__products__item__button WD__products__item__callbutton"></div> -->\n                <div class="WD__products__footer__content"></div>\n            </div>\n        </div>\n    </div>\n    <div class="WD__products__section WD__products__section__desc">\n        <div class="WD__products__desc WD__products__section__content"  data-table-font-size="{{tableFontSize}}" data-offer-font-size="{{offerFontSize}}" data-offer-color="{{offerColor}}" data-offer-bgcolor="{{offerBgColor}}"  data-offer-center="{{offerCenter}}">\n        </div>\n    </div>\n    <!-- <div class="WD__products__section">\n        <div class="WD__products__advantage WD__products__section__content">\n            <div class="WD__products__advantage__title">Наши преимущества</div>\n            <div class="WD__products__advantage__item">\n                <div class="WD__products__advantage__item__icon">\n\n                </div>\n                <div class="WD__products__advantage__item__title">Только подлинные товары</div>\n                <div class="WD__products__advantage__item__text">Мы гарантируем качество и подлинность каждой вещи, которую вы у нас купите</div>\n            </div>\n        </div>\n    </div> -->\n    <div class="WD__products__feedback">\n        <div class="WD__products__feedback__container">\n            <div class="WD__products__feedback__button"></div>\n            <div class="WD__products__feedback__title WD__products__feedback__title--callback">Консультация по телефону</div>\n            <div class="WD__products__feedback__text">\n                Мы перезвоним и с удовольствием проконсультируем Вас.\n            </div>\n        </div>\n        <div class="WD__products__feedback__container">\n            <div class="WD__products__feedback__button"></div>\n            <div class="WD__products__feedback__title WD__products__feedback__title--messenger">Пообщаться в чате</div>\n            <div class="WD__products__feedback__text">\n                Продолжить общение в удобном чате. Товар будет прикреплен к диалогу.\n            </div>\n        </div>\n        <div class="WD__products__feedback__close"></div>\n    </div>\n    <div class="WD__products__feedback__image">\n        <div class="WD__products__feedback__image__item"></div>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {
window["yellApp"] = window["yellApp"] || {};
window["yellApp"]["templates"] = window["yellApp"]["templates"] || {};

window["yellApp"]["templates"]["products.share"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="WD__products__share">\n    <div class="WD__products__share__title">поделиться</div>\n    <div class="WD__products__share__items">\n        <div class="WD__products__share__item">\n            <svg class="WD__products__share__tw" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29 29"><path class="WD__products__share__tw__color" d="M21.967 11.8c.018 5.93-4.607 11.18-11.177 11.18-2.172 0-4.25-.62-6.047-1.76l-.268.422-.038.5.186.013.168.012c.3.02.44.032.6.046 2.06-.026 3.95-.686 5.49-1.86l1.12-.85-1.4-.048c-1.57-.055-2.92-1.08-3.36-2.51l-.48.146-.05.5c.22.03.48.05.75.08.48-.02.87-.07 1.25-.15l2.33-.49-2.32-.49c-1.68-.35-2.91-1.83-2.91-3.55 0-.05 0-.01-.01.03l-.49-.1-.25.44c.63.36 1.35.57 2.07.58l1.7.04L7.4 13c-.978-.662-1.59-1.79-1.618-3.047.028-.61.208-1.242.524-1.8l-.825.07c2.16 2.67 5.35 4.326 8.81 4.515l.59.033-.06-.59v-.02c-.05-.43-.06-.63-.06-.87 0-1.99 1.62-3.61 3.62-3.61 1.02 0 1.96.42 2.65 1.16l.2.21.28-.06c1.01-.22 1.94-.59 2.73-1.09l-.75-.56c-.1.36-.04.89.12 1.36.23.68.58 1.13 1.17.85l-.21-.45-.42-.27c-.52.8-1.17 1.48-1.92 2L22 11l.016.28c.013.2.014.35 0 .52v.04zm.998.038c.018-.22.017-.417 0-.66l-.498.034.284.41c.86-.592 1.61-1.364 2.2-2.267l.97-1.48-1.6.755c.17-.08.3-.02.34.03-.04-.048-.09-.155-.13-.292-.1-.297-.13-.64-.1-.766l.36-1.254-1.1.695c-.69.438-1.51.764-2.41.963l.48.15c-.87-.944-2.08-1.484-3.38-1.484-2.54 0-4.61 2.067-4.61 4.613 0 .29.02.51.08.984l.01.02.5-.06.03-.5c-3.17-.18-6.1-1.7-8.08-4.15l-.48-.56-.36.64c-.39.69-.62 1.48-.65 2.28.04 1.61.81 3.04 2.06 3.88l.3-.92c-.55-.02-1.11-.17-1.6-.45l-.59-.34-.14.67c-.02.08-.02.16 0 .24-.01 2.12 1.55 4.01 3.69 4.46l.1-.49-.1-.49c-.33.07-.67.12-1.03.14-.18-.02-.43-.05-.64-.07l-.76-.09.23.73c.57 1.84 2.29 3.14 4.28 3.21l-.28-.89c-1.38 1.04-3.06 1.63-4.85 1.66-.12-.01-.26-.02-.56-.05l-.17-.01-.18-.01L2.53 21l1.694 1.07c1.954 1.243 4.22 1.916 6.58 1.917 7.156 0 12.2-5.73 12.18-12.18l-.002.04z"></path></svg>\n        </div>\n        <div class="WD__products__share__item">\n            <svg class="WD__products__share__fb" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><slices/><sliceSourceBounds width="40.059" height="74.953" bottomLeftOrigin="true" y="-87.579" x="30"/></sfw></metadata><path class="WD__products__share__fb__color" d="M69.979,16.248c-0.093-0.566-0.485-1.04-1.022-1.237c-3.277-1.196-7.608-2.381-12.256-2.384  c-3.646-0.001-7.509,0.743-11.1,2.837l0,0c-1.808,1.051-3.233,2.38-4.318,3.876c-1.633,2.247-2.502,4.833-2.992,7.458  c-0.395,2.123-0.544,4.286-0.624,6.383c-0.936,0.022-1.997,0.029-2.963,0.029c-0.845,0-1.618-0.005-2.181-0.011  c-0.281-0.003-0.508-0.005-0.666-0.007c-0.158-0.003-0.242-0.004-0.244-0.004c-0.424-0.006-0.84,0.162-1.143,0.459  c-0.302,0.299-0.474,0.714-0.471,1.139l0.063,10.56C30.068,46.226,30.78,47,31.658,47c0.001,0,0.424,0,1.109,0  c1.555,0,4.457-0.067,6.688-0.023c0.33,7.254,0.408,18.125,0.408,26.56c0,3.556-0.015,6.655-0.027,8.887  c-0.008,1.113-0.014,1.998-0.02,2.612c-0.005,0.613-0.008,0.941-0.008,0.943c-0.004,0.424,0.162,0.833,0.463,1.135  c0.3,0.3,0.71,0.468,1.135,0.466l14.134-0.071c0.425-0.002,0.825-0.172,1.123-0.475c0.299-0.302,0.462-0.705,0.458-1.131  c0,0-0.074-8.691-0.161-18.066c-0.074-8.062-0.156-16.618-0.203-20.603c0.872-0.015,1.888-0.021,2.876-0.02  c1.155,0,2.279,0.007,3.113,0.014c0.416,0.003,0.761,0.007,1,0.01c0.241,0.003,0.375,0.004,0.375,0.004  c0.425,0.006,0.834-0.159,1.137-0.457c0.303-0.298,0.474-0.704,0.475-1.129l0.018-9.781c0.001-0.425-0.166-0.97-0.467-1.269  c-0.3-0.299-0.704-0.605-1.13-0.605c0,0-0.19,0-0.528,0s-0.819,0.144-1.396,0.144c-1.773,0-4.455,0.063-6.577,0.027  c0.038-1.085,0.136-2.008,0.296-2.826c0.154-0.796,0.366-1.441,0.616-1.972c0.188-0.398,0.397-0.712,0.621-0.975  c0.34-0.394,0.708-0.66,1.182-0.858c0.473-0.196,1.068-0.313,1.83-0.314c1.353-0.004,3.211,0.396,5.538,1.295  c0.017,0.007,0.036,0.009,0.054,0.016c0.019,0.006,0.034,0.017,0.053,0.022c0.034,0.011,0.068,0.012,0.102,0.02  c0.054,0.013,0.107,0.025,0.16,0.032c0.052,0.006,0.103,0.008,0.153,0.01c0.053,0.001,0.104,0.002,0.157-0.001  c0.052-0.004,0.102-0.011,0.151-0.02c0.051-0.008,0.102-0.018,0.151-0.031c0.048-0.013,0.096-0.03,0.142-0.048  c0.049-0.017,0.097-0.036,0.143-0.059c0.045-0.022,0.087-0.047,0.13-0.073c0.044-0.027,0.088-0.056,0.13-0.087  c0.04-0.029,0.076-0.062,0.112-0.096c0.04-0.036,0.078-0.072,0.112-0.111c0.034-0.038,0.064-0.078,0.095-0.119  c0.031-0.042,0.062-0.085,0.089-0.131c0.026-0.044,0.049-0.093,0.072-0.142c0.015-0.032,0.034-0.061,0.047-0.095  c0.008-0.018,0.01-0.037,0.017-0.057c0.005-0.017,0.016-0.032,0.021-0.05c0.321-1.058,0.872-2.831,1.345-4.702  c0.236-0.938,0.455-1.902,0.617-2.831c0.161-0.93,0.27-1.818,0.271-2.646C70.058,16.957,70.036,16.602,69.979,16.248z   M56.647,24.841c-0.787,0.407-1.473,0.981-2.022,1.672c-0.827,1.04-1.359,2.315-1.693,3.766c-0.334,1.454-0.477,3.102-0.477,4.96  c0,0.19,0.002,0.383,0.004,0.578c0.014,0.849,0.691,1.304,1.54,1.332C56.26,37.221,59.965,37,62.229,37c0.118,0,0.229,0,0.34,0  l-0.012,6.813c-0.813-0.006-1.852,0.104-2.924,0.104c-1.693,0-3.446,0.073-4.565,0.128c-0.857,0.043-1.523,0.783-1.511,1.641  c0.043,2.716,0.139,12.793,0.225,22.165c0.043,4.687,0.083,9.211,0.113,12.555c0.014,1.623,0.026,2.97,0.034,3.926L43.001,84.39  c0.017-2.107,0.04-6.104,0.04-10.893c0-9.053-0.086-20.906-0.484-28.23c-0.044-0.824-0.706-1.473-1.53-1.502  c-2.153-0.076-5.731-0.09-7.794-0.091l-0.044-7.29c0.45,0.003,0.968,0.006,1.516,0.006c1.554-0.001,3.336-0.017,4.595-0.09  c0.824-0.047,1.476-0.72,1.497-1.544c0.086-3.345,0.276-6.741,1.165-9.629c0.443-1.446,1.052-2.762,1.893-3.919  c0.843-1.156,1.914-2.162,3.348-2.998l0,0c3.013-1.754,6.275-2.403,9.5-2.404c3.671-0.003,7.262,0.858,10.167,1.842  c-0.023,0.497-0.097,1.11-0.213,1.775c-0.214,1.228-0.561,2.626-0.914,3.906c-0.162,0.586-0.324,1.144-0.477,1.658  c-1.875-0.607-3.545-0.934-5.068-0.937C58.902,24.049,57.698,24.294,56.647,24.841z"/></svg>\n        </div>\n        <div class="WD__products__share__item">\n            <svg class="WD__products__share__vk" enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="WD__products__share__vk__color" d="M19.499,18.97c-0.266,0-0.805-0.063-1.433-0.488c-0.474-0.323-0.932-0.84-1.375-1.341       c-0.673-0.761-1.317-1.466-1.835-1.303c-0.706,0.223-0.874,1.529-0.864,2.189c-0.001,0.065-0.016,0.326-0.192,0.514       c-0.132,0.132-0.309,0.184-0.643,0.194l-1.483,0.003c0.001,0.001-0.071,0.005-0.19,0.005c-0.751,0-3.384-0.188-5.727-2.601       c-3.019-3.107-5.689-9.246-5.716-9.308L0.11,6.199c0.005-0.003,0.01-0.007,0.014-0.01l0.155-0.077       c0.195-0.068,0.422-0.073,0.478-0.073l3.35-0.021c0.092,0.009,0.402,0.067,0.619,0.219C4.918,6.381,5.025,6.625,5.03,6.636       c0.011,0.027,0.558,1.397,1.292,2.642c1.316,2.251,2.015,3.015,2.583,2.714c0.353-0.19,0.646-1.327,0.499-3.433       c0.004-0.431-0.064-1.282-0.358-1.67C8.862,6.64,8.59,6.495,8.395,6.417l-0.652-0.26l0.529-0.46       c0.077-0.067,0.158-0.122,0.24-0.163C8.963,5.317,9.656,5.03,10.505,5.03h1.173c0.598,0,0.921,0.137,1.18,0.247       c0.118,0.049,0.221,0.093,0.331,0.12c0.916,0.216,0.883,1.068,0.823,2.614c-0.018,0.46-0.039,0.984-0.039,1.575       c0,0.133-0.004,0.275-0.008,0.42c-0.021,0.747-0.047,1.661,0.467,1.99c0.288,0.179,0.924-0.012,2.51-2.678       c0.756-1.276,1.31-2.728,1.315-2.742c0.015-0.035,0.137-0.3,0.321-0.415c0.122-0.075,0.268-0.09,0.37-0.09l0.134,0.007       L22.7,6.05c-0.002-0.001,0.11-0.012,0.26-0.012c0.512,0,0.739,0.123,0.797,0.16l0.117,0.076l0.051,0.131       c0.194,0.514-0.438,1.737-1.882,3.636c-0.31,0.406-0.582,0.757-0.82,1.062c-1.616,2.07-1.616,2.07,0.136,3.677       c1.526,1.398,2.146,2.268,2.397,2.751c0.207,0.334,0.258,0.637,0.139,0.874c-0.229,0.444-0.971,0.503-1.002,0.506l-3.291,0.054       C19.607,18.966,19.563,18.97,19.499,18.97z M15.021,14.956c0.882,0,1.545,0.749,2.313,1.616       c0.408,0.462,0.83,0.938,1.215,1.199c0.467,0.316,0.846,0.342,0.951,0.342v0.428l0.035-0.43l3.32-0.056       c0.055-0.005,0.127-0.022,0.19-0.043c-0.009-0.019-0.021-0.038-0.034-0.061c-0.194-0.371-0.722-1.157-2.23-2.541       c-2.096-1.921-2.12-2.419-0.233-4.835c0.238-0.303,0.508-0.65,0.814-1.053c1.136-1.495,1.532-2.268,1.67-2.627       c-0.112-0.003-0.25,0.006-0.271,0.008l-3.701,0.03l-0.041-0.002c-0.081,0.255-0.624,1.613-1.34,2.824       c-1.643,2.758-2.453,3.139-3.085,3.14c-0.225,0-0.433-0.06-0.619-0.176c-0.926-0.594-0.892-1.826-0.867-2.726       c0.005-0.149,0.009-0.283,0.009-0.409c0-0.604,0.021-1.139,0.039-1.609c0.061-1.539-0.001-1.708-0.164-1.746       c-0.155-0.038-0.304-0.095-0.466-0.164c-0.228-0.097-0.423-0.18-0.848-0.18h-1.173c-0.392,0-0.75,0.081-1.053,0.184       c0.1,0.088,0.195,0.19,0.28,0.306c0.52,0.686,0.531,1.919,0.528,2.159c0.165,2.354-0.155,3.782-0.95,4.211       c-0.203,0.108-0.417,0.163-0.638,0.163c-0.912,0-1.692-0.808-3.088-3.199c-0.78-1.321-1.34-2.736-1.346-2.75       C4.202,6.917,4.091,6.879,4.033,6.868L1.007,6.893c0.643,1.403,2.906,6.123,5.364,8.654c2.11,2.171,4.447,2.34,5.113,2.34       c0.09,0,0.146-0.004,0.16-0.005l1.492-0.002c0.01-0.613,0.153-2.447,1.462-2.858C14.733,14.978,14.876,14.956,15.021,14.956z"/></svg>\n        </div>\n    </div>\n    <div class="WD__products__share__close"></div>\n</div>\n';

}
return __p
}})();