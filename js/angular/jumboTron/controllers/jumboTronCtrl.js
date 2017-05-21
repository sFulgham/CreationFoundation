define(function(require, exports){
   'use strict';

    var self = this;

    self.init = function(app){
        var innerSelf = this;

        innerSelf.jumboTronCtrl = function($scope, $rootScope){
            var jc = this;
            jc.scope = $scope;
        };

        app.controller('jumboTronCtrl', ['$scope', '$rootScope', innerSelf.jumboTronCtrl]);
    };

    return {
        init: self.init
    }
});
