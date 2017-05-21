define(function(require, exports) {
    'use strict';

    var self = this;
    var _ = require('underscore');
    self.swiper = require('swiper');
    var swiper = null;

    self.init = function() {
        swiper = new Swiper('.swiper-container', {
            preloadImages: false,
            lazyLoading: true,
            spaceBetween: 50,
        });
    };

    self.nextBtn = function() {
        swiper.slideNext();
    };

    self.prevBtn = function() {
        swiper.slidePrev();
    };

    self.addGallery = function(parms) {
        swiper.removeAllSlides();
        var slides = _.map(parms.images, function(image){
            var imgSrc = parms.path + image + parms.ext;
            var html = "";
            html += "<div class='swiper-slide'>";
            html += "<img data-src='" + imgSrc + "' class='swiper-lazy'>";
            html += "<div class='swiper-lazy-preloader'></div>";
            html += "</div>";
            return html;
        });
        swiper.prependSlide(slides);
        swiper.slideTo(1);
    };

    return {
        init: self.init,
        next: self.nextBtn,
        prev: self.prevBtn,
        add: self.addGallery
    };
});
