define(function(require, exports) {
    'use strict';

    var self = this;
    var $ = require('jquery');
    self.navWidget = require('utils/navWidget');
    self.gallery = require('utils/gallery');
    self.animate = require('utils/animate');

    self.init = function() {
        self.navWidget.init();
        self.gallery.init();
        self.animate.init();

        $(window).scroll(function() {
            if($(this).scrollTop() > 300) {
                $('.navbar-default').addClass('navbar-shrink');
            }
            else {
                $('.navbar-default').removeClass('navbar-shrink');
            }
        });

        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top'
        });

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        $(".privacy-statement").click(function() {
            var $privacy = $('.privacy-content');
            if($privacy.hasClass('hide')) {
                $privacy.removeClass('hide')
                $privacy.addClass('show');
            } else {
                $privacy.removeClass('show')
                $privacy.addClass('hide');
            }
            $('html,body').scrollTop($(document).height() - $(window).height());
        });
    };

    return {
        init: self.init
    }
});
