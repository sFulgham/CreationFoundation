define(function(require, exports){
    'use strict';

    var self = this;
    self.animate = require('utils/animate');
    var _ = require('underscore');

    self.animateMainMenu = function(isIntro) {
        var transition = isIntro ? 'bounceInUp' : 'bounceOutDown';
        var mainMenu = $('#main-menu');
        var logo = $('ul li.logo', mainMenu);
        var angularText = $('ul li.angular-link', mainMenu);
        var reactText = $('ul li.react-link', mainMenu);
        var backboneText = $('ul li.backbone-link', mainMenu);
        var emberText = $('ul li.ember-link', mainMenu);
        var knockoutText = $('ul li.knockout-link', mainMenu);

        var animateLogo = function() {
            if(isIntro) logo.removeClass('hide');
            var hideElem = function() {
                logo.addClass('hide');
            };
            var callback = !isIntro ? [hideElem] : [];
            self.animate.animateElem({elem: logo, animation: transition, callbacks: callback});
        };

        var animateAngularText = function() {
            if(isIntro) angularText.removeClass('hide');
            var hideElem = function() {
                angularText.addClass('hide');
            };
            var callback = !isIntro ? [hideElem] : [];
            self.animate.animateElem({elem: angularText, animation: transition, callbacks: callback});
        };

        var animateReactLink = function() {
            if(isIntro) reactText.removeClass('hide');
            var hideElem = function() {
                reactText.addClass('hide');
            };
            var callback = !isIntro ? [hideElem] : [];
            self.animate.animateElem({elem: reactText, animation: transition, callbacks: callback});
        };

        var animateBackboneLink = function() {
            if(isIntro) backboneText.removeClass('hide');
            var hideElem = function() {
                backboneText.addClass('hide');
            };
            var callback = !isIntro ? [hideElem] : [];
            self.animate.animateElem({elem: backboneText, animation: transition, callbacks: callback});
        };

        var animateEmberLink = function() {
            if(isIntro) emberText.removeClass('hide');
            var hideElem = function() {
                emberText.addClass('hide');
            };
            var callback = !isIntro ? [hideElem] : [];
            self.animate.animateElem({elem: emberText, animation: transition, callbacks: callback});
        };

        var animateKnockoutText = function() {
            if(isIntro) knockoutText.removeClass('hide');
            var hideElem = function() {
                knockoutText.addClass('hide');
            };
            var callback = !isIntro ? [hideElem] : [];
            self.animate.animateElem({elem: knockoutText, animation: transition, callbacks: callback});
        };

        var animationFuncs = [
            animateLogo,
            animateAngularText,
            animateReactLink,
            animateBackboneLink,
            animateEmberLink,
            animateKnockoutText
        ];

        var forward = function() {
            var delay = 0;
            _.each(animationFuncs, function(func) {
                self.animate.animateDelay(func, delay);
                delay += 200;
            });
        };

        var reverse = function() {
            var delay = 0;
            _.each(animationFuncs.reverse(), function(func) {
                self.animate.animateDelay(func, delay);
                delay += 200;
            });
        };

        isIntro ? forward() : reverse();
    };

    return {
        animateMainMenu: self.animateMainMenu
    }
});
