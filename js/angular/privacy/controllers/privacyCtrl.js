define(function(require, exports){
   'use strict';

    var self = this;
    self.tooltip = require('utils/tooltip');

    self.init = function(app){
        var innerSelf = this;

        innerSelf.privacyCtrl = function($scope, $rootScope){
            var pc = this;
            pc.scope = $scope;
            pc.model = {
                header: 'Privacy statement',
                privacyStatement: 'I understand that as technology advances the only way to learn is to research and study the work of those who are successful. ' +
                'With that being said I don&lsquo;t mind if you use my code in your projects. Good luck understanding' +
                ' it! ' +
                'However I do mind if you use my art work!'
            };
            pc.onLoad = function(){
                $('a.page-scroll').bind('click', function(event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                });

                var toolTipElems = [
                    {elem: '.react-link a', message: 'React version of the portfolio is coming soon!'},
                    {elem: '.ember-link a', message: 'Ember version of the portfolio is coming soon!'},
                    {elem: '.knockout-link a', message: 'Currently working on the Knockout version of the portfolio.'},
                    {elem: '.unit-test', message: 'Angular unit test coming soon.'}
                ];

                self.tooltip.init(toolTipElems);
            };
        };

        app.controller('privacyCtrl', ['$scope', '$rootScope', innerSelf.privacyCtrl]);
    };

    return {
        init: self.init
    }
});
