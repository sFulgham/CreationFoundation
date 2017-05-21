define(function(require, exports){
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.navWidget = require('utils/navWidget');
    self.gallery = require('utils/gallery');
    self.tooltip = require('utils/tooltip');
    self.animate = require('utils/animate');
    var $ = self.common.$;

    self.init = function(){
        self.navWidget.init();
        self.gallery.init();
        self.animate.init();

        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 300){
                $('.navbar-default').addClass('navbar-shrink');
            }
            else{
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
            if($privacy.hasClass('hide')){
                $privacy.removeClass('hide')
                $privacy.addClass('show');
            } else {
                $privacy.removeClass('show')
                $privacy.addClass('hide');
            }
            $('html,body').scrollTop($(document).height() - $(window).height());
        });

        var toolTipElems = [
            {elem: '.react-link a', message: 'React version of the portfolio is coming soon!'},
            {elem: '.ember-link a', message: 'Ember version of the portfolio is coming soon!'},
            {elem: '.knockout-link a', message: 'Currently working on the Knockout version of the portfolio.'}
        ];

        self.tooltip.init(toolTipElems);
    };

    return{
        init: self.init
    }
});
