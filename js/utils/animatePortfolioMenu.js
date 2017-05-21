define(function(require, exports) {
    'use strict';

    var self = this;
    self.animate = require('utils/animate');
    var _ = require('underscore');

    self.animateMenuNav = function(parms) {
        var transition = parms.isIntro ? 'bounceOutLeft' : 'bounceInLeft';
        var $menuNavElem = $(parms.elem);
        var $linesElem = $('span', $menuNavElem);
        var $menuPanelElem = $('#portfolio .menu-panel');
        var outroAnimation = function() {
            $menuPanelElem.addClass('hide');
        };

        if(!parms.isIntro) {
            $linesElem.addClass('highlight-color');
            $menuNavElem.addClass('open-nav');
            $menuPanelElem.removeClass('hide');
            self.animate.animateElem({elem: $menuPanelElem, animation: transition, callbacks: []});
        } else {
            $menuNavElem.removeClass('open-nav');
            $linesElem.removeClass('highlight-color');
            self.animate.animateElem({elem: $menuPanelElem, animation: transition, callbacks: [outroAnimation]});
        }
    };

    self.animateMenuItems = function(parms) {
        var transition = parms.isIntro ? 'flipInX' : 'flipOutX';
        self.animate.animateElem({elem: parms.elem, animation: transition, callbacks: parms.callbacks || []});
    };

    self.animateSubMenuItem = function(parms) {
        var $menuPanelElem = $('#portfolio .menu-panel');
        var $menuNav = $('#portfolio .menu-nav');
        var $linesElem = $('span', $menuNav);
        var removeAnimation = function() {
            $menuPanelElem.removeClass('bounceOutLeft animated').addClass('hide');
        };
        var hideMenu = function() {
            parms.elem.removeClass('selected');
            $menuNav.removeClass('open-nav');
            $linesElem.removeClass('highlight-color');
            _.delay(removeAnimation, 500);
        };
        var closeMenuNav = function() {
            $menuPanelElem.addClass('bounceOutLeft animated');
            hideMenu();
        }
        self.animateMenuItems({elem: parms.subMenu, isIntro: parms.isIntro, callbacks: [closeMenuNav]});
    };

    return {
        menuNav: self.animateMenuNav,
        menuItem: self.animateMenuItems,
        menuSubItem: self.animateSubMenuItem
    };

});
