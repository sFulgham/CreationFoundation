define(function(require, exports) {
    'use strict';

    var self = this;
    self.animateMm = require('utils/animateMainMenu');
    self.animate = require('utils/animate');
    var $ = require('jquery');

    self.init = function() {
        $(document).on('click', '#nav-widget .menuBtn', function() {
            var lineElem = $('#lines');
            var thisElem = $(this);
            var mainMenuElem = $('#main-menu');
            var contentSection = $('#content-section');

            thisElem.prop('data-clicked', true);

            if(thisElem.hasClass('active')) {
                thisElem.removeClass('active');
                var hideMainMenu = function() {
                    mainMenuElem.removeClass('active');
                    thisElem.prop('data-clicked', false);
                };
                if(contentSection.length > 0) {
                    self.animateMm.animateMainMenu(false);
                    thisElem.prop('data-clicked', false);
                } else {
                    hideMainMenu();
                }
            } else {
                thisElem.addClass('active');
                var showMainMenu = function() {
                    mainMenuElem.addClass('active');
                    if(contentSection.length > 0) {
                        contentSection.addClass('hide');
                        self.animateMm.animateMainMenu(true);
                    }
                    thisElem.prop('data-clicked', false);
                };
                if(contentSection.length > 0) {
                    self.animate.animateElem({elem: contentSection, animation: 'fadeOut', callbacks: [showMainMenu]});
                } else {
                    showMainMenu();
                }
            }

            lineElem.hasClass('activate') ?
                lineElem.removeClass('activate').addClass('deactivate') :
                lineElem.removeClass('deactivate').addClass('activate');
        });
    };

    self.registerEvents = function() {
        $(document).on('animation:callback:complete', function(evt, parms) {
            if(parms.elem.selector === '#main-menu ul li.logo') {
                var mainMenuElem = $('#main-menu');
                var contentSection = $('#content-section');
                mainMenuElem.removeClass('active');
                if(contentSection.length > 0) {
                    contentSection.removeClass('hide');
                    self.animate.animateElem({elem: contentSection, animation: 'fadeIn'});
                }
            }
        });
        self.init();
    };

    return {
        init: self.registerEvents
    };
});