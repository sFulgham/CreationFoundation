define(function(require, exports){
    'use strict';

    var self = this;

    self.init = function(app){
        var innerSelf = this;

        innerSelf.navBarCtrl = function($scope, $rootScope){
            var nbc = this;
            nbc.scope = $scope;
            nbc.model = {
                brand: 'Steven Fulgham',
                navItems: [
                    {id: 1, href: '#about', title: 'About'},
                    {id: 2, href: '#portfolio', title: 'Portfolio'},
                    {id: 3, href: '#contact', title: 'Contact'},
                    {id: 4, href: '#', title: 'Unit Test'}
                ]
            };
        };

        app.controller('navBarCtrl', ['$scope', '$rootScope', innerSelf.navBarCtrl]);
    };

    return {
        init: self.init
    }
});
