define(function(require, exports) {
    'use strict';

    var self = this;
    var $ = require('jquery');
    var _ = require('underscore');

    self.delay = function(func, delay) {
        _.delay(func, delay);
    };

    self.endAnimation = function(parms) {
        $(parms.elem).removeClass(parms.animation + ' animated');
        $(document).trigger('animation:complete', parms);
    };

    self.startAnimation = function(parms) {
        $(parms.elem).addClass(parms.animation + ' animated')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                self.endAnimation({elem: parms.elem, animation: parms.animation, callbacks: parms.callbacks});
            });
    };

    self.animate = function(parms) {
        self.startAnimation({elem: parms.elem, animation: parms.animation, callbacks: parms.callbacks || []});
    };

    self.registerEvents = function() {
        $(document).on('animation:complete', function(evt, parms) {
            _.each(parms.callbacks, function(callback) {
                var run = true;
                if(parms.elem.selector === '#content-section') {
                    var isClicked = $('.menuBtn').prop('data-clicked');
                    if(!isClicked) {
                        run = false;
                    }
                }
                if(run) {
                    callback();
                    $(document).trigger('animation:callback:complete', parms);
                }
            });
        });
    };

    return {
        init: self.registerEvents,
        animateDelay: self.delay,
        animateElem: self.animate
    };
});
