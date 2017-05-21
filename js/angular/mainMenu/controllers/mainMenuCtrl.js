define(function(require, exports){
   'use strict';

    var self = this;

    self.init = function(app){
        var innerSelf = this;

        innerSelf.mainMenuCtrl = function($scope, $rootScope){
            var mmc = this;
            mmc.scope = $scope;
            mmc.model = {
                caption: 'Select an MV* framework or plugin.',
                menuItems: [
                    {id: 1, className: 'react-link', href: '', title: 'React'},
                    {id: 2, className: 'backbone-link', href: 'clean.html?app=backbone', title: 'Backbone'},
                    {id: 3, className: 'ember-link', href: '', title: 'Ember'},
                    {id: 4, className: 'knockout-link', href: '', title: 'Knockout'}
                ]
            };
        };

        app.controller('mainMenuCtrl', ['$scope', '$rootScope', innerSelf.mainMenuCtrl]);
    };

    return {
        init: self.init
    }
});
